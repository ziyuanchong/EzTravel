import Budget from "./Budget";
import Duration from "./Duration";
import Activities from "./Activities";
import "./Activities.css";
import { useNavigate } from "react-router-dom";

function Planning() {
  const navigate = useNavigate();

  return (
    <div className="planningpage">
      <div className="Budget">
        <Budget />
      </div>
      <div className="Duration">
        <Duration />
      </div>
      <div className="Activity">
        <Activities />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "5vh",
          padding: "10px",
        }}
      >
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: "5px",
            padding: "10px",
          }}
          onClick={() => navigate("/itinerary")}
        >
          Let's Go!
        </button>
      </div>
    </div>
  );
}

export default Planning;
