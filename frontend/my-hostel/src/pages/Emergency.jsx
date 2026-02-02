import API from "../services/api";
import { Button } from "react-bootstrap";

const Emergency = () => {
  const triggerEmergency = async () => {
    await API.post("/emergency");
    alert("Emergency alert sent 🚨");
  };

  return (
    <>
      <h3 className="dashboard-title text-danger">Emergency</h3>
      <Button variant="danger" onClick={triggerEmergency}>
        Trigger Emergency
      </Button>
    </>
  );
};

export default Emergency;
