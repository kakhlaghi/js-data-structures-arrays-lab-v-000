// Write your solution here!
const drivers = ["Milo","Otis","Garfield"]

function destructivelyAppendDriver(newDriver) {
  drivers.push(newDriver)
}

function destructivelyPrependDriver(newDriver) {
  drivers.unshift(newDriver)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  const newDrivers = [...drivers]
  newDrivers.push(name)
  return newDrivers
}

function prependDriver(name){
  const newDrivers = [...drivers]
  newDrivers.unshift(name)
  return newDrivers
}

function removeDriver(){
  const newDrivers = [...drivers]
}
