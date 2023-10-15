

export const getAdmin = () => {
  const userStr = localStorage.getItem('info');
  if (userStr) return JSON.parse(userStr);
  else return null;
}
export const getToken = () => {
  return localStorage.getItem('token') || null;
}
export const getImage = () => {
  return localStorage.getItem('image') || null;
}
export const Logout = () => {
  localStorage.clear();
  return true;

}
export const setUserSession = (token) => {
  localStorage.setItem('token', token);
}

export const SetAdminInfo = (info) => {
  localStorage.setItem('info', JSON.stringify(info));
}
export const updateToken = (token) => {
  localStorage.setItem('token', token);
}