import React from "react";

export const ImageCard = ({ image }) => {
  return (
    <div className="max-w-sm shadow-lg rounded overflow-hidden p-3">
      <img src={image.download_url} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.author}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.width}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.height}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.id}
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
};
