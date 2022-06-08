import { loginFailure, loginStart, loginSuccess, logOut,logoutSuccess ,logoutFailure} from "./userRedux";
import { publicRequest } from "../requestMethods";
import{logoutProduct} from "../redux/cartRedux"

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch, user) => {
  dispatch(logOut());
  try {
    const res = await publicRequest.delete("/auth/logout", user);
    dispatch(logoutSuccess(res.data));
  } catch (err) {
    dispatch(logoutFailure());
  }
};

export const mpPayment = async (dispatch, total) => {
  dispatch(logoutProduct());
  try {
    console.log(total);
    const res = await publicRequest.post("/payment", total);
    console.log(res.data);
    dispatch(logoutSuccess(res.data));
  } catch (err) {
    dispatch(logoutFailure());
  }
};