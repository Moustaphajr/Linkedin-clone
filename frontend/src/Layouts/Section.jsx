import React, { useContext } from "react";
import { useState } from "react";
import MuiAlert from "@mui/material/Alert";
import DisplayingPost from "./DisplayingPost";
import { Context } from "../Context/Context";

const Section = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const { getPost, nom } = useContext(Context);

  const { donnees } = useContext(Context);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const formData = new FormData();

  formData.append("title", title);
  formData.append("image", image);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/create-post/${nom}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setTitle("");
      setImage("");
      localStorage.setItem("post", JSON.stringify(data.post));
      if (data.message === "post created") {
        setMessage(data.message);
      }

      if (data.message === "post created successfully") {
        setMessage(data.message);
      }
      getPost();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="col-span-2  ">
      <div className="flex justify-center mt-16">
        <div className=" w-full h-auto border-1 border-black bg-white rounded-lg shadow-lg">
          <form action="" className="mt-6">
            <div className="flex justify-center ">
              <textarea
                className="w-96  mt-8 h-16 p-4 border-2 border-gray-200 rounded-full cursor-pointer "
                type="text"
                placeholder="want to Post ?"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              />
            </div>

            <div className="flex justify-between items-center ml-10 mt-4  mb-4 mr-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 ml-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>

              <button
                disabled
                className="mt-4  p-2 w-16 border-2 border-gray-200 rounded-md bg-blue-600 text-white"
              >
                Post
              </button>
            </div>
          </form>
        </div>

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box h-96">
            <form method="dialog " className="flex justify-end">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </form>
            <div className="">
              {message && <Alert severity="success">{message}</Alert>}
              <form
                action=""
                className=""
                encType="multipart/form-data"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col items-center">
                  <textarea
                    className="w-96  mt-8 h-16 p-4 border-2 border-gray-200 rounded-full "
                    type="text"
                    placeholder="want to Post ?"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    name="title"
                  />
                  <input
                    type="file"
                    className="file-input file-input-ghost w-full max-w-xs mt-4"
                    defaultValueue={image}
                    onChange={(e) => setImage(e.target.files[0])}
                    name="image"
                  />
                </div>
                <div className="flex justify-end ">
                  <button className="mt-4  p-2 w-16 border-2 border-gray-200 rounded-md bg-blue-600 text-white">
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>

      <DisplayingPost donnees={donnees} />
    </div>
  );
};

export default Section;
