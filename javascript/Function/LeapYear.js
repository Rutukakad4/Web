function isLeapYear(year){
    if((year%4===0 && year %100!==0)|| year%400===0){
        return true;
    }
    return false;
}
console.log("2024 is leap year:",isLeapYear(2024));
console.log("2023 is leap year:",isLeapYear(2023));