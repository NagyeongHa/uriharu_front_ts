import { Navigate } from "react-router-dom";
import { Children } from "../types/Children";

const AuthRoute = ({ children }: Children) => {
  const token = sessionStorage.getItem("ACCESS_TOKEN");

  //토큰이 있으면 children 페이지로 (write, modify,  )
  if (!token) {
    return <Navigate replace to='/login' />;
  }
  return children;
};

export default AuthRoute;
