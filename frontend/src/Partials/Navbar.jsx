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
            <img
              className="w-20 h-10 rounded"
              src="../images/Logo.jpg"
              alt=""
            />
            <h3 className="text-2xl font-semibold">Kaay Job</h3>
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
