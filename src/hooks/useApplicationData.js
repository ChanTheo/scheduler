import react, {useState, useEffect} from "react";
import axios from "axios"

export default function useApplicationData (state, action) {
 
// switch(action.type){
//   case 
// }

return {
  state,
  setDay,
  bookInterview,
  cancelInterview
}

}

const [state, setState] = useState({
  day: "Monday",
  days: [],
  appointments: {},
  interviewers: {}
});
const setDay = day => setState(prev => ({ ...prev, day }));

useEffect(() => {
  Promise.all([
    axios.get("http://localhost:8001/api/days"),
    axios.get("http://localhost:8001/api/appointments"),
    axios.get("http://localhost:8001/api/interviewers")
  ])
    .then(res => {
      console.log(res)
      setState(prev => ({ days: res[0].data, appointments: res[1].data, interviewers: res[2].data }))
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
  console.log(appointmentToCancel)
  // remote cancel 
  return axios.delete(`http://localhost:8001/api/appointments/${id}`, {
    appointmentToCancel
  }).then(res => {
    console.log("Cancel Interview", res)
    setState({
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
  const appointments = {
    ...state.appointments,
    [id]: appointment
  };
  return axios.put(`http://localhost:8001/api/appointments/${id}`, {
    interview
  }).then(res => {
    setState({
      ...state,
      appointments
    })
  });
}