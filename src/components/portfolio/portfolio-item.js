import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
  // Data that we'll need:
  // - background image: thumb_image_url
  // - logo
  // - description: description
  // - id: id

  const { id, description, thumb_image_url, logo, name } = props.item;
  return (
    <div>
      <div>
        <h1>{name}</h1>
        </div>
      <img src={thumb_image_url} alt="Thumbnail"/>
      <img src={logo} alt="Logo"/>
      <div>
        <h2>{description}</h2>
        </div>
      <Link to={`/portfolio/${id}`}>Link</Link>
    </div>
  );
}