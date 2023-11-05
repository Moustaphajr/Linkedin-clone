import React, { useContext, useEffect } from "react";
import { Context } from "../Context/Context";

const ListJobs = () => {
  const { getJobList, jobs } = useContext(Context);

  useEffect(() => {
    getJobList();
  }, []);
  return (
    <div className="col-span-2 mt-10">
      <h1 className="text-3xl font-bold  text-gray-500 text-center">
        Liste des offres d'emploi
      </h1>

      {jobs?.map((job) => (
        <div className="px-10 flex justify-center mt-10  overflow-hidden ">
          <div className="w-full border-2 border-gray-200 h-48 bg-white shadow-lg rounded-lg">
            <div className="flex justify-between py-2 px-6 items-center">
              <div className="flex space-x-2   ">
                <h1>Logo </h1>
                <h1>{job.entreprise} </h1>
              </div>
              <div>
                <h1>{job.salaire}</h1>
              </div>
            </div>
            <div className="mt-4 px-6">
              <p>Poste: {job.intitule_post}</p>
              <p>
                {" "}
                Contrat: {job.type_contrat} en {job.type_de_travail}
              </p>
              <p>Localisation: {job.lieu_travail}</p>
              <button className="text-white bg-blue-700 mt-2 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Voir
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListJobs;
