class Scheduler {
  constructor(initialFlights = []) {
    this.flights = initialFlights
  }

  closestFlightDateTime(dateTime) {
    //array with the difference in time from current flight aka newFlight
    const arr = this.flights
      .map(x => Date.parse(x.dateTime))
      .map(y => Math.abs(y - Date.parse(dateTime)))

    const closestFlight = arr.reduce((accumulator, currentValue) => {
      return accumulator < currentValue ? accumulator : currentValue
    })

    //gets the actual dateTime of the closest flight
    return this.flights.filter(
      flight => flight.id === arr.indexOf(closestFlight)
    )[0].dateTime
  }

  // Choose an available time to schedule at, and return that time
  findAvailableDateTime(dateTime) {
    // Get a possible dateTime to schedule, in this case the closest possible
    return new Date(
      Date.parse(this.closestFlightDateTime(dateTime)) + 1200000
    ).toString()
  }

  couldScheduleAt(dateTime) {
    // returns true if there’s room to schedule at ‘time’
    return (
      Math.abs(
        Date.parse(this.closestFlightDateTime(dateTime)) - Date.parse(dateTime)
      ) > 1200000
    )
  }

  scheduleAt(dateTime) {
    //this ckecks if there is a flight scheduled for dateTime
    // returns true if we successfully scheduled
    return Boolean(
      this.flights.filter(flight => flight.dateTime === dateTime)[0]
    )
  }

  schedule(dateTime) {
    // if couldScheduleAt returns true, schedule that flight and return true.
    // Otherwise, get return the next possible flight dateTime

    if (this.couldScheduleAt(dateTime)) {
      let newFlightId = this.flights.length

      this.flights.push({
        id: newFlightId,
        dateTime: dateTime
      })

      return this.scheduleAt(dateTime)
    }

    return this.findAvailableDateTime(dateTime)
  }

  unscheduleAt(dateTime) {
    //Deletes flight (even if it doesn't exist) and returns true if there in nothing scheduled for this dateTime
    this.flights = this.flights.filter(flight => flight.dateTime !== dateTime)

    return Boolean(
      this.flights.filter(flight => flight.dateTime === dateTime).length === 0
    )
  }
}

module.exports = Scheduler
