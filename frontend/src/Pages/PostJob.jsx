import React, { useState } from "react";
import WelcomeNavbar from "../Layouts/WelcomeNavbar";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const navigate = useNavigate();
  const [emploi, setEmploi] = useState({
    intitule_post: "",
    entreprise: "",
    type_de_travail: "",
    lieu_travail: "",
    salaire: "",
    type_contrat: "",
  });

  const formData = new FormData();
  formData.append("intitule_post", emploi.intitule_post);
  formData.append("entreprise", emploi.entreprise);
  formData.append("type_de_travail", emploi.type_de_travail);
  formData.append("lieu_travail", emploi.lieu_travail);
  formData.append("salaire", emploi.salaire);
  formData.append("type_contrat", emploi.type_contrat);

  const CreateJob = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/create-job", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.message === "Emploi créer avec succès") {
      navigate("/emploi");
    }
  };

  return (
    <div
      className="hidden md:block lg:block overflow-x-hidden  "
      style={{ backgroundColor: "#F4F2EE" }}
    >
      <WelcomeNavbar />
      <div className=" hidden md:block lg:block mt-20 border rounded border-gray-300 w-[40%] h-auto shadow-md mx-auto mb-4 bg-white">
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
          <span className="font-semibold text-black">Poster un Job</span>
        </h3>

        <div className="flex justify-center"></div>

        <div className="flex justify-center  mt-10 ">
          <form onSubmit={CreateJob} action="" encType="multipart/form-data">
            <div className="flex flex-col">
              <label>intitule du post</label>
              <input
                type="text"
                placeholder="intitule du post"
                className="border rounded w-96 p-2 border-gray-300 mt-2 bg-white"
                name="intitule_post"
                value={emploi.intitule_post}
                onChange={(e) =>
                  setEmploi({ ...emploi, intitule_post: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col mt-4">
              <label>Entreprise</label>
              <input
                type="text"
                placeholder="Nom de l'entreprise"
                className="border rounded w-96 p-2 border-gray-300 mt-2 bg-white"
                name="entreprise"
                value={emploi.entreprise}
                onChange={(e) =>
                  setEmploi({ ...emploi, entreprise: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col mt-4">
              <label>Type de travail</label>
              <select
                name="type_de_travail"
                value={emploi.type_de_travail}
                onChange={(e) =>
                  setEmploi({ ...emploi, type_de_travail: e.target.value })
                }
                className="border rounded w-96 p-2 border-gray-300 mt-2 bg-white"
              >
                <option value="Temps plein">Temps pleins</option>
                <option value="Temps partiel">Temps partiel</option>
              </select>
            </div>
            <div className="flex flex-col mt-4">
              <label>Lieu de travail</label>
              <input
                type="text"
                value={emploi.lieu_travail}
                onChange={(e) =>
                  setEmploi({ ...emploi, lieu_travail: e.target.value })
                }
                placeholder="Lieu de travail"
                className="border rounded w-96 p-2 border-gray-300 mt-2 bg-white"
                name="lieu_travail"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label>Salaire</label>
              <input
                name="salaire"
                value={emploi.salaire}
                onChange={(e) =>
                  setEmploi({ ...emploi, salaire: e.target.value })
                }
                type="text"
                placeholder="Salaire"
                className="border rounded w-96 p-2 border-gray-300 mt-2 bg-white"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label>Type de contrat</label>
              <select
                onChange={(e) =>
                  setEmploi({ ...emploi, type_contrat: e.target.value })
                }
                value={emploi.type_contrat}
                name="type_contrat"
                className="border rounded w-96 p-2 border-gray-300 mt-2 bg-white"
              >
                <option value="CDD">CDD</option>
                <option value="CDI">CDI</option>
                <option value="Stage">Stage</option>
              </select>
            </div>
            <div className="">
              <button className="border rounded-md p-2 mb-2 mt-4 border-gray-300 bg-blue-600 text-white">
                Poster
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
