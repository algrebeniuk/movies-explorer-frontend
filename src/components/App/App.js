import Main from '../Main/Main';
import '../App/App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { useState, useEffect, useCallback } from 'react';
import mainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
    const[loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem('loggedIn')));
    const[currentUser, setCurrentUser] = useState({});
    const[errorMessageRegister, setErrorMessageRegister] = useState('');
    const[errorMessageLogin, setErrorMessageLogin] = useState('');
    const[errorMessageProfile, setErrorMessageProfile] = useState('');
    const[successMessageProfile, setSuccessMessageProfile] =useState('');

    const history = useHistory();
    
    const handleCheckToken = useCallback(() => {
      setLoggedIn(localStorage.getItem('loggedIn'));
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        mainApi.checkToken(jwt)
          .then((res) => {
            const { _id, name, email } = res;
            setCurrentUser({ _id, name, email });
          })
          .catch((err) => {
            console.log(err);
            handleLogOut();
          })
      }
    }, []);

    useEffect(() => {
      handleCheckToken();
    }, [handleCheckToken]);

    function handleRegister(data) {
      mainApi.register(data)
        .then(() => {
          handleLogin(data);
          setErrorMessageRegister('');
        })
        .catch((err) => {
          console.log(err);
          setErrorMessageRegister('Пользователь с таким email уже существует.');
        })
    }

    function handleLogin(data) {
      mainApi.login(data)
        .then((res) => {
          if (res.token) {
            localStorage.setItem('jwt', res.token);
            localStorage.setItem('loggedIn', true);
            handleCheckToken();
            history.push('/movies');
            setErrorMessageLogin('');
          }
        })
        .catch((err) => {
          console.log(err);
          setErrorMessageLogin('Вы ввели неправильный логин или пароль.');
        })
    }

    function handleLogOut() {
      localStorage.clear();
      setLoggedIn(false);
      setCurrentUser({
        _id: '',
        name: '',
        email: '',
      });
    }

    function handleEditProfile({ name, email }) {
      mainApi.editUser(name, email)
        .then((res) => {
          setCurrentUser({
            name: res.name,
            email: res.email,
          });
          setErrorMessageProfile('');
          setSuccessMessageProfile('Измененения прошли успешно');
        })
        .catch(err => {
          console.log(err);
          setErrorMessageProfile('Пользователь с таким email уже существует.');
          setSuccessMessageProfile('');
        })
    } 
    
    return (
      <CurrentUserContext.Provider value={{currentUser}}>
            <Switch>
                <Route exact path="/">
                  <Main loggedIn={loggedIn}/>
                </Route>  
                <ProtectedRoute 
                    path="/movies"
                    component={Movies}
                    loggedIn={loggedIn}
                    currentUser={currentUser}
                />
                <ProtectedRoute 
                  path="/saved-movies"
                  component={SavedMovies}
                  loggedIn={loggedIn}
                />
                <ProtectedRoute 
                  path="/profile"
                  component={Profile} 
                  loggedIn={loggedIn}
                  handleEditProfile={handleEditProfile}
                  handleLogOut={handleLogOut}
                  errorMessage={errorMessageProfile}
                  successMessage={successMessageProfile}
                />
                <Route path="/signup">
                  {!loggedIn
                  ? <Register
                      onRegister={handleRegister}
                      errorMessage={errorMessageRegister}
                    />  
                  : <Redirect to='/'></Redirect>
                  }
                </Route>
                <Route path="/signin">
                  {!loggedIn
                  ?  <Login
                       onLogin={handleLogin}
                       errorMessage={errorMessageLogin}
                     />
                  :  <Redirect to='/'></Redirect> 
                  } 
                </Route>
                <Route path="*">
                  <PageNotFound/>
                </Route>
            </Switch> 
        </CurrentUserContext.Provider>
    )
}

export default App;
