const useLocalStorage = () => {
  const loginMethod = 'login-method';

  const setLoginMethodGoogle = () => localStorage.setItem(loginMethod, 'google');
  
  const setLoginMethodFacebook = () => localStorage.setItem(loginMethod, 'facebook');
  
  const setLoginMethodNormal= () => localStorage.setItem(loginMethod, 'normal');

  const getLoginMethod = () => localStorage.getItem(loginMethod);

  const removeLoginMethod = () => localStorage.removeItem(loginMethod);

  return {
    setLoginMethodFacebook,
    setLoginMethodGoogle,
    setLoginMethodNormal,
    getLoginMethod,
    removeLoginMethod

  }
}

export default useLocalStorage
