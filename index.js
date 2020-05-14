// Write your solution in this file!
const driver = { name: "Sam", address: "home" }

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {"address": "11 Broadway"})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
        driver[key] = value;
        return driver;
      }


function deleteFromDriverByKey(driver, key) {
    let res = Object.assign({}, driver)
    delete res[key]
    return res
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}
