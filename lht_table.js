"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Elijah Collins
   Date:   02/03/20
*/

var thisDay = new Date("August 30, 2018");
var tableHTML = "<table id='eventTable'>"
tableHTML += "<caption>Upcoming Events</caption>"
tableHTML += "<tr><th>Date</th><th>Event</th><th>Price</th></tr>";
var endDate = new Date(thisDay.getTime()+14*24*60*60*1000);

for(var i = 0; i < eventDates.length; i++){
   var eventDate = new Date(eventDates[i]);
   var eventDay = eventDate.toDateString();
   var eventTime = eventDate.toLocaleTimeString();

   if(thisDay <= eventDate && eventDate <= endDate){
     tableHTML += "<tr>"
     tableHTML +="<td>"/* tr and td1 */ + eventDay + " @ " + eventTime + "</td>"
     tableHTML += "<td>"/* ending td1 and td2 */ + eventDescriptions[i] + "</td>"
     tableHTML +="<td>"/* ending td2 and td3 */ + eventPrices[i] + "</td>"
     tableHTML +="</tr>";/* ending td3 and tr */
   }
}
tableHTML += "</table>";
document.getElementById('eventList').innerHTML = tableHTML;