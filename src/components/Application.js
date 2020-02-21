import React, { useState, useEffect } from "react";

import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment/index";
import axios from "axios";
import { getAppointmentsForDay, getInterview, getInterviewsForDay } from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData"


export default function Application(props) {

  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  const interviewers = getInterviewsForDay(state, state.day)
  const appointments = getAppointmentsForDay(state, state.day);
  const schedule = appointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });



  // useEffect(() => {
  //   Promise.all([
  //     axios.get("http://localhost:8001/api/days"),
  //     axios.get("http://localhost:8001/api/appointments"),
  //     axios.get("http://localhost:8001/api/interviewers")
  //   ])
  //     .then(res => {
  //       console.log(res)
  //       setState(prev => ({ days: res[0].data, appointments: res[1].data, interviewers: res[2].data }))
  //     })
  // }, [])

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            day={state.day}
            setDay={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {schedule}

        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}


// interview={appointment.interview ? appointment.interview : undefined}
//           student={appointment.interview ? appointment.interview.student : undefined }
//           interviewer={appointment.interview ? appointment.interview.interviewer : undefined }
// time={appointment.time}


//DEAD APPOINTMENTS CODE 
{/* {appointments.map(appointment => { */ }

//   return (
//     appointment.interview ?
{/* //       <Appointment */ }
{/* //         key={appointment.id}
        //         {...appointment} */}
//       />
//       :
{/* //       <Appointment key={appointment.id} time={props.time} /> */ }
        //   )
        // })
        // }