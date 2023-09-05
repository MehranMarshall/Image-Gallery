import React, { useState, useEffect } from "react";
import { ImageCard } from "./Components/ImageCard";
import "./assets/main.css";
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="container w-full mx-auto min-h-full mt-2">
      {isLoading ? (
        <h1 className="text-6xl flex justify-center items-center ">
          ... IS LOADING
        </h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => {
            return <ImageCard image={image} key={image.id} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
