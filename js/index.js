const now = new Date();
console.log(now);
//Fri Sep 24 2021 18:20:46 GMT+0330 (Iran Standard Time)


const date = new Date( " Mar 18 2021");
console.log(date);
//Thu Mar 18 2021 00:00:00 GMT+0330 (Iran Standard Time)


const date2 = new Date( " Mar 18 2021 7:3:25");
console.log(date2);
// Thu Mar 18 2021 07:03:25 GMT+0330 (Iran Standard Time)

const date3 = new Date( 2021,7,18,9,12,11,10);
console.log(date3);
//Wed Aug 18 2021 09:12:11 GMT+0430 (Iran Daylight Time)

const date4 = new Date( 2021,7,18);
console.log(date4);
//Wed Aug 18 2021 00:00:00 GMT+0430 (Iran Daylight Time)

const date5 = new Date( 2021,7);
console.log(date5);
//Sun Aug 01 2021 00:00:00 GMT+0430 (Iran Daylight Time)

const date6 = new Date(2021);
console.log(date6);
// Thu Jan 01 1970 03:30:02 GMT+0330 (Iran Standard Time)

const now2 = new Date();
console.log(now2);
//Fri Sep 24 2021 18:40:56 GMT+0330 (Iran Standard Time)
console.log(now2.toDateString());
//Fri Sep 24 2021
console.log(now2.toTimeString());
// 18:44:08 GMT+0330 (Iran Standard Time)
console.log(now2.toISOString());
//2021-09-24T19:15:58.242Z