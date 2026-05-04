import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="title">
        <h1>{new Date().getMonth() + 1 + "월"}</h1>
      </div>

      <div className="content" id="calendar">
        {Array.from({ length: 42 }).map((_, i) => (
          <div key={i} className="cell"></div>
        ))}
      </div>

      <div className="datelist" id="upcoming"></div>
      <div className="datelist" id="gone"></div>
    </div>
  );
}

export default App;
