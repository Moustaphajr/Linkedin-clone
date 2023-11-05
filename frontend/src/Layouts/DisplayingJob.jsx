import React, { useContext, useEffect, useState } from "react";
import WelcomeNavbar from "./WelcomeNavbar";
import Sidebar from "./Sidebar";
import Sidebar1 from "./Sidebar1";
import ListJobs from "./ListJobs";
import { Context } from "../Context/Context";

function DisplayingJob() {
  const { getJobList, jobs } = useContext(Context);

  useEffect(() => {
    getJobList();
  }, []);

  return (
    <div className=" hidden md:block lg:block overflow-x-hidden ">
      <div className="">
        <WelcomeNavbar />
        <div style={{ backgroundColor: "#F4F2EE" }}>
          <div className="grid grid-cols-4 gap-6  ">
            <Sidebar />
            <ListJobs />
            <Sidebar1 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayingJob;
