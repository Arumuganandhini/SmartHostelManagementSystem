import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import API from "../services/api";

const AdminComplaints = () => {
  const [complaints, setComplaints] = useState([]);

  const loadComplaints = async () => {
    const res = await API.get("/complaints");
    setComplaints(res.data);
  };

  useEffect(() => {
    loadComplaints();
  }, []);

  const resolveComplaint = async (id) => {
    await API.put(`/complaints/${id}/status`, {
      status: "resolved",
    });
    loadComplaints();
  };

  return (
    <Container className="mt-4">
      <h2 className="dashboard-title mb-4">🧑‍💼 Complaint Management</h2>

      {complaints.length === 0 && (
        <p className="text-muted">No complaints received.</p>
      )}

      <Row>
        {complaints.map((c) => (
          <Col md={6} key={c._id} className="mb-4">
            <Card className="dashboard-card h-100">
              <Card.Body>
                <h6 className="fw-bold">{c.category}</h6>
                <p>{c.description}</p>

                <p className="text-muted mb-1">
                  <strong>Student:</strong> {c.student?.name}
                </p>
                <p className="text-muted mb-2">
                  <strong>Room:</strong> {c.student?.roomNo}
                </p>

                <Badge
                  bg={c.status === "pending" ? "warning" : "success"}
                  className="mb-3"
                >
                  {c.status}
                </Badge>

                {c.status === "pending" && (
                  <div>
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => resolveComplaint(c._id)}
                    >
                      Mark as Resolved
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AdminComplaints;
