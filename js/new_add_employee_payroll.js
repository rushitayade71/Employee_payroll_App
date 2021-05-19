// UC ---> 4 // Display Employee Details in Tabular Format using Template Literals //
                                        // & //
                // UC ---> 5 // Display Employee Details from JSON Object //

let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFormStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
});

const getEmployeePayrollDataFormStorage = () => {
    return  localStorage.getItem("EmployeePayrollList") ?
            JSON.parse(localStorage.getItem("EmployeePayrollList")) : [];
}

    //     <td>
    //     <div class="dept-label">${empPayrollData._department[0]}</div>
    //     <div class="dept-label">${empPayrollData._department[1]}</div>
    //    </td>

const createInnerHtml = () => {
    if (empPayrollList.length == 0 ) return;
    const headerHtml = " <th></th><th>Name</th><th>Gender</th>"+
                         "<th>Department</th><th>Salary</th>"+
                         "<th>Start Date</th><th>Actions</th>"
                         
                         let innerHtml = `${headerHtml}`;
                         for (const empPayrollData of empPayrollList) {
                           innerHtml = ` ${innerHtml}
 
        <tr>
        <td><img class="profile" alt=" " src="${empPayrollData._profilePic}"></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
           <img name="${empPayrollData._id}" id="1" onclick="remove(this)" alt="delete"
                src="../assets/icons/delete-black-18dp.svg">
           <img name="${empPayrollData._id}" id="1" onclick="update(this)" alt="edit" 
                src="../assets/icons/create-black-18dp.svg" >
        </td>
        </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

// const createEmployeePayrollJSON = () => {
//     let empPayrollListLocal = [
//         {
//             _name: 'Rushikesh Tayade',
//             _gender: 'Male',
//             _department: [
//                 'HR',
//                 'Finance'
//             ],
//             _salary: '5000000',
//             _startDate: '29 Oct 2019',
//             _id: new Date().getTime(),
//             _profilePic: '../assets/profile-images/Ellipse -2.png'
//         },
//         {
//             _name: 'Vaishnavi Raut',
//             _gender: 'Female',
//             _department: [
//                 'Sales'
//             ],
//             _salary: '4000000',
//             _startDate: '29 April 2019',
//             _id: new Date().getTime() +1,
//             _profilePic: '../assets/profile-images/Ellipse -1.png'
//         }
//     ];
//     return empPayrollListLocal;
// }

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}
