import React from "react";
import "./assets/main.css";
function App() {
  return (
    <div className="max-w-sm shadow-lg rounded overflow-hidden">
      <img src="https://source.unsplash.com/random" className="w-full" />
      <div className="px-6 py-4"></div>
      <div className="font-bold text-purple-500 text-xl mb-2">
        Photo by John Doe
      </div>
      <ul>
        <li>
          <strong>Views: </strong>
          4000
        </li>
        <li>
          <strong>Downloads: </strong>
          400
        </li>
        <li>
          <strong>Likes: </strong>
          140
        </li>
      </ul>
    </div>
  );
}

export default App;
