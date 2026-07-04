import { useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight  } from "react-icons/fa";
import emjo from "../assets/emjo.png";

import joli1 from "../assets/joli_1.png";
import joli2 from "../assets/joli_2.png";
import joli3 from "../assets/joli_3.png";

const EMJOImage = [emjo];

const JoliImage = [joli1, joli2, joli3];


type RedirectButtonProps = {
  address: string;
  privateRep?: boolean;
};
function RedirectButton({address, privateRep = false}: RedirectButtonProps){
  return (
    <button className="p-4 text-lg border rounded-full hover:bg-black my-4 hover:text-white transition" 
      onClick={() => privateRep ? alert("This Repository is Private"): window.location.href = address}>
      {privateRep ? "Private Repository" : "View Project"}
    </button>
  )
}

interface ImageCarouselProps {
  images: string[];
}

function ImageCarousel({
  images,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
 
      <div className="overflow-hidden rounded-2xl">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="flex-1 h-[50vh] object-contain rounded-2xl aspect-video"
        />
      </div>

      <button
        onClick={prevImage}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 aspect-square"
      >
        <FaAngleDoubleLeft size={32}/>
      </button>

      <button
        onClick={nextImage}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 aspect-square"
      >
        <FaAngleDoubleRight size={32}/>
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-black"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  year,
  description,
  imageSrc,
  projectLink,
  privateLink = false
}: {
  title: string;
  year: string;
  description: React.ReactNode;
  imageSrc: string[];
  projectLink: string;
  privateLink: boolean;
}) {
  return(
  <div className="w-full min-h-[100vh] h-fit flex justify-center gap-4 flex-col lg:flex-row sm:flex-col items-center">
    <div className="flex-1 space-y-4">
      <h1 className="text-4xl font-semibold">
        {title}
      </h1>
      <h3 className="text-2xl font-light">{year}</h3>
      <br></br>
      <p className="text-2xl font-extralight">
        {description}
      </p>
      <RedirectButton privateRep={privateLink} address={projectLink} />
    </div>
    <ImageCarousel images={imageSrc}/>
  </div>
  )
}


export default function Projects() {
    return(
        <>
        <h1 className="text-6xl text-center font-extralight mb-8">Projects</h1>
          <div className="space-y-32 ms-32">
            <ProjectCard
              title="Engineering Job Order System"
              year="2026"
              description={<>A ticketing system created for Philbelt Engineering Department. 
                It is a simple CRUD system with live page update using <b>Server-Sent Events</b>.</>}
              imageSrc={EMJOImage}
              projectLink="#"
              privateLink={true}
            />

            <ProjectCard
              title="Joli Travel and Tours Logistics Fleet Management System"
              year="2026"
              description="A capstone project, built using Laravel and ReactJS and comes with its own android application built using Expo. It handles vehicle reservation and dispatch, management of funds, maintenance alert based on telemetry."
              imageSrc={JoliImage}
              projectLink="#"
              privateLink={true}
            />
          </div>
        </>
    )
}