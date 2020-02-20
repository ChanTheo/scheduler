import React, { useState } from "react";

import "components/InterviewListItem.scss";
import classNames from "classnames";

// Our InterviewerListItem takes in the following props:

// id:number - the id of the interviewer
// name:string - the name of the interviewer
// avatar:url - a url to an image of the interviewer
// selected:boolean - to determine if an interview is selected or not
// setInterviewer:function - sets the interviewer upon selection

//do we need string around {props.something}

export default function InterviewListItem (props) {

  
  const className = classNames("interviewers__item",{
    "interviewers__item--selected": props.selected === true,

  })

  return (
    <li className={className}
    selected={props.selected}
    key={props.id}
    onClick={props.setInterviewer}
    >
    <img
    className="interviewers__item-image"
    src={props.avatar}
    alt={props.name}
    
  />
  {props.selected && props.name}
  </li>
  );
}