import NotFound from "../components/404";
import Login from "../components/Login";
import RegisterUser from "../components/RegisterUser";
import NavBar from "../components/NavBar"; // Menu
import RegisterImage from "../components/RegisterImage";
import ListImages from "../components/ListImages";
import ModifyImage from "../components/ModifyImage";
import DeleteImage from "../components/DeleteImage";
import SearchImages from "../components/SearchImages";

                            // [Login, Menu, RegisterUser, NotFound, NotFound, NotFound]
const DEFAULT_COMPONENTS = [Login, NavBar, RegisterUser, RegisterImage, ListImages, ModifyImage, DeleteImage, SearchImages]; // RegisterImage, ListImages, ModifyImage, DeleteImage, SearchImage
const DEFAULT_ROUTES = ['Login', 'NavBar', 'Register User', 'Register Image', 'List Images', 'Modify Image', 'Delete Image', 'Search Images'];
const REGISTER_USER_URL = DEFAULT_ROUTES[1];

const SERVER_ENDPOINTS = {
    pingUrl: 'http://localhost:8080/RestAD-1.0-SNAPSHOT/api/ping',
    registerUserUrl: 'http://localhost:8080/RestAD-1.0-SNAPSHOT/api/user/register',
    loginUrl: 'http://localhost:8080/RestAD-1.0-SNAPSHOT/api/user/login',
    menuUrl: 'http://localhost:8080/RestAD-1.0-SNAPSHOT/api/menu',
    registerImageUrl: 'http://localhost:8080/RestAD-1.0-SNAPSHOT/api/registerImage',
    listImagesUrl: 'http://localhost:8080/RestAD-1.0-SNAPSHOT/api/list',
    modifyImagesUrl: 'http://localhost:8080/RestAD-1.0-SNAPSHOT/api/modify',
    deleteImageUrl: 'http://localhost:8080/RestAD-1.0-SNAPSHOT/api/delete',
    searchImageUrl: 'http://localhost:8080/RestAD-1.0-SNAPSHOT/api/search',
}

export { DEFAULT_COMPONENTS, DEFAULT_ROUTES , REGISTER_USER_URL, SERVER_ENDPOINTS };