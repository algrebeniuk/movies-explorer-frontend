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
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
    const[movie, setMovie] = useState([]);
    const[addedMovie, setAddedMovie] = useState(0);
    const[preloader, setPreloader] = useState(false);
    const[serverError, setServerError] = useState(false);
    const[notFoundMovies, setNotFoundMovies] = useState(false);
    const[loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem('loggedIn')));
    const[currentUser, setCurrentUser] = useState({});
    const[errorMessageRegister, setErrorMessageRegister] = useState('');
    const[errorMessageLogin, setErrorMessageLogin] = useState('');
    const[errorMessageProfile, setErrorMessageProfile] = useState('');
    const[successMessageProfile, setSuccessMessageProfile] =useState('')

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
            history.push('/profile');
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
    
    function searchMovie(movieName, shortMovie) {
      setPreloader(true);
      setNotFoundMovies(false);
      moviesApi.getMovies()
        .then((movies) => {
          const searchedMovies = movies.filter((item) => item.nameRU.toLowerCase().includes(movieName.toLowerCase()));
          const renderedMovies = shortMovie ? searchedMovies.filter((item) => item.duration <= 40) : searchedMovies;
          localStorage.setItem('renderedMovies', JSON.stringify(renderedMovies)); 
          localStorage.setItem('movieName', movieName);
          localStorage.setItem('shortMovie', shortMovie);
          setPreloader(false);
          setNotFoundMovies(true);
          moviesNumber()
        })
        .catch((err) => {
          console.log(err);
          setPreloader(false);
          setServerError(true);
        })
    }

    function handleSearchMoreMovies() {
      const renderedMovies = JSON.parse(localStorage.getItem('renderedMovies'));
      setMovie(renderedMovies.slice(0, movie.length + addedMovie));
    }

    function moviesNumber() {
      const renderedMovies = JSON.parse(localStorage.getItem('renderedMovies'));
      if  (window.innerWidth > 570) {
        setMovie(renderedMovies.slice(0, 7));
        setAddedMovie(7);
      } else {
        setMovie(renderedMovies.slice(0, 5));
        setAddedMovie(5);
      }
    }

    function handleSearchMovie(movieName, shortMovie) {
      searchMovie(movieName, shortMovie);
    }  

    return (
      <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
            <Switch>
                <Route exact path="/">
                  <Main loggedIn={loggedIn}/>
                </Route>  
                <Route path="/movies">
                  <Movies
                    handleSearchMovie={handleSearchMovie}
                    inputValue={localStorage.getItem('movieName') || ""}
                    checkboxValue={localStorage.getItem('shortMovie') || ""}
                    movies={movie} 
                    handleShowMore={handleSearchMoreMovies}
                    serverError={serverError}
                    preloader={preloader}
                    notFoundMovies={notFoundMovies}
                  />
                </Route>
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
                  <Register
                    onRegister={handleRegister}
                    errorMessage={errorMessageRegister}
                  />  
                </Route>
                <Route path="/signin">
                  <Login
                    onLogin={handleLogin}
                    errorMessage={errorMessageLogin}
                />
                </Route>
                <Route path="*">
                  <PageNotFound/>
                </Route>
            </Switch> 
        </CurrentUserContext.Provider>
    )
}

export default App;
