import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import authApi from "../../api/config";
import uaaApi from "../../api/uaaConfig";
import { errorMsg } from "../../helper/message";
import { LOCAL_STORAGE, setDataSession } from "../../helper/session";
import { removeCmsToken, setCmsToken, setUserSession } from "../../helper/user";
import { setCurrentBizzApp } from "../../redux/bizzAppReducer";
import { setIsLogin } from "../../redux/userReducer";

export const loginAxios = (data) => {
  return authApi({
    method: "post",
    url: "/oauth/login",
    data,
    headers: { "Content-Type": "application/json" },
  });
};

export const getUserData = () => {
  return uaaApi({
    method: "get",
    url: "/api/v1/user/current-user",
  });
};
export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const getAccountInfo = async () => {
    const userDetail = await getUserData();
    setUserSession(userDetail?.data?.data);
  };
  const loginAccount = async (dataLogin) => {
    try {
      setLoading(true);
      const requestBody = {
        username: dataLogin?.username,
        password: dataLogin?.password,
        grant_type: "password",
      };
      const loginDetail = await loginAxios(requestBody);
      const { data } = loginDetail;
      setCmsToken(data?.data);
      setDataSession(LOCAL_STORAGE, "isLogin", true);
      await getAccountInfo();
      navigate("/");
      setLoading(false);
    } catch (err) {
      errorMsg(err, "Có lỗi");
      dispatch(setCurrentBizzApp(undefined));
      localStorage.clear();
      sessionStorage.clear();
      setLoading(false);
    }
  };
  const logoutAccount = () => {
    setDataSession(LOCAL_STORAGE, "isLogin", false);
    removeCmsToken();
    dispatch(setIsLogin(false));
    navigate("/login");
  };
  return { loginAccount, logoutAccount, loading, getAccountInfo };
};
