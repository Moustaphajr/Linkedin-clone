import React from "react";
import { useContext } from "react";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";

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
          <p className="ml-4 mt-4 text-center text-gray-500">Bonjour, {nom}</p>
          <hr className="mt-4" />
          <p className="ml-4 mt-4 flex space-x-4  ">
            <div>
              <span className="text-sm text-gray-500">Relation</span> <br />{" "}
              <span className="font-bold text-sm text-gray-500 ">
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
            <span className="text-sm font-semibold text-gray-500">
              Mes elements
            </span>
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

        <p className=" mt-6 text-sm font-semibold text-center text-gray-500">
          découvrir plus
        </p>
      </div>
      <div className="mt-6 ">
        <Link to={"/emploi/new"} className="flex items-center space-x-4">
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
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
            />
          </svg>
          <span className="text-sm font-semibold text-gray-500">
            Poster un offre d'emploi
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
