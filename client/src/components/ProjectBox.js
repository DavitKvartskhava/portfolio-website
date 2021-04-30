import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ProjectBox = ({ name, description, image }) => {
  return (
    <Carousel.Item>
      <img className="d-block w-100" src={"/images" + image} alt={name} />
      <Carousel.Caption>
        <h3>{name}</h3>
        <p>{description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

export default ProjectBox;
