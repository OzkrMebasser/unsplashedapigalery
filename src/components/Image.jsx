import React from "react";

class Image extends React.Component {
  render() {
    return (
      <>
        {/* <img src={this.props.src} alt={this.props.alt_description}/> */}
       
        
        <div class="container-glass">
          <img
            class="img"
            src={this.props.src}
            alt={this.props.alt_description}
          />
          <span >
          
          {/* <p class="text"> Description {this.props.name ? this.props.name : "No info!"} </p> */}
          <p class="text">Photographer: <br />{this.props.user ? this.props.user : "No info!"} </p>
          <p class="text"> <i class="far fa-thumbs-up"></i> {this.props.likes} </p>
          </span>
        </div>
      </>
    );
  }
}

export default Image;
