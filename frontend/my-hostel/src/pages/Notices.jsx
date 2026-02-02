import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import API from "../services/api";

const Notices = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    API.get("/notices").then(res => setNotices(res.data));
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="dashboard-title mb-4">📢 Hostel Notices</h2>

      <Row>
        {notices.length === 0 && (
          <p className="text-muted">No notices available</p>
        )}

        {notices.map(n => (
          <Col md={6} key={n._id} className="mb-4">
            <Card className="dashboard-card h-100">
              <Card.Body>
                <h5 className="fw-bold">{n.title}</h5>
                <p className="text-muted">{n.description}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Notices;
