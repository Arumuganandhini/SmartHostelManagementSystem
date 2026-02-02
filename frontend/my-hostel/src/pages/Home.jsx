import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      // Store token & role
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);

      // Role based redirect
      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/student");
      }
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ===== Carousel Section ===== */}
      <Carousel fade interval={3000}>
        {[
          "https://images.unsplash.com/photo-1588072432836-e10032774350",
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
          "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
          "https://images.unsplash.com/photo-1596495578065-6e0763fa1178",
          "https://images.unsplash.com/photo-1577896851231-70ef18881754",
          "https://images.unsplash.com/photo-1519452575417-564c1401ecc0",
          "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
          "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
        ].map((img, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={img}
              alt={`Hostel ${index + 1}`}
              height="400"
              style={{ objectFit: "cover" }}
            />
            <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
              <h4 className="fw-bold text-uppercase">
                Kongu Engineering College Hostel
              </h4>
              <p>Boys & Girls | Safe • Secure • Smart Living</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* ===== Login Card ===== */}
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={4}>
            <Card className="shadow-lg border-0 rounded-4 p-4 dashboard-card">
              <h4 className="text-center fw-bold mb-4 dashboard-title">
                Hostel Login
              </h4>

              {error && (
                <div className="alert alert-danger py-2 text-center">
                  {error}
                </div>
              )}

              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                variant="primary"
                className="w-100 fw-bold"
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </Button>

              <p className="text-muted text-center mt-3 mb-0">
                Credentials provided by hostel administration
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
