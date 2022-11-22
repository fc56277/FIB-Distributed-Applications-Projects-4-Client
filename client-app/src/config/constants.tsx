import NotFound from "../components/404";
import Login from "../components/Login";
import RegisterUser from "../components/RegisterUser";

const DEFAULT_COMPONENTS = [Login, RegisterUser, NotFound, NotFound, NotFound];
const DEFAULT_ROUTES = ['Login', 'Register User', 'Register Image', 'See Images', 'Modify Image'];
const REGISTER_USER_URL = DEFAULT_ROUTES[1];

export { DEFAULT_COMPONENTS, DEFAULT_ROUTES , REGISTER_USER_URL };