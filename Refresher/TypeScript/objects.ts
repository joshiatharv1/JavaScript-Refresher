let student: any={
    "studentName": "Atharv Joshi",
    "studentPhone": 4859845,
    "studentEmail": "atharv444joshi@gmail.com",
    "studentAddress": "Boston, MA"
}

let anotherStudent: any=JSON.parse(student);

console.log(anotherStudent)
// This is spread operator to copy the student.
let anotherStudent1 = { ...student };