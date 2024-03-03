import { atom, useRecoilState } from "recoil";

const darkModeState = atom({
  key: "darkModeState",
  default: false,
});

export default darkModeState;
