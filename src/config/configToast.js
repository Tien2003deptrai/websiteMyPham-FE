import { toast } from 'react-toastify';

export const sendToast = (string) => {
    toast.success(string, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    });
}

