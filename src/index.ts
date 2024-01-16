import { Student } from "./models/Student"

const student = new Student({name: 'naj', age: 24, phone: 1110944393, 
email: 'muhammadnajmuddin1907@gmail.com', 
address: 'NO 43 JALAN TAMAN TEMIANG JAYA 2, TAMAN TEMIANG JAYA, MUAR 84000 JOHOR'})

student.on('change', () => {
  console.log('Change #1');
});

student.on('change', () => {
  console.log('Change #2');
});

student.on('save', () => {
  console.log('Save was triggered');
});

console.log('helloooo');
student.trigger('change');

console.log(student);

// student.set({name: 'newname', age: 255});

// console.log(student.get('name'))
// console.log(student.get('age'))
// console.log(student.get('phone'))
// console.log(student.get('email'))
// console.log(student.get('address'))