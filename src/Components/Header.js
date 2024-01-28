import React from "react";

// Heading - navbar
const Header = () => {
  return (
    <div className="nav-bar">
      <h2 className="logo">KILL HUNGER</h2>

      <>
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </>
    </div>
  );
};

export default Header;
// id your use export before variable like - export const Header (), This is call default export
// then you have to import in app.js or where you wanna import
//you can use im a curly bracket like - import {} from "./" so on so on. this is call NAMED export
