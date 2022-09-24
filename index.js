import { setAuth as setAuthInternal, getAuth } from './useLocalStorage';

export function setAuth(status) {
    if (status) {
        if (status === true) {
            setAuthInternal(true);
            return;
        } else {
            setAuthInternal(false);
        }
    }
    setAuthInternal(false);
}

export function checkAuth(route) {
    const auth = getAuth();
    const baseRoute = window.location.origin;
    if (auth === false) {
        window.location.replace(baseRoute);
        return;
    } 
    
    if (route!=undefined && auth===true) {
        window.location.replace(`${baseRoute}/${route}`);
    }

    console.log("Redirect Not Working")
}