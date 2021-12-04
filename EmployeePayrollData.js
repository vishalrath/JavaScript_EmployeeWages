class EmployeePayrollData
{
    //property
    id;
    salary;

    //constructor
    constructor (id, name, salary)
    {
        this.id =id;
        this.name = name;
        this.salary = salary;
    }
    //getter and setter method
    get name() {return this._name;}
    set name(name) {this._name = name;}
    
    //method
    toString()
    {
        return "id=" +this.id + ", name=" +this.name +", salary=" +this.salary;
    }
}
let EmployeePayroll = new EmployeePayrollData(1, "Amir",33333333);
console.log(EmployeePayroll.toString());