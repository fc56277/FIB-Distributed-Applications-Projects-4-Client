import DeleteImage from "../components/DeleteImage";
import ListImages from "../components/ListImages";
import Login from "../components/Login";
import ModifyImage from "../components/ModifyImage";
import RegisterImage from "../components/RegisterImage";
import RegisterUser from "../components/RegisterUser";
import SearchImages from "../components/SearchImages";
import { Endpoint } from "../types/NavBarTypes";

const CLIENT_ENDPOINTS: Endpoint[] = [
    {
        displayName: 'Login',
        route: '/login',
        component: Login,
    },
    {
        displayName: 'Register User',
        route: '/register-user',
        component: RegisterUser,
    },
    {
        displayName: 'Register Image',
        route: '/register-image',
        component: RegisterImage,
    },
    {
        displayName: 'List Images',
        route: '/list-images',
        component: ListImages,
    },
    {
        displayName: 'Modify Image',
        route: '/modify-image',
        component: ModifyImage,
    },
    {
        displayName: 'Delete Image',
        route: '/delete-image',
        component: DeleteImage,
    },
    {
        displayName: 'Search Images',
        route: '/search-images',
        component: SearchImages
    }
];

const API_BASE = 'http://localhost:8080/RestADServer4';

const SERVER_ENDPOINTS = {
    pingUrl: `${API_BASE}/api/ping`,
    registerUserUrl: `${API_BASE}/api/user/register`,
    loginUrl: `${API_BASE}/api/user/login`,
    menuUrl: `${API_BASE}/api/menu`,
    registerImageUrl: `${API_BASE}/api/registerImage`,
    listImagesUrl: `${API_BASE}/api/list`,
    modifyImagesUrl: `${API_BASE}/api/modify`,
    deleteImageUrl: `${API_BASE}/api/delete`,
    searchImageUrl: `${API_BASE}/api/search`,
}

export { CLIENT_ENDPOINTS, SERVER_ENDPOINTS };
