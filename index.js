import { setAuth as setAuthInternal, getAuth } from './hooks/useLocalStorage';

export function setAuth(status) {
    if (status && typeof props.setAuth === 'boolean') {
        if (status === true) {
            setAuthInternal(true);
        } else {
            setAuthInternal(false);
        }
    }
    setAuthInternal(false);
}

export default function checkAuth(route) {
    const auth = getAuth();
    if (auth!==null && auth===true) {
        window.location.replace(`/${route}`);
    } else {
        window.location.replace("/");
    }
}