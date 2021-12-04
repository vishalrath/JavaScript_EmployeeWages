//constant variables
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const WAGE_PER_HOURS = 20;
const NUM_OF_WORKING_DAYS = 28;
const MAX_HRS_PER_MONTHS = 100;

//This function for return working hours
function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_FULL_TIME:
            return 8;
        case IS_PART_TIME:
            return 4;
        default:
            return 0;
    }
}

//this function for daily wage of employee
function getEmpWage(empHrs)
{
    return empHrs * WAGE_PER_HOURS;
}

let empHrs = 0;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empHrsMap = new Map();

while (totalEmpHrs <= MAX_HRS_PER_MONTHS && totalWorkingDays < NUM_OF_WORKING_DAYS )
{
    totalWorkingDays++;
    //gives random value
    let empCheck = Math.floor(Math.random() * 10) % 3;
    //calling function
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs = totalEmpHrs +empHrs;
    empDailyWageArr.push(getEmpWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, getEmpWage(empHrs));
    empHrsMap.set(totalWorkingDays, empHrs);

 
    if(totalEmpHrs > 100)
    {
        totalEmpHrs -= empHrs;
    }
}

//calculating total employee wage
let totalEmpWage = totalEmpHrs * WAGE_PER_HOURS;
//calculating total employee wage using array
let empWage = getEmpWage(totalEmpHrs);
console.log("Total Hours: " +totalEmpHrs+"\nTotal Working Days: "+NUM_OF_WORKING_DAYS+"\nEmployee Monthly Wage: " + totalEmpWage);
//display array elements
console.log("Daily Wage array : " +empDailyWageArr.join(" "));
console.log("Total Wage using array: " +empWage);

//UC7 Array helper function
//UC7-a : Calculate totalEmpWage using Array foreach()
let totalWageSum = 0;
function sum(dailywage)
{
    totalWageSum+=dailywage;
}
empDailyWageArr.forEach(sum);
console.log("UC7-a : Calculate totalEmpWage using Array foreach() : " +totalWageSum);

//UC7-b : Show the day along with daily wage using Array map helper function
let dailycount = 0;
function mapDayWithWage(dailyWage)
{
    dailycount++
    return dailycount + " : " +dailyWage;
}
let mapDayWithWageArray = empDailyWageArr.map(mapDayWithWage);
console.log("UC7-b : DailyWageMap : "+mapDayWithWageArray);

//UC7-c :show days when full time wage of 160 were earned
function fullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArray.filter(fullTimeWage);
console.log("UC7-c: Daily Wage Filter when fulltime wage earned : " + fullDayWageArr);

//UC7-d : Find the first occurrence when full time wage was earned using find function
function findFullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDayWageArray = mapDayWithWageArray.find(fullTimeWage);
console.log("UC7-c: First time fulltime wage was earned on Day : " + fullDayWageArray);

//UC7-e : Check if every element of full time wage is truely holding full time wage
function isAllFullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC7-e : check all element have full time wage: "+ fullDayWageArr.every(isAllFullTimeWage));

//UC7-f : check if there is any part time wage
function isAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("UC7-f: check if any part time wage : "+mapDayWithWageArray.some(isAnyPartTimeWage));

//UC7-g- find the number of days the employee worked
function totalDayWorked(numOfDays, dailyWage)
{
    if (dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC7-g : Number of Days Emp worked :" + empDailyWageArr.reduce(totalDayWorked, 0));

//UC8//
console.log(empDailyWageMap);
function totalWages(totalwage, dailyWage)
{
    return totalwage + dailyWage;
}
console.log("UC8 : Emp Wage Map totlHrs: "+Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

//UC9 Arrow functions
//UC9-A
let totalWageMap = (total, dailyWage) => 
{
    return total + dailyWage;
}

let totalWageUsingMap  = Array.from(empDailyWageMap.values()).reduce(totalWageMap, 0);
console.log(" UC 9A total wage using maps: "+totalWageUsingMap);
let totalHrsUsingMap = Array.from(empHrsMap.values()).filter(hrs=>hrs>0).reduce(totalWageMap,0);
console.log(" UC 9A total hours using maps: "+totalHrsUsingMap);

//UC9-B
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

empHrsMap.forEach((value, key, map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days : " +fullWorkingDays);
console.log("Part Working Days : " +partWorkingDays);
console.log("Non Working Days : " +nonWorkingDays);