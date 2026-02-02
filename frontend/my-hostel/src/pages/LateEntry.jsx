import React, { useState } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import API from "../services/api";

const LateEntry = () => {
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [msg, setMsg] = useState("");

  const submitRequest = async () => {
    try {
      await API.post("/late", {
        type: "late-entry",
        reason,
        date,
        time,
      });
      setMsg("Late entry request submitted successfully ✅");
      setReason(""); setDate(""); setTime("");
    } catch {
      setMsg("Submission failed ❌");
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="dashboard-title mb-4">⏰ Late Entry Request</h2>

      <Card className="dashboard-card p-4">
        {msg && <Alert>{msg}</Alert>}

        <Form>
          <Form.Control
            type="date"
            className="mb-3"
            value={date}
            onChange={e => setDate(e.target.value)}
          />

          <Form.Control
            type="time"
            className="mb-3"
            value={time}
            onChange={e => setTime(e.target.value)}
          />

          <Form.Control
            as="textarea"
            placeholder="Reason"
            className="mb-3"
            value={reason}
            onChange={e => setReason(e.target.value)}
          />

          <Button className="fw-bold" onClick={submitRequest}>
            Submit Request
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default LateEntry;

