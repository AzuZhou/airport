const assert = require('assert')
const Scheduler = require('../')

const schedule = [
  {
    id: 0,
    dateTime: 'October 13, 2014 11:55:00'
  },
  {
    id: 1,
    dateTime: 'October 13, 2014 12:56:00'
  }
]

const newFlight = new Scheduler(schedule)

describe('scheduler', () => {
  it('should return true if there’s room to schedule at ‘time’', () => {
    assert.equal(newFlight.couldScheduleAt('October 13, 2014 13:56:00'), true)
  })

  it('should return true if we successfully scheduled', () => {
    assert.equal(newFlight.scheduleAt('October 13, 2014 12:56:00'), true)
  })

  it('should return true if the passed in value was successfully scheduled', () => {
    assert.equal(newFlight.schedule('October 13, 2014 13:56:00'), true)
    assert.deepEqual(newFlight.flights, [
      {
        id: 0,
        dateTime: 'October 13, 2014 11:55:00'
      },
      {
        id: 1,
        dateTime: 'October 13, 2014 12:56:00'
      },
      {
        id: 2,
        dateTime: 'October 13, 2014 13:56:00'
      }
    ])
  })

  it("should return true if there's nothing scheduled for that 'time'", () => {
    assert.equal(newFlight.unscheduleAt('October 13, 2014 13:56:00'), true)
  })
})
