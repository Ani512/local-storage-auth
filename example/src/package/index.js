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
    const pathName = window.location.pathname;

    if (auth === false) {
        window.location.replace(baseRoute);
        return;
    } 

    if (route !== undefined && route.charAt(0) !== "/") {
        route = `/${route}`;
    }

    if (auth === true && route && route.length > 0 && route!==pathName) {
        window.location.replace(`${baseRoute}${route}`);
        return;
    }

    if (auth === true && !route) {
        console.log("The User is Authenticated");
        return;
    }

    console.log(`The User is Authenticated. Redirected to : ${route}`)
}