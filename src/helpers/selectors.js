
export function getAppointmentsForDay(state, day) {
  let result = [];
  if (state.days === undefined) {
    return [];
  } else {
    const correctDay = state.days.filter(object => object.name === day)
    if (correctDay.length === 0) {
      return [];
    } else {
      for (const index of correctDay[0].appointments) {

        for (const key in state.appointments) {

          if (Number(key) === index) {
            result.push(state.appointments[key])
          }
        }
      }
    }
  }

  return result;
}


export function getInterview(state, interview) {
  return interview ? { ...interview, interviewer: state.interviewers[interview.interviewer] } : null;
}
//
export function getInterviewsForDay(state, day) {
  let result = [];
  if (state.days === undefined) {
    return [];
  } else {
    const correctDay = state.days.filter(object => object.name === day)
    if (correctDay.length === 0) {
      return [];
    } else {
      for (const index of correctDay[0].interviewers) {
        for (const key in state.interviewers) {

          if (Number(key) === index) {
            result.push(state.interviewers[key])
          }
        }
      }
    }
  }
  return result;
}