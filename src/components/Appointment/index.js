import "components/Appointment/styles.scss"

import React, { Fragment } from 'react'
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import getInterviwersByDay, { getInterviewsForDay } from "helpers/selectors";


// CONSTANTS
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE"

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY

    );
    function save(name, interviewer) {
      const interview = {
        student: name,
        interviewer
      };
    }
    // const interviewers = getInterviewsForDay(state, state.day);
  return <article className="appointment">
    <Header time={props.time} />
    {mode === EMPTY && <Empty onAdd={(() => transition(CREATE))} />}
    {mode === SHOW && (
      <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
        onEdit={props.onDelete}
        onDelete={props.onAdd}
      />
    )}
    {mode === CREATE && (
      <Form
      // name={props.name}
      // onChange={props.onChange}
      // onSubmit={props.onSubmit}
      interviewers={props.interviewers}
      // interviewer={props.interviewer}
      onCancel={() => back()}
      save={save}
      />
    )}

  </article>
};