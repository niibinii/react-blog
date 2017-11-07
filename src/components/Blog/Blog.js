import React from "react";
import Adinkra from "react-adinkra";
import FontAwesome from "react-fontawesome";
import "./Blog.css";

class Blog extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="blogs">
        {this.props.data.map((item, index) => {
          return (
            <div className="blog" key={item.author + index}>
              <div className="card">
                <div className="card-img-top img" style={{
                  backgroundImage: `url('${item.image}')`
                }}></div>
                <div className="card-block">
                  <h2 className="card-title"><FontAwesome name={item.icon}/>{item.title}</h2>
                  <h6 className="mb-1">{item.author}, {item.date}</h6><br/>
                  <p className="card-text">{item.text}</p>
                  <a href="#">&lt;read more&#62;</a>
                </div>
              </div>
            </div>
          )
        })}


      </div>
    )
  }
}

export default Blog;
