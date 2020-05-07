// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver,key,value){
    return Object.assign({}, driver, {[key]:value});
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver,key,value){
    const driverObject = Object.assign({}, driver, {[key]:value});
    delete driverObject.key;
    return driverObject;
}

function destructivelyDeleteFromDriverByKey(driver,key,value){
    driver[key] = value;
    delete driver.key;
    return driver;
}
