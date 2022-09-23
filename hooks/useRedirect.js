import { getAuth } from "./useLocalStorage"

export default function useRedirect(route) {
    if (getAuth === true) {
        window.location.replace(`/${route}`);
    } else {
        window.location.replace("/");
    }
}