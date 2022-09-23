import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

//유저id (uid)
export const userIdState = atom<string>({
  key: "userIdState",
  default: "",
});

//유저 email (진짜 아이디)
export const userEmailState = atom<string>({
  key: "userEmailState",
  default: "",
});

//세션에 저장된 유저 토큰 (isAuth)
export const userTokenState = atom({
  key: "userTokenState",
  default: sessionStorage.getItem("ACCESS_TOKEN"),
});

export const userState = atom({
  key: "userState",
  default: { id: "", email: "" },
  effects_UNSTABLE: [persistAtom],
});
