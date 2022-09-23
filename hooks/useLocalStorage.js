export function setAuth(auth) {
    try {
        if (typeof window !== 'undefined' && auth === true) {
            // Not using boolean true to abstract functioanlity from user
            localStorage.setItem('auth', 'auth_true');
        } else {
            localStorage.setItem('auth', 'auth_false');
        }   
      } catch (error) {
        console.log(`Error in Setting Authentication: ${error}`);
      }
}

export function getAuth() {
    let isAuth = false;
    try {
        if (typeof window !== undefined) {
            isAuth = localStorage.getItem('auth');
            if (isAuth === 'auth_true') {
                return true;
            }
            return false;
        }
        return false; 
    } catch (error) {
        console.log(`Error in Getting Authentication: ${error}`)
    }
}