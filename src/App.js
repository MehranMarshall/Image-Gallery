import React, { useState, useEffect } from "react";
import { ImageCard } from "./Components/ImageCard";
import "./assets/main.css";
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("Football");

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=2&limit=100`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="mx-auto ">
      <div className="gird grid-cols-3 gap-4">
        {images.map((image) => {
          <ImageCard key={image.id} image={image} />;
        })}
      </div>
    </div>
  );
}

export default App;
