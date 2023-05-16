import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Details = () => {

  const [loginData, setLoginData] = useState([]);


  const [show, setShow] = useState(false);
  const todayDate = new Date().toISOString().slice(0, 10);
 const history =useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Birthday = () => {
    const getuser = localStorage.getItem('user_login');
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      setLoginData(user);

      const userbirth = user.find((el) => el.date === todayDate);

      if (userbirth) {
        setTimeout(() => {
          console.log('ok');
          handleShow();
        }, 3000);
      }
    }
  };

  const userlogout = () =>{
   localStorage.removeItem("user_login")
   history ("/")
  }

  useEffect(() => {
    Birthday();
  }, []);

  return (
    <>
      {loginData.length === 0 ? (
        <div>Error</div>
      ) : (
        <>
          <h1>Details page</h1>
          <h1>{loginData[0].name}</h1>
          <Button onClick={userlogout} >LogOut</Button>

          {loginData[0].date === todayDate ? (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{loginData[0].name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>Wish you many many happy returns of the day</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          ) : null}
        </>
      )}
    </>
  );
};

export default Details;
