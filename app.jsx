import React from "react";
import "./App.css";

// Base Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Fixed: use backticks for template literal
  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Student subclass
class Student extends Person {
  constructor(name, age, rollNo, course) {
    super(name, age);
    this.rollNo = rollNo;
    this.course = course;
  }

  getInfo() {
    return (
      <>
        <p><b>Student</b></p>
        <p><b>Name:</b> {this.name}</p>
        <p><b>Age:</b> {this.age}</p>
        <p><b>Roll No:</b> {this.rollNo}</p>
        <p><b>Course:</b> {this.course}</p>
      </>
    );
  }
}

// Teacher subclass
class Teacher extends Person {
  constructor(name, age, subject, salary) {
    super(name, age);
    this.subject = subject;
    this.salary = salary;
  }

  getInfo() {
    return (
      <>
        <p><b>Teacher</b></p>
        <p><b>Name:</b> {this.name}</p>
        <p><b>Age:</b> {this.age}</p>
        <p><b>Subject:</b> {this.subject}</p>
        <p><b>Salary:</b> ₹{this.salary}</p>
      </>
    );
  }
}

// Main App Component
function App() {
  const people = [
    new Student("Aniket", 21, "CS001", "MERN Stack"),
    new Teacher("Mr. Rahul", 35, "Web Dev", 65000),
    new Student("Sania", 20, "CS002", "Data Science"),
    new Teacher("Ms. Priya", 32, "DBMS", 70000),
  ];

  return (
    <div className="App">
      <h2>Person Hierarchy</h2>
      <div className="card-container">
        {people.map((person, index) => (
          <div key={index} className="card">
            {person.getInfo()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
