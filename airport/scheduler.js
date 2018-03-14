module.exports = class Scheduler {
    constructor(dateTime, closestFlightDateTime) { //takes in date string
        this.dateTime = dateTime
        this.closestFlightDateTime = closestFlightDateTime
    }

    CouldScheduleAt() { // returns true if there’s room to schedule at ‘time’
        return (Math.abs(Date.parse(this.closestFlightDateTime) - Date.parse(this.dateTime)) > 1200000) ? true : false
    }

    ScheduleAt() { // returns true if we successfully scheduled
        return this.CouldScheduleAt() ? true : false
    }

    Schedule() { // Choose an available time to schedule at, and return that time
        if (!this.ScheduleAt()) { //if the dateTime was not available, find one that is
            return (new Date(Date.parse(this.closestFlightDateTime) + 1200000)).toString()
        }
    }

    UnscheduleAt() { // returns true if we successfully unscheduled something

    }
}

// 600000 miliseconds === 10 min