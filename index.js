// Write your solution in this file!

let driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
    
    const newDriver = {...driver};
    // create a function where a new object is instantiated including the original objects items {...object} so the original object is not destoyed
    newDriver[key] = value;

    return newDriver;
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
};

