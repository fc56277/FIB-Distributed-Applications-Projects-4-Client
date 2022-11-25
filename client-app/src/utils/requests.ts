import axios from "axios";

const apiPost = async (requestBody: URLSearchParams, url: string, headers?: object, errorMsg?: string) => {
    if (headers && !Object.keys(headers).includes('username') && !url.includes('user') && !url.toLowerCase().includes('login')) {
        console.warn('Warning: sending POST-request without username-header required for authorization.');
    }
    const response = await axios.post(url, requestBody, { headers })
        .catch(error => {
            console.log(error);
            alert(errorMsg ?? `Post request failed with error ${error}`);
            return null;
        });
    return response;
};

export { apiPost };