import React from "react";
import PropTypes from 'prop-types';

// Components
import "components/InterviewList.scss"
import InterviewerListItem from "components/InterviewerListItem.js";
import InterviewListItem from "components/InterviewerListItem.js";


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
  setInterviewer: PropTypes.func.isRequired,
  key: PropTypes.number
}