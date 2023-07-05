import React from "react";
const popupComponent = () => {
  return (
    <div id="popup">
      <div class="popup-container">
        <div class="popup">
          <div class="close-popup" id="closeBtn">
            <a onClick="Close" href="#">X</a>
          </div>
          <h2>Custom Popup</h2>
          <p>
            This is a custom popup. You can just put any content behind it. Also
            you can apply any custom style in this popup.
          </p>
          <a href="#" class="popup-btn">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default popupComponent;