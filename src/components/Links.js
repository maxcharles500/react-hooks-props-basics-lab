import React from "react";

 function Links(props) {
      return (
      <div>
        <h3>Links</h3>
        <a href= {props.githublink}>{props.githublink}</a>
        <a href= {props.linkedinlink}>{props.linkedinlink}</a>
      </div>
      )
    }

export default Links

   