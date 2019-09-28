import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div>
        <img src="img_avatar.png" alt="Avatar" style="width:100%" />
        <div class="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    );
  }
}
export default Card;
