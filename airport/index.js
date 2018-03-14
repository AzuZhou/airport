const Scheduler = require('./scheduler.js')

let dateTime, newFlight, scheduledFlights, closestFlight, arr, closestFlightDateTime, newFlightId

dateTime = "October 13, 2014 11:36:00"

scheduledFlights = [{
    id: 0,
    dateTime: "October 13, 2014 11:15:00"
},
{
    id: 1,
    dateTime: "October 13, 2014 11:16:00"
}] //array of each scheduled flight with id and dateTime

arr = (scheduledFlights.map(x => Date.parse(x.dateTime))).map(y => Math.abs(y - Date.parse(dateTime))) //array with the difference in time from current flight aka newFlight

closestFlight = arr.reduce( //gets the closest flight
    (accumulator, currentValue) => {
        return accumulator < currentValue ? accumulator : currentValue
    }
)

closestFlightDateTime = scheduledFlights.filter(function (flight) { //gets the actual dateTime of the closest flight
    return flight.id === arr.indexOf(closestFlight)
})[0].dateTime

newFlight = new Scheduler(dateTime, closestFlightDateTime)

if (newFlight.CouldScheduleAt()) {
    newFlightId = scheduledFlights.length
    scheduledFlights.push({
        id: newFlightId,
        dateTime: dateTime
    })
}





