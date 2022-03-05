const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey');// 요청할 때 아무나 하지 못하게 apikey를 설정하게 해줍니다. 




const server = app.listen(3001, () => {
    console.log('start server : localhost3001')
});



//아래는 key출력문이다. 
//console.log(uuidAPIKey.create()); 

const key = {
    apiKey: '05721NH-CMXM039-MXEB7G9-1R0V90N',
    uuid: '014e20d6-653b-400d-a75c-b3c10e01b482'
  };

  


app.get('/api/users/:apikey/:type', async (req, res) => {
    let {
        type
    } = req.params; //스프링에서 패스발리어블같이 작동하는 것 같음. 

    //if(uuidAPIKey.isAPIKey() && !uuidAPIKey.check(apikey, key.uuid)){
// apijkey를 체크하는 조건문입니다. 
   // }

    console.log(type);//주소안에 타입이 출려깅 될것이고 즉 이 변수가지고 if문 가지고 놀 수 있고 다양하게 가지고 응용할 수 있다. 
    res.send('ok')
    //위에는 문자열이나 json데이터 보낼때, 아래는 페이지 보낼때
    //res.render('index.html')



    //아래처럼 응용할 수 있다. 
    // if(type === '서울'){
    //     let data = [
    //         {name: '홍길동', city: '서울'},
    //         {name: '김춘수', city: '서울'}
    //     ];
    //     res.send(data);  
    // }


}) //api주소에 콜론하고 타입 들어가있는데 콜론은 어떤값이든 들어갈 수 있다는 것이고 타입은 변수명을 선언
