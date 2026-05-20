import Calendar from "../components/Calendar";
import Topbar from "../components/Topbar.tsx";

export default function Main() {
  return (
    <div>
      <Topbar />
      <div className="wrapper">
        <Calendar />
        <div className="datelist" id="upcoming"></div>
        <div className="datelist" id="gone"></div>
      </div>
    </div>
  );
}
