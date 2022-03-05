
//day0 자바스크립트 기본

// const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// rainbowColors.push('ultraviolet') // 배열의 마지막에 ultarviolet 추가
// console.log(rainbowColors) // ultraviolet이 추가된 rainbowColors 출력

// rainbowColors.pop() // 배열의 마지막 요소 ultraviolet을 제거
// console.log(rainbowColors) // ultraviolet이 제거된 rainbowColors 출력l
// 위에 코드는 배열이랑 추가삭제하는 법임

//----------------------------------------------------------------------------------------------------------------------------

//day1 간단 설정

// const moment = require("moment");// require 함수를 이용해서 require("패키지명")으로 선언하면 사용할 수 있습니다. 

// console.log("today", moment().format("YYYY-MM-DD")); // 현재날짜 출력
// console.log("tomorrow", moment().add(1, "day").format("YYYY-MM-DD"));// 내일날짜 출력
// console.log("week", moment().add(1, "week").format("YYYY-MM-DD"));//다음주 날짜 출력
// console.log("month", moment().add(1, "month").format("YYYY-MM-DD"));//한달뒤출력

//----------------------------------------------------------------------------------------------------------------------------

//day2 노드 가본

const nodemailer = require('nodemailer');//노드메일러를 쓰기위해 선언

 
//아래의 email은 관리자급의 계정정보입니다.
//email안에 들어가 있는 항목들은 smtp쓸때 필요한 기본정보들입니다. 아래주소로 들어가면 더욱 자세한 설명이 있고 더 많은 중요한 정보들을 추가할 수 있습니다. 
//https://nodemailer.com/smtp/
//이런 메일 기능들을 쓰기 위해서는 메일 서버가 필요한데 이런 메일서버를 대행해주는 사이트가 있습니다. 아래의 주소가 사이트 주소입니다. 
//https://mailtrap.io/

//아래 항목은 nodemailer사이트에서 가장 기본적인 정보들입니다. 
// const email = {
//     "host": "",
//     "port": "",
//     "secure": false, 
//     "auth": {
//         "user": "",
//         "pass": "",
//     }
// }


//아래는 mailtrap.io에서 필요로 하는 기본정보입니다. 
// var transport = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "47cefeb40cfa56",
//       pass: "8dfdae7dcb870b"
//     }
//   });

//아래는 위에 두개를 합친 것 입니다. 
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "47cefeb40cfa56",
      pass: "8dfdae7dcb870b"
    }
  };
const send = async (option) =>  {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error){
            console.log(error);
        }else {
            console.log(info);
            return info.response;
        }
    });
    //메일기능을 만들기 위해서는 smtp서버(메일서버)가 있어야 하고 관리자급의 계정정보가 있어야합니다.
    //mailtrap.io라는 smtp서버대행사이트에서 서버랑 관리자금 계정을 받아서 설정하였습니다. 
};

//아래는 보낼 데이터 입니다. 
let email_data = {
    from: 'ohsunghyun98@gmail.com',
    to: 'dtg8@naver.com',
    subject: '테스트메일',
    text: '테스트성공'
}

send(email_data); //실행명령인듯 합니다.