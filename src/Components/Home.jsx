import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Signimg from "./Signimg";
import { NavLink } from "react-router-dom"

const Home = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });
 const[data,setData] = useState([])
  const getData = (e) => {
    //console.log(e);

    const { value, name } = e.target;
    // console.log(value, name);

    setInput(() => {
      return {
        ...input,
        [name]: value,
      };
    });
  };
  const addData = (e) => {
    e.preventDefault();
    const { name, email, date, password } = input;
    if (name === "") {
      alert("name field is required");
    } else if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("Plz enter valid email");
    } else if (date === "") {
      alert("date field  is required");
    } else if (password === "") {
      alert("password field is required");
    } else if (password.length < 5) {
      alert("password length greater five ");
    } else {
      console.log("data added succesfully");
         
      localStorage.setItem("useryoutube",JSON.stringify([...data,input]))

    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3 " style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6  mt-3 ">Sing Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getData}
                  placeholder="Enter Your Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getData}
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="date" name="date" onChange={getData} />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getData}
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                variant="primary"
                className="col-lg-6"
                onClick={addData}
                style={{ background: "rgb(67,185,127)" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already Have an Account <span><NavLink to="/login">Signin</NavLink></span>
            </p>
          </div>
          <Signimg />
        </section>
      </div>
    </>
  );
};

export default Home;
