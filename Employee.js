'use strict'

const fs = require('fs')

class Employee {
  constructor(name,title,salary) {
    this._name = name
    this._title = title
    this._salary = salary
  }

  set title(title){
    this._title = title
  }
  set salary(salary){
    this._salary = salary
  }
  get salary(){
    return this._salary
  }
  
  static  parseFromFilePath(filepath) {
    console.log("filepath is" + filepath)
    
    let content = fs.readFileSync(filepath)     
    console.log(content.toString())
    let obj = JSON.parse(content)
    let emp = new Employee(obj.name,obj.title,obj.salary)
    return emp
  } 

 promote(title, raise){
  this.title = title
  this.salary = this.salary + raise
  console.log("promoted")
  }
  
}

  module.exports = {
    Employee
  }