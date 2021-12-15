import React from "react";
import Links from "./Links"
import user from "../data/user";
// function Links(props) {
//   <div>
//     <h3>Links</h3>
//     <a href= {props.githublink}>{props.githublink}</a>
//     <a href= {props.linkedinlink}>{props.linkedinlink}</a>
//   </div>
// }

function About(props) {
  if (!props.bio) {
    return (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
         <Links  githublink= {user.links.github} linkedinlink= {user.links.linkedin}/>
        </div>
    )}
  else {return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links  githublink= {user.links.github} linkedinlink= {user.links.linkedin}/>
      </div>
  
  )}
}
/* <h3>Links</h3>
        <a href= {props.githublink}>{props.githublink}</a>
       <a href= {props.linkedinlink}>{props.linkedinlink}</a> */


export default About;
