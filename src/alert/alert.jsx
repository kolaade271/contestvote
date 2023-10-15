import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const GenAlert = (stat, res) => {
  return stat ? toast.success(res, {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    theme: "colored",
  }) :
    toast.error(res, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
    });
}

export const PasswordAlert = (stat, res) => {
  return stat ? "" :
    toast.warn(res, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "light",
    });
}