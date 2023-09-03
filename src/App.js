import React from "react";
import "./assets/main.css";
function App() {
  return (
    <div className="max-w-sm shadow-lg rounded overflow-hidden p-3">
      <img src="https://source.unsplash.com/random" className="w-full" />
      <div className="px-6 py-4">
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
      <div className="px-6 py-4 ">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
      </div>
    </div>
  );
}

export default App;
