import { useState } from "react";

const PopupMenu = () => {
    const [menuVisible, setMenuVisible] = useState(false);
  
    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
  
    return (
      <div>
        <button onClick={toggleMenu}>Show Menu</button>
        {menuVisible && (
          <div className="menu-popup">
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default PopupMenu;