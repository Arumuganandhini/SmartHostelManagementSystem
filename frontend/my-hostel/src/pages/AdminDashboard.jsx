import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Complaints",
      count: 12,
      icon: "bi-exclamation-circle",
      color: "primary",
    },
    {
      title: "Pending Late Requests",
      count: 5,
      icon: "bi-clock-history",
      color: "warning",
    },
    {
      title: "Emergency Alerts",
      count: 2,
      icon: "bi-exclamation-triangle-fill",
      color: "danger",
      live: true,
    },
    {
      title: "Notices Posted",
      count: 8,
      icon: "bi-megaphone",
      color: "success",
    },
  ];

  return (
    <Container className="mt-4">
      <h2 className="fw-bold dashboard-title mb-4">
        Admin Dashboard
      </h2>

      <Row>
        {stats.map((item, index) => (
          <Col md={3} className="mb-4" key={index}>
            <Card
              className={`dashboard-card bg-${item.color} text-white h-100`}
            >
              <Card.Body className="text-center">
                <i className={`bi ${item.icon} icon-lg`}></i>

                <h6 className="mt-3 text-uppercase">
                  {item.title}
                </h6>

                <h2 className="fw-bold">
                  {item.count}
                  {item.live && (
                    <Badge
                      bg="light"
                      text="danger"
                      className="ms-2 badge-live"
                    >
                      LIVE
                    </Badge>
                  )}
                </h2>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AdminDashboard;
