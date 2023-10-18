import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const Profile = () => {
  const params = useParams();
  const [donnees, setDonnees] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const nom = user?.map((item) => {
    return item.name;
  });

  useEffect(() => {
    getUserProfile();
  }, []);

  const getUserProfile = async () => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/information/${params.nom}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log(data);
    setDonnees(data);
  };

  return (
    <div>
      <nav className="flex justify-between items-center">
        <div>
          <img className="w-20 h-10" src="../images/signupimage.png" alt="" />
        </div>

        <div className="mr-16">
          <ul className="flex space-x-4">
            <li>
              <Link to="">
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
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link to="">
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
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link to={`/welcome/${nom}`}>Profile</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mt-20 ">
        {donnees &&
          Object.values(donnees).map((donnee) => (
            <div className="w-full py-4 border-2 border-gray-200 rounded-lg shadow-lg flex justify-around items-center h-auto border-2 border-gray-200 rounded-lg shadow-lg">
              <div>
                <img
                  className="w-64 h-64 left-36  rounded-full object-cover "
                  src={"http://127.0.0.1:8000/uploads/" + donnee?.avatar}
                />
              </div>
              <div className="card-body">
                <h2 className="card-title">{donnee?.name}</h2>
                <h2 className="card-title">{donnee?.email}</h2>
                <p className="card-text">{donnee?.resume}.</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
