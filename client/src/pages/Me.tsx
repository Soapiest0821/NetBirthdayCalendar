import "../App.css";
import "./Me.css";
//import { getUser } from "../api/user";

try {
  //const profile = await getUser();
} catch (e) {
  alert("구글에 로그인해주세요");
  console.log("에러:\n" + String(e));
}

const Margin = () => <div className="margin" />;

export default function Me() {
  return (
    <div className="wrapper">
      <Margin />
    </div>
  );
}
