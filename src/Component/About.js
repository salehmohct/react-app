import { useState } from "react";
import "../Component/about.css";
import Button from "react-bootstrap/Button";
function About() {
  const [color, setColor] = useState();
  return (
    <>
      <div className="about ">
        <div className="text">
          <h1 className="fs-1 " style={{ color: color }}>
            Bootstrap Templates
          </h1>
          <p className="fw-bold fs-3  text-secondary ">
            Awesome Bootstrap Templates for your next commercial or non-profit
            projects! Download all templates now!
          </p>
          <Button
            variant="outline-primary me-3 btn-lg"
            onClick={() => {
              setColor("blue");
            }}
          >
            Primary
          </Button>
          <Button
            variant="outline-warning btn-lg"
            onClick={() => {
              setColor("orange");
            }}
          >
            Dark
          </Button>
        </div>
      </div>
    </>
  );
}
export default About;
