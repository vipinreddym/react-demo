import { useState } from 'react';




const SimplePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>Open Popup</button>
      {isOpen && (
        <div className="popup">
          <button onClick={togglePopup}>Close</button>
          <p>This is a simple popup!</p>
        </div>
      )}
    </div>
  );
};

export default SimplePopup;
