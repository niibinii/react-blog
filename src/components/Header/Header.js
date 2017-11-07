import React from "react";
import {Adinkra} from "react-adinkra";
import "./Header.css";

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="header-container">
        <div className="header-background"></div>

        <div className="header">
          <h1>Ledzokuku Krowor</h1>
          <div className="subheader">
            <p>teshie</p>
            <Adinkra className="adinkra" name={'hye-won-hye'}/>
            <p>rocks</p>
          </div>
        </div>

      </div>
    )
  }
}

export default Header;
