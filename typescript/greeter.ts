class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(student: Student) {
    return "Hello, " + student.fullName;}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);