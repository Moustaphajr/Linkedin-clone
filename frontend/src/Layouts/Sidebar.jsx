import React from "react";
import { useContext } from "react";
import { Context } from "../Context/Context";

const Sidebar = () => {
  const { nom, avatar } = useContext(Context);

  return (
    <div className="mt-10 ml-10 col-span-1">
      <div className="w-64 h-96 border-1 border-black rounded-xl shadow-lg bg-white">
        <div className="flex justify-center mt-6">
          <img
            className="w-36 h-36 left-36  rounded-full object-cover "
            src={"http://127.0.0.1:8000/uploads/" + avatar}
            alt=""
          />
        </div>
        <hr className="mt-4" />
        <div>
          <p className="ml-4 mt-4 text-center">Bonjour, {nom}</p>
          <hr className="mt-4" />
          <p className="ml-4 mt-4 flex space-x-4  ">
            <div>
              <span className="text-sm text-gray-500">Relation</span> <br />{" "}
              <span className="font-bold text-sm ">
                développer votre réseau
              </span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
          </p>
          <hr className="mt-4" />
          <div className="ml-4 mt-4 flex space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
            <span className="text-sm font-semibold">Mes elements</span>
          </div>
        </div>
      </div>
      <div className="mt-6 w-64 h-44 border-1 border-black rounded-xl shadow-lg bg-white   ">
        <div className="flex justify-between items-center  ">
          <p className="ml-4 mt-4 text-blue-600 text-sm flex flex-col space-y-3 ">
            <span>Groupes</span>
            <span>Evenements</span>
            <span>Hashtags</span>
          </p>

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
        </div>
        <hr className="mt-4" />

        <p className=" mt-6 text-sm font-semibold text-center">
          découvrir plus
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
