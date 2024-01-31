import React from "react";

function ProjectCard({ images, title, description }) {
  return (
    <div className="text-black my-2">
      <div className="w-[19rem] mx-2 bg-white rounded-2xl">
        <img className="bg-cover h-[13rem] object-cover w-full rounded-t-2xl" src={images} alt="" />
        <div className="py-4 px-3">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-2xl">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
