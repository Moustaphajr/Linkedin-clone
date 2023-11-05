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
        navigate(`/welcome`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="hidden md:block lg:block mt-20 border rounded border-gray-300 w-[40%] h-[450px] shadow-md mx-auto">
        <h3 className="text-4xl font-semibold flex space-x-2 justify-center items-center mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className="w-12 h-12 ml-4"
            style={{
              fill: "#235fc7",
            }}
          >
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </svg>
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
              <button className="border rounded-md p-2 mt-12 border-gray-300 bg-blue-600 text-white">
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
