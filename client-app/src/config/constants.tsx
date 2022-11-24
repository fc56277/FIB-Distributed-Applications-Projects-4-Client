import DeleteImage from "../components/DeleteImage";
import ListImages from "../components/ListImages";
import Login from "../components/Login";
import ModifyImage from "../components/ModifyImage";
import NavBar from "../components/NavBar"; // Menu
import RegisterImage from "../components/RegisterImage";
import RegisterUser from "../components/RegisterUser";
import SearchImages from "../components/SearchImages";

const DEFAULT_COMPONENTS = [Login, RegisterUser, NavBar, RegisterImage, ListImages, ModifyImage, DeleteImage, SearchImages];
const DEFAULT_ROUTES = ['Login', 'Register User', 'NavBar', 'Register Image', 'List Images', 'Modify Image', 'Delete Image', 'Search Images'];
const REGISTER_USER_URL = DEFAULT_ROUTES[1];

const base = 'http://localhost:8080/RestAD-1.0-SNAPSHOT';

const SERVER_ENDPOINTS = {
    pingUrl: `${base}/api/ping`,
    registerUserUrl: `${base}/api/user/register`,
    loginUrl: `${base}/api/user/login`,
    menuUrl: `${base}/api/menu`,
    registerImageUrl: `${base}/api/registerImage`,
    listImagesUrl: `${base}/api/list`,
    modifyImagesUrl: `${base}/api/modify`,
    deleteImageUrl: `${base}/api/delete`,
    searchImageUrl: `${base}/api/search`,
}

export { DEFAULT_COMPONENTS, DEFAULT_ROUTES, REGISTER_USER_URL, SERVER_ENDPOINTS };
