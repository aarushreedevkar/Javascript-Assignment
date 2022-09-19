const IS_PART_TIME=1;
const IS_FULL_TIME =2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR =20;
const MAX_HRS_IN_MONTH =100;
const NUM_OF_WORKING_DAYS =10;

let totalempHrs=0;
let totalWorkingdays = 0;
 while(totalempHrs <= MAX_HRS_IN_MONTH && totalWorkingdays < NUM_OF_WORKING_DAYS){
    totalWorkingdays++;
    let empCheck = Math.floor(Math.random() * 10 ) % 3;
    totalempHrs +=getWorkingHpurs(empCheck);
 }
 let empWage = totalempHrs * WAGE_PER_HOUR;
 console.log("UC-5 Total Days: " + totalWorkingdays + "Total Hrs" + totalempHrs + " +Empwage:"  +empWage);
 