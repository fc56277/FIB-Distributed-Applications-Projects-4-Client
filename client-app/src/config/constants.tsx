import NotFound from "../components/404";
import Login from "../components/Login";
import RegisterUser from "../components/RegisterUser";

const DEFAULT_COMPONENTS = [Login, RegisterUser, NotFound, NotFound, NotFound];
const DEFAULT_ROUTES = ['Login', 'Register User', 'Register Image', 'See Images', 'Modify Image'];
const REGISTER_USER_URL = DEFAULT_ROUTES[1];

const SERVER_ENDPOINTS = {
    pingUrl: 'http://localhost:8080/RestAD-1.0-SNAPSHOT/api/ping',
    registerUserUrl: 'http://localhost:8080/RestAD-1.0-SNAPSHOT/api/user/register',
    loginUrl: 'http://localhost:8080/RestAD-1.0-SNAPSHOT/api/user/login',
}

export { DEFAULT_COMPONENTS, DEFAULT_ROUTES , REGISTER_USER_URL, SERVER_ENDPOINTS };