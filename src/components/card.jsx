import { useState } from "react";

export default function Card({ id, image, info, price, name, removeTour }) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}....`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div>
      <img src={image} alt="" />
      <div>
        <h4>{price}</h4>
        <h4>{name}</h4>
      </div>
      <div>
        {description}
        <span onClick={readmoreHandler}>
          {readmore ? "show less" : "read more"}
        </span>
      </div>
      <button onClick={() => removeTour(id)}>Not Interested</button>
    </div>
  );
}
