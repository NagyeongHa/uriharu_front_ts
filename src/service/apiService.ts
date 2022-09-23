import { API_BASE_URL } from "../config";
import type { UserDTO } from "../types/UserInfo";

const ACCESS_TOKEN = "ACCESS_TOKEN";

export const call = <T>(api: string, method: string, request: T) => {
  const url = API_BASE_URL + api;

  const headers = new Headers({
    "Content-Type": "application/json",
  });

  const options: RequestInit = {
    headers: headers,
    method: method,
  };

  if (request) {
    options.body = JSON.stringify(request);
  }

  //세션 스토리지에서 ACCESS TOKEN 가져오기
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN);
  if (accessToken && accessToken !== null) {
    headers.append("Authorization", "Bearer " + accessToken);
  }

  //fetch 함수
  return fetch(url, options)
    .then(response =>
      response.json().then(json => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      })
    )
    .catch(error => {
      // console.log(error.status);
      if (error.status === 403) {
        window.location.href = "/login";
      }
      return Promise.reject(error);
    });
};
//회원가입
export const signup = (userDTO: UserDTO) => {
  return call("/auth/signup", "POST", userDTO);
};

//아이디 중복확인
export const checkedId = (userDTO: Partial<UserDTO>) => {
  return call("/auth/checkid", "POST", userDTO);
};

//로그인
export const signin = (userDTO: Partial<UserDTO>) => {
  return call("/auth/signin", "POST", userDTO);
};

//로그아웃
export const signout = () => {
  sessionStorage.removeItem(ACCESS_TOKEN);
  sessionStorage.removeItem("recoil-persist");
  window.location.href = "/login";
};

//yyyymmdd별 다이어리 조회
export const dateDiary = (yyyymmdd: string) => {
  return call(`/diary/dateread/${yyyymmdd}`, "GET", null).then(
    response => response.data
  );
};

//dno별 다이어리 조회
export const dnoDiary = (dno: number) => {
  return `/diary/read/${dno}`;
};

//댓글 조회
export const getComment = (dno: number) => {
  return call(`/reply/all/${dno}`, "GET", null);
};
