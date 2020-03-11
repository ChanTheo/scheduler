import "components/Appointment/styles.scss"

import React, { Fragment } from 'react'
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import getInterviwersByDay, { getInterviewsForDay } from "helpers/selectors";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error"


// CONSTANTS
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE"
const SAVING = "SAVING"
const CONFIRM = "CONFIRM"
const DELETING = "DELETING"
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE"
const ERROR_USER = "ERROR_USER"

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY

  );

  function save(name, interviewer) {
    if (!name || !interviewer) {
      transition(ERROR_USER)
    } else {
      const interview = {
        student: name,
        interviewer
      };
      // SHOW SAVE INDICATOR BEFORE CALLING THE FUNCTION
      transition(SAVING)
      props.bookInterview(props.id, interview).then(event => transition(SHOW)).catch(error => transition(ERROR_SAVE, true))
    }
  }

  function edit(name, interviewer) {
    if (!name || !interviewer) {
      transition(ERROR_USER)
    } else {
      const interview = {
        student: name,
        interviewer
      };
      transition(SAVING)
      props.editInterview(props.id, interview).then(event => transition(SHOW)).catch(error => transition(ERROR_SAVE, true))
    }
  }

  function garbageCan() {
    transition(DELETING)
    return props.cancelInterview(props.id).then(event => transition(EMPTY))
      .catch(err => transition(ERROR_DELETE, true))
  }

  return <article className="appointment" data-testid="appointment">
    <Header time={props.time} />
    {mode === EMPTY && <Empty onAdd={(() => transition(CREATE))} />}
    {mode === SHOW && (
      <Show

        student={props.interview.student}
        interviewer={props.interview.interviewer}
        onEdit={() => transition(EDIT)}
        onDelete={() => transition(CONFIRM)}
        name={props.interview.student}
      />
    )}
    {mode === CREATE && (
      <Form
        interviewers={props.interviewers}
       
        onCancel={() => back()}
        onSave={save}
      />
    )}
    {mode === SAVING && (
      <Status message="Saving..." />
    )}
    {mode === DELETING && (
      <Status message="Deleting..." />
    )}
    {mode === CONFIRM && (
      <Confirm message="Are you sure you want to delete?" onConfirm={garbageCan} onCancel={() => transition(SHOW)} />
    )}
    {mode === EDIT && (
      <Form
        name={props.interview.student}
        interviewers={props.interviewers}
        interviewer={props.interview.interviewer.id}
        onCancel={() => back()}
        onSave={edit}
      />
    )}
    {mode === ERROR_DELETE && (
      <Error message="Could not delete appointment" onClose={() => back()} />
    )}
    {mode === ERROR_SAVE && (
      <Error message="Could not save appointment" onClose={() => back()} />
    )}
    {mode === ERROR_USER && (
      <Error message="Could not save appointment..Please enter a name and select an instructor" onClose={() => back()} />
    )}



  </article>
};