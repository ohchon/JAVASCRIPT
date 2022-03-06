const schedule = require('node-schedule');

let scheduleObj = null;

const set = (s) => {
    const rule = new schedule.RecurrenceRule();
    rule.dayOfWeek = s.dayOfWeek; // 목요일, 금요일 날
    rule.hour = s.hour;//  시간
    rule.minute = s.minute;// 분
    // Timezones are also supported. Below is an example of executing at the start of every day in the UTC timezone.
    //rule.tz = 'Etc/UTC';


    //위에 스케쥴링에 설정에 맞게 아래 스케쥴러 함수가 작동할거임
    const job = schedule.scheduleJob(rule, function(){
      console.log('Scheduler has executed!');
    });
    // RecurrenceRule properties
        // second (0-59)
        // minute (0-59)
        // hour (0-23)
        // date (1-31)
        // month (0-11)
        // year
        // dayOfWeek (0-6) Starting with Sunday
        // tz 
        scheduleObj = job;
};

const cancel = () => {
  if(scheduleObj != null){
    scheduleObj.cancel();
  }
};

const setScheduler = (s) => {
  cancel();
  set(s); 
}

const scheduleData = {
  dayOfWeek: [4, 5],
  hour: 18,
  minute: 21 
}

setScheduler(scheduleData);

