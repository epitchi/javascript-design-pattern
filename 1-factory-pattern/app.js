function Developer(name){
    this.name = name
    this.type = "Developer"
}

function Tester(name){
    this.name = name;
    this.type = "Tester"
}

function EmployeeFactory(){
    this.create = (name, type) => {
        switch(type){
            case 1: 
                return new Developer(name)
            case 2: 
                return new Tester(name)
        }
    }
}

function say(){
    console.log("Hi, I am" + this.name + " and I am a " + this.type)
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create('John', 2))
employees.push(employeeFactory.create('Cena', 1))
employees.push(employeeFactory.create('Tommoy', 2))
employees.push(employeeFactory.create('Arthur', 1))
employees.push(employeeFactory.create('Mark', 1))
employees.push(employeeFactory.create('Sus', 2))
employees.push(employeeFactory.create('Amogus', 2))

employees.forEach( emp => {
    say.call(emp)
})