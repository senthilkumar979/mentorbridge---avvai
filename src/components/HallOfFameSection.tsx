import { hallOfFameStudents } from "../app/data/hallOfFameStudents";
import { CircularGallery } from "./CircularGallery";
import React from "react";

const HallOfFameSection = () => {
  return (
    // This outer container provides the scrollable height
    <div className="w-full text-foreground mt-20" style={{ height: "100vh" }}>
      {/* This inner container sticks to the top while scrolling */}
      <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center mb-8 absolute top-16 z-10">
          <h1 className="text-4xl font-bold text-[#d53f8c]">Hall of Fame</h1>
          <p className="text-foreground">Scroll to rotate the gallery</p>
        </div>
        <div className="w-full h-full">
          <CircularGallery items={hallOfFameStudents} autoRotateSpeed={0.1} />
        </div>
      </div>
    </div>
  );
};

export default HallOfFameSection;
