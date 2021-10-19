
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell} from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';




const Header = () => {
  const {user, logOut}= useAuth()
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          sticky="top"
        >
          <Container>
            <Navbar.Brand href="#home">
              <FontAwesomeIcon icon={faDumbbell} />
              <span> Hercules Fitness</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <NavLink className="mx-2 text-decoration-none" to="/home">
                Home
              </NavLink>
              <NavLink className="mx-2 text-decoration-none" to="/packages">
                Packages
              </NavLink>
              <NavLink className="mx-2 text-decoration-none" to="/trainners">
                Trainners
              </NavLink>
              <NavLink className="mx-2 text-decoration-none" to="/services">
                Services
              </NavLink>
              {user?.email ? 
                <Button
                variant="light">Log-Out</Button>
               : 
                <NavLink className="mx-2 text-decoration-none" to="/login">
                  Log-In
                </NavLink>
              }
              <NavLink className="mx-2 text-decoration-none" to="/register">
                Register
              </NavLink>
              <Navbar.Text>
                Logged in as: <a href="#login">{user?.displayName}</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;


