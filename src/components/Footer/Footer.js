import React from "react";
import FontAwesome from 'react-fontawesome';
import "./Footer.css";

class Footer extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="container-fluid footer">
        <div className="row ">

          <div className="col-4">
            <h5>Contact Us</h5>
            <h6>
              <i className="fa fa-phone" aria-hidden="true"></i>+233.243.511089</h6>
            <h6>
              <i className="fa fa-envelope-o" aria-hidden="true"></i>niibi@vschool.io</h6>
            <h6>
              <i className="fa fa-address-card-o" aria-hidden="true"></i>27 Avenue Teshie</h6>
          </div>
          <div className="col-4">
            <h5>Follow Us</h5>
            {this.props.social.map((item, index) => {
              return (
                <a href={item.url} key={item.iconName + index}><FontAwesome name={item.iconName}/></a>
              )
            })}

          </div>
          <div className="col-4">
            <h5>We Love You</h5>
            <p>We the MPs and MCE of Ledzokuku Krowor are ready to help solve the issues bugging the members of our constituencies and municipality respectively. Please feel free to leave your comments here. Thanks.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
