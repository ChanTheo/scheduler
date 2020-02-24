import React from "react"
import useApplicationData from "hooks/useApplicationData"


// Constants 
const SET_DAY = "SET_DAY";
const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_INTERVIEW = "SET_INTERVIEW";


export default function reducer(state, action) {
  console.log(action.appointments)
  switch (action.type) {
    case SET_DAY:
      return {
        ...state,  
        day: action.day
      }
    case SET_APPLICATION_DATA:
      return {
        ...state,
        days: action.days,
        appointments: action.appointments,
        interviewers: action.interviewers
      }
    case SET_INTERVIEW:
      // const interview = state.interview
      // const id = state.id
      // const appointment = {
      //   ...state.appointments[id],
      //   interview: { ...interview }
      // };
      // const appointments = {
      //   ...state.appointments,
      //   [id]: appointment
      // };
      return {
        ...state,
        appointments: action.appointments
      }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}