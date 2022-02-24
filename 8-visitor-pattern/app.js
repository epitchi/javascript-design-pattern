function Employee(name, salary){
    this.name = name
    this.salary = salary
}

Employee.prototype = {
    getSalary: function(){
        return this.salary
    }, 
    setSalary: function(sal){
        this.salary = sal
    },
    accept: function(visitorFunction){
        visitorFunction(this)
    }
}

//////////////////////////////////////////////////////////
const test = new Employee("Test", 10000)
console.log(test.getSalary())

function ExtraSalary(emp){
    emp.setSalary(emp.getSalary() * 2)
}

test.accept(ExtraSalary)
console.log(test.getSalary())