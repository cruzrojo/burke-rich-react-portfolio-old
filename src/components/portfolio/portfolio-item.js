import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
  // Data that we'll need:
  // - background image: thumb_image_url
  // - logo
  // - description: description
  // - id: id

  const { id, description, thumb_image_url, logo_url, name } = props.item;
  return (
    <div className="portfolio-item-wrapper">
      <div
        className="portfolio-img-background"
        style={{
          // backgroundImage: "url(" + thumb_image_url + ")"
          backgroundImage: `url(${thumb_image_url})`
        }}
      />

      <div>
        <h1>{name}</h1>
        </div>
      <img src={logo_url} alt="logo"/>
      <div>
        <h2>{description}</h2>
        </div>
      <Link to={`/portfolio/${id}`}>Link</Link>
    </div>
  );
}
// import React from "react";
// import { Link } from "react-router-dom";

// export default function(props) {
//   const { id, description, thumb_image_url, logo } = props.item;
//   return (
//     <div className="portfolio-item-wrapper">
//       <div
//         className="portfolio-img-background"
//         style={{
//           backgroundImage: "url(" + thumb_image_url + ")"
//         }}
//       />

//       <img src={logo} />
//       <div>{description}</div>
//       <Link to={`/portfolio/${id}`}>Link</Link>
//     </div>
//   );
// }