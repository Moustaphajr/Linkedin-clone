import React from "react";
import { useState, useEffect } from "react";

const Sidebar1 = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/get-user", {
      method: "GET",
    });
    const data = await response.json();
    if (data.user) {
      setUser(data.user);
    }
  };

  return (
    <div className="col-span-1 mt-10 ml-6 ">
      <div className="w-64 h-96 border-1 border-black bg-white rounded-xl shadow-lg">
        <div className="mt-4 ">
          <h3 className="text-md font-semibold text-center text-gray-500 ">
            Ajouter à votre fil d'actualité{" "}
          </h3>
          <div>
            {user &&
              Object.values(user).map((user) => (
                <div className="flex   items-center mt-4 space-x-8 ml-4 space-y-2 ">
                  <img
                    src={"http://127.0.0.1:8000/uploads/" + user.avatar}
                    className="w-12 h-12 rounded-full"
                    alt=""
                  />
                  <div className="flex flex-col space-y-2 items-center ">
                    <p className="ml-4 text-sm text-gray-500">{user.name}</p>
                    <small className="text-gray-500">{user.profession}</small>
                    <button className=" border-2 bg-blue-500 flex justify-center border-blue-500 pr-4 items-center  text-white rounded-lg ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 mr-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      Suivre
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar1;
