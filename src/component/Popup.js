import React, { useState } from 'react';

function PopUp() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Show Modal</button>

      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal">
            <h2>Modal Title</h2>
            <p>Modal content goes here.</p>
            <button onClick={handleCloseModal}>Close Modal</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopUp;
