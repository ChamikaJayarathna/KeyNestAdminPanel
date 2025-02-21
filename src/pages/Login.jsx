import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import apiRequest from "../lib/apiRequest";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const { updateUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const userAuthServer = async () => {
    try {
      // const res = await apiRequest.post('/auth/login', {
      //   email,
      //   password
      // })

      const res = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password
      });

      // if(res.data.token){
      //   localStorage.setItem('user', JSON.stringify(res.data)); 
      //   updateUser(res.data);
      //   toast.success("Login successful");
      // }

      updateUser(res.data);
      navigate("/dashboard");

    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if(!email.length){
      return toast.error('Enter Email');
    }

    if(!emailRegex.test(email)){
      return toast.error("Invalid Email")
    }

    if(!passwordRegex.test(password)){
      return toast.error("Password should be 6 to 20 characters long with a numeric, 1 lowercase and 1 uppercase letters")
    }

    userAuthServer();
  }

  return (
    <>
      <Toaster />
      <div className="login-page bg-body-secondary">
        <div className="login-box">
          <div className="login-logo">KEYNEXT ADMIN</div>
          <div className="card">
            <div className="card-body login-card-body">
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="input-group-text">
                    <span className="bi bi-envelope" />
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="input-group-text">
                    <span className="bi bi-lock-fill" />
                  </div>
                </div>

                <div class="col-4">
                  <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-primary">
                      Join
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
