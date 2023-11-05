import React from "react";
import { createContext, useState } from "react";

export const Context = createContext({
  post: [],
  loading: true,
  jobs: [],
  setPost: () => {},
  getPost: () => {},
  setDonnees: () => {},
  getJobList: () => {},
  donnees: [],
  avatar: [],
  nom: [],
  getUserInformation: () => {},
});

export const ContextProvider = ({ children }) => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const getJobList = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/get-jobs", {
      method: "GET",
    });

    const data = await response.json();
    if (data.Emplois) {
      setJobs(data.Emplois);
    }
  };

  const getPost = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/get-posts`, {
        method: "GET",
      });
      const data = await response.json();
      if (data.posts) {
        setLoading(false);
        setPost(data.posts);
      }

      console.log(data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  const [donnees, setDonnees] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const avatar = user?.map((item) => {
    return item.avatar;
  });

  const nom = user?.map((item) => {
    return item.name;
  });

  const getUserInformation = async () => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/information/${nom}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setDonnees(data);
  };

  return (
    <Context.Provider
      value={{
        post: post,
        getPost,
        donnees: donnees,
        avatar: avatar,
        nom: nom,
        getUserInformation,
        loading: loading,
        getJobList,
        jobs: jobs,
      }}
    >
      {children}
    </Context.Provider>
  );
};
