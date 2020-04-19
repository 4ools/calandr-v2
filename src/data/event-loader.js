// get the events from some form of JSON
// convert the dates using moment
// expose it for the events in the calender
import jsonData from "./events.json";
import moment from "moment";

const formattedEvents = jsonData.events.map((event) => ({
  start: moment(event.start),
  end: moment(event.end),
  ...event,
}));

export default formattedEvents;
