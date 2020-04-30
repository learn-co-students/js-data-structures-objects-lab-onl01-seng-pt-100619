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
    // the function doesnt create a new object so the original object is updates by key and value
    return driver;
};

function deleteFromDriverByKey(driver, key){
    let newDriver = {...driver};
    delete newDriver[key];
    // the new object is accesed with the delete keyword on the key using square bracket and not dot notation
    return newDriver;
};

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
    // function doesnt create a new jarascript object and modify the original
};