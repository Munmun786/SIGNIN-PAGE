import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Signimg from "./Signimg";
import { useNavigate } from "react-router-dom";




const Login = () => {
    const history = useNavigate();
    const [input, setInput] = useState({
        
        email: "",
        
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
         
        const getuserArr = localStorage.getItem("useryoutube")
        console.log(getuserArr);
         
        const {  email,  password } = input;
       
         if (email === "") {
          alert("email field is required");
        } else if (!email.includes("@")) {
          alert("Plz enter valid email");
        } 
        else if (password === "") {
          alert("password field is required");
        } else if (password.length < 5) {
          alert("password length greater five ");
        } else {
          if(getuserArr && getuserArr.length){
            const userData = JSON.parse(getuserArr);
            const userLogin = userData.filter((el,k)=>{
                return el.email === email && el.password === password
            });
            if(userLogin.length === 0){
                alert("invalid details")
            }else{
                console.log("user login succesfully")

              localStorage.setItem('user_login',JSON.stringify(userLogin))

                history("/details")
            }
          }

        }
      };
   
  return (
    <>
   <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3 " style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6  mt-3 ">Sing In</h3>
            <Form>
             
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getData}
                  placeholder="Enter email"
                />
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
              Already Have an Account <span>Signin</span>
            </p>
          </div>
          <Signimg />
        </section>
      </div>

    </>
  )
}

export default Login
