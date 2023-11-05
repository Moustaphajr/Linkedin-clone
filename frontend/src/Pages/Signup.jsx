import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import Navbar from "../Partials/Navbar";

const Signup = () => {
  const navigate = useNavigate();

  const imagevariant = {
    initial: {
      scale: 0.8,
    },
    animate: {
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resume, setResume] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const formData = new FormData();

  const handleSubmit = async (e) => {
    e.preventDefault();

    formData.append("name", name);
    formData.append("profession", profession);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("resume", resume);
    formData.append("avatar", avatar);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/signup", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.message === "user created") {
        navigate("/");
      }
      if (data.message === "The name field is required. (and 4 more errors)") {
        setErrorMessage(data.message + " " + "Please fill all the fields");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="hidden md:block lg:block mt-20 w-[70%] mx-auto">
        <div>
          <div className="grid grid-cols-4">
            <div className="col-span-2 border rounded-lg p-5 shadow-lg h-auto">
              <h4 className="text-2xl font-semibold text-center">
                Inscrivez-vous
              </h4>
              {errorMessage && (
                <Alert className="mt-4" severity="error">
                  {errorMessage}
                </Alert>
              )}
              <form
                className="mt-10  space-y-4"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col">
                  <label htmlFor="">Nom d'utilisateur</label>
                  <input
                    type="text"
                    className="border rounded p-2 border-gray-300 mt-2"
                    placeholder="Nom d'utilisateur"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    name="name"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Profession</label>
                  <input
                    type="text"
                    className="border rounded p-2 border-gray-300 mt-2"
                    placeholder="Profession"
                    onChange={(e) => setProfession(e.target.value)}
                    value={profession}
                    name="profession"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    className="border rounded p-2 border-gray-300 mt-2"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name="email"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Mot de passe</label>
                  <input
                    type="password"
                    className="border rounded p-2 border-gray-300 mt-2"
                    placeholder="Mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    name="password"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Résumé</label>
                  <textarea
                    placeholder="Votre Résumé"
                    className="border rounded p-2 border-gray-300  mt-2"
                    onChange={(e) => setResume(e.target.value)}
                    value={resume}
                    name="resume"
                  ></textarea>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Avatar</label>
                  <input
                    type="file"
                    className="border rounded p-2 border-gray-300 mt-2"
                    onChange={(e) => setAvatar(e.target.files[0])}
                    defaultValue={avatar}
                    name="avatar"
                  />
                </div>

                <div className="flex justify-end">
                  <button className="border rounded p-2 border-gray-300 bg-blue-500 text-white">
                    S'inscrire
                  </button>
                </div>
              </form>
            </div>

            <motion.div
              className="col-span-2 border rounded-lg p-5 shadow-lg bg-gray-700"
              variant={imagevariant}
              initial="initial"
              whileHover="animate"
            >
              <div className=" mt-20 flex justify-center ml-6">
                <div>
                  <h3 className="text-white mb-10 text-center">
                    vous êtes à la recherche d'un job ? vous etes au bon endroit
                  </h3>
                  <img
                    className="w-96 h-96 rounded-full"
                    src="../images/signupimage.png"
                    alt=""
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
