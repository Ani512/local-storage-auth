export function setAuth(auth) {
    try {
        if (typeof window !== 'undefined' && auth === true) {
            // The end goal is to encrypt the string so that the user cannot change the value in localStorage 
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
        if (typeof window !== 'undefined') {
            isAuth = localStorage.getItem('auth');
            return isAuth === 'auth_true';
        }
    } catch (error) {
        console.log(`Error in Getting Authentication: ${error}`)
    }
}