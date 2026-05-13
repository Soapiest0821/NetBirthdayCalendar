import "./Calendar.css";
import "../App.css";

function Calendar() {
  return (
    <div>
      <div className="title">
        <h1>{new Date().getMonth() + 1 + "월"}</h1>
      </div>

      <div className="content" id="calendar">
        {Array.from({ length: 42 }).map((_, i) => (
          <div key={i} className="cell"></div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
