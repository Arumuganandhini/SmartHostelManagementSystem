import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import API from "../services/api";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    API.get("/messages/my").then(res => setMessages(res.data));
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="dashboard-title mb-4">💬 Messages</h2>

      {messages.length === 0 && (
        <p className="text-muted">No messages yet</p>
      )}

      {messages.map(m => (
        <Card key={m._id} className="dashboard-card mb-3">
          <Card.Body>
            <strong>From: {m.sender?.name}</strong>
            <p className="mt-2">{m.content}</p>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Messages;
