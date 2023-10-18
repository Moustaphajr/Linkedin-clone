import React, { useContext } from "react";
import Section from "../Layouts/Section";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import WelcomeNavbar from "../Layouts/WelcomeNavbar";
import Sidebar from "../Layouts/Sidebar";
import Sidebar1 from "../Layouts/Sidebar1";
import { Context } from "../Context/Context";

const Welcome = () => {
  const params = useParams();

  const { getUserInformation } = useContext(Context);

  useEffect(() => {
    getUserInformation();
  }, []);

  return (
    <div className=" hidden md:block lg:block overflow-x-hidden ">
      <div className="">
        <WelcomeNavbar />
        <div style={{ backgroundColor: "#F4F2EE" }}>
          <div className="grid grid-cols-4 gap-6  ">
            <Sidebar />
            <Section nom={params.nom} />
            <Sidebar1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
