
export default function updateDaySpots(num, state) {
  const dayID = function () {
    const dayObj = state.days.find(day => state.day === day.name)
    return (dayObj.id - 1)
  }
  const idOfDay = dayID();
  const updatedSpots = state.days[idOfDay].spots + num


  const updatedDay = {
    ...state.days[idOfDay],

  }
  updatedDay.spots = updatedSpots
  const days = [
    ...state.days
  ]
  days[idOfDay] = updatedDay
  return days;
}