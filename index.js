const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = { ...driver };
  newObj['address'] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver.address = value;
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const newObj = Object.assign({}, driver);
  delete newObj[key];
  return newObj;

}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}