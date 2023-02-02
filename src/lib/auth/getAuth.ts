export const getAuth = () => {
    const value = localStorage.getItem('auth')

    return value === 'true'
}