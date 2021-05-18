// UC ---> 1 // Employee Payroll Class with New Attributes //

class EmployeePayroll {
    
     getId() {
        return this._id;
    }

    setId(id) {
        this._id = id;
    }

     getName() {
        return this._name;
    }

     setName(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRegex.test(name)) {
        this._name = name;
     }
        else {
            throw 'Name is Incorrect!!';
        } 
    }

    getProfilePic() {
        return this._profilePic;
    }

    setProfilePic(profilePic) {
        this._profilePic = profilePic;
    }

    getGender() {
        return this._gender;
    }

    setGender(gender) {
        this._gender = gender;
    }

    getDepartment() {
        return this._department;
    }

    setDepartment(department) {
        this._department = department;
    }

    getSalary() {
        return this._salary;
    }

    setSalary(salary) {
        this._salary = salary;
    }

    getStartDate() {
        return this._startDate;
    }

    setStartDate(startDate) {
        this._startDate = startDate;
    }

    getNote() {
        return this._note;
    }

    setNote(note) {
        this._note = note;
    }
    // toString Method //
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" : 
                        this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name=" + this.name + ", gender=" + this.gender + 
                ", profilePic=" + this.profilePic + ", departments=" + this.department + 
                ", salary=" + this.salary + ", startDate=" + empDate + ", note=" + this.note;
    }

}