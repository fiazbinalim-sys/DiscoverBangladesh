import { toast } from "sonner";

type ToastOptions = {
  id?: string | number;
};

const AUTH_SUCCESS_STYLE = {
  background: "#166534",
  color: "#ffffff",
  border: "1px solid #14532d",
};

const AUTH_ERROR_STYLE = {
  background: "#b91c1c",
  color: "#ffffff",
  border: "1px solid #7f1d1d",
};

export const authToastSuccess = (message: string, options?: ToastOptions) => {
  return toast.success(message, {
    ...options,
    style: AUTH_SUCCESS_STYLE,
  });
};

export const authToastError = (message: string, options?: ToastOptions) => {
  return toast.error(message, {
    ...options,
    style: AUTH_ERROR_STYLE,
  });
};

