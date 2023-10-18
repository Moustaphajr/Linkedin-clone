import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import Navbar from "../Partials/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [element, setElement] = useState([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const nom = user?.map((item) => {
    return item.name;
  });

  console.log(nom);

  const formData = new FormData();

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);

      if (data.message === "Email ou mot de passe incorrect") {
        setErrorMessage(data.message);
      }
      if (data.message === "The email field is required. (and 1 more error)") {
        setErrorMessage(data.message + " " + "Please fill all the fields");
      }

      if (data.message === "you are logged in") {
        setElement(element.push(data.user));
        localStorage.setItem("user", JSON.stringify(element));
        navigate(`/welcome/${nom}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="hidden md:block lg:block mt-20 border rounded border-gray-300 w-[40%] h-[450px] shadow-md mx-auto">
        <h3 className="text-4xl font-semibold flex space-x-2 justify-center items-center">
          <img
            className="w-20 h-20 rounded-full"
            src="../images/signupimage.png"
            alt=""
          />
          <span>Connexion</span>
        </h3>

        <div className="flex justify-center">
          {errorMessage && (
            <Alert className="mt-4 " severity="error">
              {errorMessage}
            </Alert>
          )}
        </div>

        <div className="flex justify-center  mt-10">
          <form action="" onSubmit={handleLogin} encType="multipart/form-data">
            <div className="flex flex-col">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                className="border rounded w-96 p-2 border-gray-300 mt-2"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label>Mot de passe</label>
              <input
                type="password"
                placeholder="Mot de passe"
                className="border rounded w-96 p-2 border-gray-300 mt-2"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
              />
            </div>
            <div className="">
              <button className="border rounded-md p-2 mt-4 border-gray-300 bg-blue-600 text-white">
                Connexion
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
