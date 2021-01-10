import React from "react";
import "./Sidebar.css";
import { Button, Navbar, Nav, FormControl, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
function Sidebar({ setsearchTerm,hide }) {
    if(hide!=="true") {
  return (
    <div>
      <>
        <Navbar bg="primary" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              defaultValue=""
              onChange={(e) => {
                setsearchTerm(e.target.value);
              }}
              placeholder="Search"
              className="mr-sm-2"
            />
            <Link
              style={{ margin: "5px" ,color:"yellow" }}
              to="/shorlisted"
            >
              Shortlisted
            </Link>
            <Link
              style={{ margin: "5px",color:"Red"  }}
              to="/rejected"
            >
              Rejected
            </Link>
           
          </Form>
        </Navbar>
      </>
    </div>
  );
            }
            else { return(
                <div>
                  <>
                    <Navbar bg="primary" variant="dark">
                      <Nav className="mr-auto">
                        <Link style={{ color:"yellow" }} to="/" >Home</Link>
                      </Nav>
                      <Form inline>
                        <FormControl
                          type="text"
                          defaultValue=""
                          onChange={(e) => {
                            setsearchTerm(e.target.value);
                          }}
                          placeholder="Search"
                          className="mr-sm-2"
                        />
                       
                      </Form>
                    </Navbar>
                  </>
                </div>
              ); }
}

export default Sidebar;
