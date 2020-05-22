const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
   ///driver.key = value
   const newObj = { ...driver };
 
   newObj[key] = value;
  
   return newObj;
 }
   ///return driver;
    ///}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key, value) {
    const newdriver = { ...driver };
 newdriver[key] = value;
 return newdriver;
}

function destructivelyDeleteFromDriverByKey(driver, key, value) {
    driver[key] = value;
    return driver;

}

