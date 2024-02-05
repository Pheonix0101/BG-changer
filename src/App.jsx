import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState();

  return (
    <>
      <div className="mainbody" style={{ backgroundColor: color }}>
        <h3>To modify the background color, please click on the button below</h3>

        <div className="myitem">
          <button
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("violet")}
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
          <button
            onClick={() => setColor("pink")}
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("brown")}
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
          <button
            onClick={() => setColor("aqua")}
            style={{ backgroundColor: "aqua" }}
          >
            Aqua
          </button>
          <button
            onClick={() => setColor("tomato")}
            style={{ backgroundColor: "tomato" }}
          >
            Tomato
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
