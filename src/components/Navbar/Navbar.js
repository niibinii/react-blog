import React from "react";
import FontAwesome from 'react-fontawesome';
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="Navbar-container">
        <div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand mr-auto">{this.props.brand}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav">
                {this.props.links.map((item, index)=>{
                  return (
                     <li className="nav-item" key={item.name + index}>
                      <a className="nav-link" href={item.local}>{item.name}</a>
                     </li>
                  )
                })}

              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default Navbar;
