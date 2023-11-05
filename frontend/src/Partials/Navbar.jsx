import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);

  const menuvariant = {
    initial: {
      x: "-100vw",
    },
    animate: {
      x: 0,
      transition: {
        type: "spring",
        delay: 0.5,
      },
    },
  };

  return (
    <header className="">
      <div className="hidden md:block lg:block">
        <nav className="ml-8 flex justify-between mt-4 items-center">
          <div className="flex items-center gap-4">
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
            <h3 className="text-2xl font-semibold">Linkedin</h3>
          </div>

          <div className="mr-10">
            <Stack direction="row" spacing={2}>
              <Button variant="contained">
                <Link to="/login" href="">
                  Connexion
                </Link>
              </Button>
              <Button variant="outlined">
                <Link to="/signup">Inscription</Link>
              </Button>
            </Stack>
          </div>
        </nav>
      </div>
      <div className="md:hidden lg:hidden ">
        <nav className="ml-8 flex justify-between mt-4   items-center">
          <div>
            {!isopen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                onClick={() => setIsopen(!isopen)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                sstrokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                onClick={() => setIsopen(!isopen)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
          <div className="flex items-center gap-2 mr-8">
            <img
              className="w-20 h-10 rounded"
              src="../images/Logo.jpg"
              alt=""
            />
            <h3 className="text-2xl font-semibold">Kaay Job</h3>
          </div>
        </nav>
        <motion.div
          className="mt-12 w-60 p-4 border border-gray-200 rounded-lg shadow-lg "
          variants={menuvariant}
          animate={isopen ? "animate" : "initial"}
        >
          <Stack className="flex flex-col ml-8 space-y-6">
            <Button className="w-32 " variant="contained">
              <Link to="/login" href="">
                Connexion
              </Link>
            </Button>
            <Button className="w-32" variant="outlined">
              <Link to="/signup">Inscription</Link>
            </Button>
          </Stack>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
