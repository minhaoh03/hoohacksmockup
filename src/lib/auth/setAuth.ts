export const setAuth = () => {
    //api call to backend with gmail
    //response will hold the bearer token

    localStorage.setItem('auth', 'true')
    //localstorage.setItem('token', userToken)
}