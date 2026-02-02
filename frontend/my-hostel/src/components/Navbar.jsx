import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const TopNavbar = () => {
  const navigate = useNavigate();

  // Get role from localStorage
  const role = localStorage.getItem("role");

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        {/* Brand */}
        <Navbar.Brand
          as={Link}
          to={role === "admin" ? "/admin" : "/student"}
          className="fw-bold text-uppercase"
        >
          Smart Hostel
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            {/* Common links */}
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/notices">
              Notices
            </Nav.Link>

            <Nav.Link as={Link} to="/complaints">
              Complaints
            </Nav.Link>

            <Nav.Link as={Link} to="/messages">
              Messages
            </Nav.Link>

            <Nav.Link as={Link} to="/late">
              Late Entry
            </Nav.Link>

            {/* Student only */}
            {role === "student" && (
              <Nav.Link
                as={Link}
                to="/emergency"
                className="fw-bold text-danger"
              >
                Emergency
              </Nav.Link>
            )}

            {/* Admin only */}
            {role === "admin" && (
              <Nav.Link
                as={Link}
                to="/admin"
                className="fw-bold text-info"
              >
                Admin Panel
              </Nav.Link>
            )}

            {/* Logout */}
            <Nav.Link
              onClick={handleLogout}
              className="text-warning fw-bold"
              style={{ cursor: "pointer" }}
            >
              Logout
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
