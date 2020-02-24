import react, {useState, useEffect, useReducer} from "react";
import axios from "axios"
import reducer from "reducer/application"


// constants
const SET_DAY = "SET_DAY";
const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_INTERVIEW = "SET_INTERVIEW";


export default function useApplicationData() {
 
  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  console.log("UseApplicationData" , state)
  const setDay = day => dispatch({type: SET_DAY, day });
  
  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8001/api/days"),
      axios.get("http://localhost:8001/api/appointments"),
      axios.get("http://localhost:8001/api/interviewers")
    ])
      .then(res => {
        console.log(res)
        dispatch({type: SET_APPLICATION_DATA, days: res[0].data, appointments: res[1].data, interviewers: res[2].data })
      })
  }, [])
  
  function cancelInterview(id) {
    const appointmentToCancel = {
      ...state.appointments[id],
      interview: null
    }
    const appointments = {
      ...state.appointments,
      [id]: appointmentToCancel
    };
    return axios.delete(`http://localhost:8001/api/appointments/${id}`, {
      appointmentToCancel
    }).then(res => {
      dispatch({
        type: SET_INTERVIEW,
        ...state,
        appointments
      })
    })
  }
  
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    console.log("Book Interview", interview)
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.put(`http://localhost:8001/api/appointments/${id}`, {
      interview
    }).then(res => {
      dispatch({
        type: SET_INTERVIEW,
        ...state,
        appointments
      })
    });
  }

return {
  state,
  setDay,
  bookInterview,
  cancelInterview
}

}

