export const removeAuth = () => {
    localStorage.removeItem('auth')
    return true
}