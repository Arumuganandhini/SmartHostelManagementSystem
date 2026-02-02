import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Notices",
      icon: "bi-megaphone",
      color: "primary",
      path: "/notices",
    },
    {
      title: "Complaints",
      icon: "bi-exclamation-circle",
      color: "warning",
      path: "/complaints",
    },
    {
      title: "Messages",
      icon: "bi-chat-dots",
      color: "info",
      path: "/messages",
    },
    {
      title: "Late Entry",
      icon: "bi-clock-history",
      color: "secondary",
      path: "/late",
    },
    {
      title: "Emergency",
      icon: "bi-exclamation-triangle-fill",
      color: "danger",
      path: "/emergency",
      live: true,
    },
  ];

  return (
    <Container className="mt-4">
      <h2 className="fw-bold dashboard-title mb-4">
        Student Dashboard
      </h2>

      <Row>
        {features.map((item, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card
              className={`dashboard-card border-${item.color} h-100`}
              onClick={() => navigate(item.path)}
              style={{ cursor: "pointer" }}
            >
              <Card.Body className="text-center">
                <i
                  className={`bi ${item.icon} icon-lg text-${item.color}`}
                ></i>

                <h5 className="fw-bold mt-3">
                  {item.title}
                  {item.live && (
                    <Badge
                      bg="danger"
                      className="ms-2 badge-live"
                    >
                      LIVE
                    </Badge>
                  )}
                </h5>

                <p className="text-muted mt-2">
                  Access {item.title} module
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StudentDashboard;
