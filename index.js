let employee = {
    name: 'Me',
    streetAddress: '123 Main St'
}

const updateEmployeeWithKeyAndValue = (employeeObject, key, value) => {
    let newObject = {...employeeObject};
    newObject[key] = value;
    return newObject
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employeeObject, key, value) => {
    employeeObject[key] = value;
    return employeeObject
}

const deleteFromEmployeeByKey = (employeeObject, key) => {
    let newObject = {...employeeObject};
    delete newObject[key];
    return newObject
}

const destructivelyDeleteFromEmployeeByKey = (employeeObject, key) => {
    delete employeeObject[key];
    return employeeObject
}