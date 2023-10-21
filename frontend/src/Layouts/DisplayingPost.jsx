import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Context } from "../Context/Context";

const DisplayingPost = ({ donnees }) => {
  const avatar = Object.values(donnees).map((donnee) => donnee?.avatar);

  const [comment, setComment] = useState("");
  const [getCom, setCom] = useState("");
  const { getPost, post, nom } = useContext(Context);
  const formData = new FormData();

  const [uid, setUid] = useState("");
  const id = post.map((item) => item.id);

  useEffect(() => {
    getPost();
    getComment();
  }, []);

  const handleChange = (e) => {
    setComment(e.target.value);
    const _id = id.find((item) => item === parseInt(e.target.id));
    setUid(_id);
  };

  const deletePost = async (e, id, nom) => {
    e.preventDefault();
    const response = await fetch(
      `http://127.0.0.1:8000/api/delete-post/${nom}/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = response.json();
    console.log(data);
    getPost();
  };

  const CreateComment = async (e) => {
    formData.append("comment", comment);

    e.preventDefault();

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/create-comment/${nom}/${uid.toString()}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      console.log(data);
      setComment("");
      getComment();
    } catch (err) {
      console.log(err);
    }
  };

  const getComment = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/get-comments`, {
      method: "GET",
    });
    const data = await response.json();
    setCom(data.comments);
  };

  const deleteComment = async (e, id, nom) => {
    e.preventDefault();
    const response = await fetch(
      `http://127.0.0.1:8000/api/delete-comment/${nom}/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = response.json();
    getComment();
    console.log(data);
  };

  return (
    <div className="mt-6  ">
      {post &&
        post.map((post, index) => (
          <div className=" flex justify-center">
            <div className="w-[500px] mt-10 bg-white  h-auto border-1 border-black rounded-lg shadow-lg">
              <div className="flex justify-between items-center mr-8 ">
                <div className="py-4 ml-4 flex items-center space-x-2">
                  {avatar && (
                    <img
                      className=" w-12 h-12 left-36  rounded-full object-cover "
                      src={"http://127.0.0.1:8000/uploads/" + post.user_avatar}
                      alt=""
                    />
                  )}
                  <span>{post?.user_name}</span>
                </div>
                <div className="flex space-x-2 ">
                  <a href="" onClick={(e) => deletePost(e, post.id, nom)}>
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
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </a>
                  <a href="">
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
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="ml-4">{post?.title}</h3>
                <small className="mr-4">{post?.created_at}</small>
              </div>
              <img
                src={"http://127.0.0.1:8000/post/" + post?.image}
                className="mt-4 w-full h-96 object-cover"
                alt=""
              />
              <div className="ml-4 mt-4 flex space-x-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-4 ml-4">
                <span>Commentaires</span>
                <div className="mt-4">
                  {getCom &&
                    getCom.map((comment) =>
                      comment.title.includes(post.title) ? (
                        <div className=" ">
                          <div className="flex items-center mt-2 space-x-2">
                            <img
                              src={
                                "http://127.0.0.1:8000/uploads/" +
                                comment.user_avatar
                              }
                              alt=""
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <span>{comment.user_name}</span>
                            <small>{comment.comment}</small>
                            <a href="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                                id={comment.id}
                                onClick={(e) =>
                                  deleteComment(e, comment.id, nom)
                                }
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      ) : null
                    )}
                </div>
              </div>
              <div>
                <form action="" onSubmit={CreateComment}>
                  <input
                    type="text"
                    placeholder="Ajouter un commentaire"
                    className="mt-4 w-full border rounded border-white p-2"
                    onChange={handleChange}
                    value={comment}
                    name="comment"
                    id={post.id}
                  />
                  <div className="flex justify-end mr-4">
                    <button className="mt-4  p-2 w-24 border-2 border-white rounded-md bg-white text-blue-600">
                      Commenter
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DisplayingPost;
