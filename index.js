const driver = {};

function updateDriverWithKeyAndValue(driverObj, key, value){
    const newDriver = Object.assign({}, driverObj, {[key]: value })
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driverObj, key, value){
    driverObj[key] = value
    return driverObj
}

function deleteFromDriverByKey(driverObj, key){
    const newObj = Object.assign({},driverObj)
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromDriverByKey(driverObj, key){
    delete driverObj[key]
    return driverObj

} 