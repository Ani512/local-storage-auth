import { setAuth as setAuthInternal } from './hooks/useLocalStorage';

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