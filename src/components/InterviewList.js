import React from "react";
import PropTypes from 'prop-types';

// Components
import "components/InterviewList.scss"
import InterviewerListItem from "components/InterviewerListItem.js";
import InterviewListItem from "components/InterviewerListItem.js";

// Our InterviewerList takes in three props:

// interviewers:array - an array of objects containing the information of each interviewer
// interviewer:number - the id of an interviewer
// setInterviewer:function - a function that accepts an interviewer id

export default function InterviewList (props) {

 

      return  (
      <section className="interviewers">
        <h4 className="interviewers__header text--light">Interviewer</h4>
        <ul className="interviewers__list">
          {props.interviewers.map(interviewer => (
            <InterviewerListItem
            name={interviewer.name}
            selected={interviewer.id === props.interviewer}
            avatar={interviewer.avatar}
            key={interviewer.id}
            setInterviewer={event => props.setInterviewer(interviewer.id)}
            />

          ))}

          
          
        </ul>
      </section>
    );
}

InterviewListItem.propTypes = {
  // You can declare that a prop is a specific JS type. By default, these
  // are all optional.
  setInterviewer: PropTypes.func.isRequired,
  key: PropTypes.number
}