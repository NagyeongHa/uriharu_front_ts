import { Navigate } from "react-router-dom";
import { Children } from "../types/Children";

function PublicRoute({ children }: Children) {
  const token = sessionStorage.getItem("ACCESS_TOKEN");

  //토큰 있으면 메인으로 이동
  //토큰 없으면 로그인 / 회원가입으로 이동

  if (token) {
    return <Navigate replace to='/' />;
  }
  return children;
}

export default PublicRoute;
