const getToken = () => {
    return window.localStorage.getItem('accessToken');
}
const getRefreshToken = () => {
    return window.localStorage.getItem('refreshToken');
}
const setTokens = tokens => {
    window.localStorage.setItem('accessToken', tokens.access);
    window.localStorage.setItem('refreshToken', tokens.refresh);
};

const deleteTokens = () => {
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('refreshToken');
};

export default {getToken, getRefreshToken, setTokens, deleteTokens};