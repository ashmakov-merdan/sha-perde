"use client"
import { useEffect, useMemo, useState } from "react";
import "@/styles/projects.scss";

const imageUrls = [
  "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
];

const Projects = () => {

  return (
    <section id="projects">
        <div className="container">
          <div className="heading">
            <p>Наши работы</p>
            <h1>Галерея</h1>
          </div>
          <div className="gallery">
            <div className="img-1">
              <img src={imageUrls[0]} alt="img-1" />
            </div>
            <div className="img-2">
              <img src={imageUrls[2]} alt="img-1" />
            </div>
            <div className="img-3">
            <img src={imageUrls[3]} alt="img-1" />
            </div>
            <div className="img-4">
            <img src={imageUrls[1]} alt="img-1" />
            </div>
            <div className="img-5">
              <img src={imageUrls[4]} alt="img-1" />
            </div>
          </div>
        </div>
    </section>
  )
};

export default Projects;