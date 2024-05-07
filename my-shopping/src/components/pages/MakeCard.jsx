import React, { useState, useEffect } from "react";
import './MakeCardStyle.css'

const MakeCard = ({ make }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImgLoaded(true);
    };
    img.src = make.image_link;
  }, [make.image_link]);

  if (!imgLoaded) {
    return null;
  }

  return (
    <div className="card-container">
      <img src={make.image_link} alt={make.name} />
      <h3>{make.name}</h3>
      <p>${make.price}</p>
    </div>
  );
};

export default MakeCard;

