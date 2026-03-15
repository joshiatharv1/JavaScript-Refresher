let Person={
    name: "Atharv Joshi",
    address: "Indore, India",
    phone: 48954745,
}
let Student={
    id: 101,
    standard: 10,
    major: "Computer Science"
}
// Object1 was created with the help of Student as a protoype
let object1=Object.create(Student);
object1.getStudentID=function getID(){
    console.log("Student ID is :- ", this.id)
}
console.log(object1)
console.log(object1.getStudentID())