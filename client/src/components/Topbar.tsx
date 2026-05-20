import { useUser } from "../context/useUser.ts";
import AuthButton from "./AuthButton.tsx";

import "./Topbar.css";
import "../App.css";

function Topbar() {
  const { user } = useUser();
  return (
    <div className="topbar">
      <div className="header">
        <h1>{user?.nickname}의 생일 달력</h1>
        <div>
          <AuthButton />
        </div>
      </div>
      <div className="pfp"></div>
    </div>
  );
}

export default Topbar;
