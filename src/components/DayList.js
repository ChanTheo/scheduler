import React from "react";

import DayListItem from "components/DayListItem";


export default function DayList(props){

const daysToDisplay = props.days.map(day => {
 if (day.name !== props.selected) {

    return <DayListItem
   name={day.name} 
   spots={day.spots} 
   selected={day.name === props.day}
   setDay={props.setDay} 
   key={day.id} />
  }
})

return daysToDisplay;



}
