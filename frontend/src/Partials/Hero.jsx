import React from "react";

const Hero = () => {
  return (
    <div className="hidden md:block lg:block">
      <div className="  flex items-center    gap-10 mt-20">
        <div className="ml-16 w-1/2">
          <h3 className="text-4xl font-semibold">Trouvez votre prochain job</h3>
          <p className="mt-4 text-xl">
            En quelques clics Nous vous proposons des offres d'emploi selon
            votre profil
          </p>
        </div>
        <div className="">
          <img src="../images/hero.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
