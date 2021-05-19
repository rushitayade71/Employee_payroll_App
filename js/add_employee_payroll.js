// UC --> 2 // On Document Load Set Event Listeners //

window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayroll()).name = name.value;
            textError.textContent = ""
        } catch (e) {
            textError.textContent=e;
        }
    });
    
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function(){
        output.textContent = salary.value;
    });
}); 

// UC ---> 4 // Saving Employee Payroll to Local Storage //

const save = () => {
    try{
        let employeePayroll = createEmployeePayroll();
        createAndUpdateStorage(employeePayroll);
    } catch (error) {
        return;
    }
}

function createAndUpdateStorage(employeePayroll){
    
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));

    if(employeePayrollList != undefined) {
        employeePayrollList.push(employeePayroll);
    } else {
        employeePayrollList = [employeePayroll]
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
}

// UC ---> 3 // On Save Create Employee Payroll Object //

const createEmployeePayroll = () => {
    let employeePayroll = new EmployeePayroll();
    try{
        employeePayroll.name = getInputValueById("#name");
    } catch (error) {
        setTextValue('.text-error', error);
        throw error;
    }
    employeePayroll.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayroll.gender = getSelectedValues('[name=gender]').pop();
    employeePayroll.department = getSelectedValues('[name=department]');
    employeePayroll.salary = getInputValueById('#salary');
    employeePayroll.note = getInputValueById('#notes');
    let date =  getInputValueById('#day')+" "+
                getInputValueById('#month')+" "+
                getInputValueById("#year");

    employeePayroll.startDate = new Date(date);
    alert(employeePayroll.toString());
    return employeePayroll;
}

// const getOption = (id) => {
//     var e = document.getElementById(id);
//     var strUser = e.options[e.selectedIndex].text;
//     return strUser;
// }
// let date= getOption('#day')+" "+getOption('#month')+
//                             " "+getOption('#year');

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

/***  
    const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}
 ***/

// UC ---> 5 // Reset the Employee Payroll Form //

const resetForm = () => {
    setValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setTextValue('#salary', '');
    setValue('#notes', '');
    setValue('#day', '1');
    setValue('#month', 'January');
    setValue('#year', '2020');
}
const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}
const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}
const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}
