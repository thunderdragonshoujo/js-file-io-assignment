'use strict'

const fs = require('fs')

class Employee {
  constructor(name, title, salary) {
    this._name = name
    this._title = title
    this._salary = salary
  }

  set title(title) {
    this._title = title
  }
  set salary(salary) {
    this._salary = salary
  }
  get salary() {
    return this._salary
  }


  static parseFromFilePath(filepath) {
    return new Promise((resolve, reject) => {
      if (resolve) {
        let content = fs.readFileSync(filepath)
        console.log(content.toString())
        let obj = JSON.parse(content)
        let emp = new Employee(obj.name, obj.title, obj.salary)
        resolve(emp)
      } else {
        reject(console.log(ERR))


      }
    })


  }

  promote(title, raise) {
    this.title = title
    this.salary = this.salary + raise
    console.log("promoted")
  }

}

module.exports = {
  Employee
}