import React, { useState } from "react";
import InterviewerList from "../InterviewList"
import Button from "../Button"


export default function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null)

  function reset() {
    setName("")
    setInterviewer(null)

  }

  function cancel() {
    console.log(props)
    props.onCancel();
    reset();

  }
  console.log("in Form compoennt props.name = " + props.name)
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name={name}
            value={name}
            type="text"
            onChange={event => setName(event.target.value)}
            placeholder="Enter Student Name"
            onSubmit={event => event.preventDefault()}
            
          />
        </form>
        <InterviewerList interviewers={props.interviewers} interviewer={interviewer} setInterviewer={setInterviewer}  />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel} >Cancel</Button>
          <Button confirm onClick={() => props.onSave(name, interviewer)}>Save</Button>
        </section>
      </section>
    </main>
  )
}