// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driverObj, key, value){
    return Object.assign({}, driverObj, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driverObj, key){
    const newDriverObj = Object.assign({}, driverObj);
    delete newDriverObj[key];
    return newDriverObj;
}

function destructivelyDeleteFromDriverByKey(driverObj, key){
    delete driverObj[key] //why was key notation needed?
    return driverObj
}