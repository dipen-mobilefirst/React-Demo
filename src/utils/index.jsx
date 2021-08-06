var token = 'jwt';

export const login = () => {
    localStorage.setItem(token,'testToken');
}

export const logout = () => {
    localStorage.removeItem(token);
}   

export const isLogin = () => {
    if(localStorage.getItem(token)){
        return true;
    }
    return false;
}