const myRgx = /^[\d\w]+[.-]{0,1}[\d\w]+@[\w]+[-]{0,1}[\w]+\.[\w][\w]+$/i
export const emailTest = (email) => myRgx.test(email);