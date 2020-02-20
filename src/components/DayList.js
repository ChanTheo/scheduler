import React from "react";

import DayListItem from "components/DayListItem";


// Our DayList component will take in three props.

// days:Array a list of day objects (each object includes an id, name, and spots)
// day:String the currently selected day
// setDay:Function accepts the name of the day eg. "Monday", "Tuesday

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

// if(day.name === props.day){
//   return null;
// } else{
  
//     <DayListItem 
//     name={day.name} 
//     spots={day.spots} 
//     selected={day.name === props.day}
//     setDay={props.setDay} 
//     key={props.id} />
  
    
// }