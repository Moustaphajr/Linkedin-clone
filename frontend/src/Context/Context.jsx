import React from "react";
import { createContext, useState } from "react";
import { useParams } from "react-router-dom";

export const Context = createContext({
  post: [],
  setPost: () => {},
  getPost: () => {},
  setDonnees: () => {},
  donnees: [],
  avatar: [],
  nom: [],
  getUserInformation: () => {},
});

export const ContextProvider = ({ children }) => {
  const [post, setPost] = useState([]);
  const getPost = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/get-posts`, {
      method: "GET",
    });
    const data = await response.json();
    setPost(data.posts);
    console.log(data.posts);
  };

  const [donnees, setDonnees] = useState([]);

  const params = useParams();

  const user = JSON.parse(localStorage.getItem("user"));

  const avatar = user?.map((item) => {
    return item.avatar;
  });

  const nom = user?.map((item) => {
    return item.name;
  });

  const getUserInformation = async () => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/information/${params.nom}`,
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
      }}
    >
      {children}
    </Context.Provider>
  );
};
