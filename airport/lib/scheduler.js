module.exports = class Scheduler {
    constructor(initialFlights = []) {
        this.flights = initialFlights
    }

    closestFlightDateTime(dateTime) {
        let arr = (this.flights.map(x => Date.parse(x.dateTime))).map(y => Math.abs(y - Date.parse(dateTime))) //array with the difference in time from current flight aka newFlight
        let closestFlight = arr.reduce( //gets the closest flight
            (accumulator, currentValue) => {
                return accumulator < currentValue ? accumulator : currentValue
            }
        )
        return this.flights.filter(flight => flight.id === arr.indexOf(closestFlight))[0].dateTime //gets the actual dateTime of the closest flight
    }

    findAvailableDateTime(dateTime) { // Choose an available time to schedule at, and return that time
        return (new Date(Date.parse(this.closestFlightDateTime(dateTime)) + 1200000)).toString() //get a possible dateTime to schedule, in this case the closest possible
    }

    couldScheduleAt(dateTime) { // returns true if there’s room to schedule at ‘time’
        return Boolean(Math.abs(Date.parse(this.closestFlightDateTime(dateTime)) - Date.parse(dateTime)) > 1200000)
    }

    scheduleAt(dateTime) { //this ckecks if there is a flight scheduled for dateTime
        return Boolean(this.flights.filter(flight => flight.dateTime === dateTime)[0]) // returns true if we successfully scheduled
    }

    schedule(dateTime) {
        let newFlightId
        if (this.couldScheduleAt(dateTime)) { //if couldScheduleAt returns true, schedule that flight and return true. Otherwise, get return the next possible flight dateTime
            newFlightId = this.flights.length
            this.flights.push({
                id: newFlightId,
                dateTime: dateTime
            })
            return this.scheduleAt(dateTime)
        } else {
            return this.findAvailableDateTime(dateTime)
        }
    }

    unscheduleAt(dateTime) { //deletes flight (even if it doesn't exist) and returns true if there in nothing scheduled for this dateTime
        this.flights = this.flights.filter(flight => flight.dateTime !== dateTime)
        return Boolean(this.flights.filter(flight => flight.dateTime === dateTime).length === 0)
    }
}

// 600000 miliseconds === 10 min