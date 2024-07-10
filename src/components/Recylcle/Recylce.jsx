import React, { useState } from "react";
import RecyclingIcon from "@mui/icons-material/Recycling";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { pink } from "@mui/material/colors";

function Recycle({ restore, rec, deleteAllContent }) {
  // State to manage the visibility of the content
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  function restoreCont(id) {
    restore(id);
  }
  function deleteAll() {
    deleteAllContent();
  }

  return (
    <div className="recycle-box">
      <button className="recycle-btn" onClick={toggleVisibility}>
        {isVisible ? (
          <RecyclingIcon fontSize="large" color="primary" />
        ) : (
          <RecyclingIcon color="primary" sx={{ fontSize: 50 }} />
        )}
      </button>
      {isVisible && (
        <div className="recycle-content">
          <h4>Recycle Box Content</h4>
          <ul>
            {rec.map((item, index) => (
              <li
                className="list-item"
                id={index}
                key={index}
                
              >
                {item.title}{" "}
                <span className="space-span">
                  <RestoreFromTrashIcon color="success" onClick={() => {
                  restoreCont(index);
                }} />{" "}
                </span>{" "}
              </li>
            ))}
            <button className="delete-all" onClick={deleteAll}>
              <DeleteForeverIcon sx={{ color: pink[500] }} />
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Recycle;
