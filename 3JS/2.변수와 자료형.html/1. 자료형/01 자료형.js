// let 과 var의 차이 ?
// let 은 변수명 중복 불가능
// var 은 변수명 중복 가능!

// 버튼에 onclick = '함수명()' 이벤트를 입력 후
// 함수를 실행시키기 위해서 버튼을 클릭합니다!
function typeTest(){
    // document.write('typeTest'); 화면에 출력

    // alert('typeTest'); 알림창

    // 콘솔에 출력
    console.log('typeTest');

    // 변수를 선언시 사용되는 키워드
    // var, let, const(상수)

    // 숫자형 : 정수와 실수를 포함
    let age = 20;
    let height = 184.5;

    // 문자형 : 작은따옴표, 큰따옴표로 묶은 데이터
    let name1 = '서동준';
    let name2 = "서동준";
    let name3 = ""; // 빈 문자열도 가능

    // 논리값 : true,false
    let check = false;

    // 박스선택
    let area1 = document.getElementById('area1');
    
    // 박스에 값을 입력
    area1.innerHTML ='<h4>안녕하세요</h4>';
    //Template literals 템플릿리터럴
    // "",'' 대신 ``(백팃)을 사용하여 변수를 함께 출력하는 방법
    area1.innerHTML += `name : ${name}, type: ${typeof(name)} <br>`;
    area1.innerHTML += 'name : ' + name + ', type: ' + typeof(name) + '<br>';
    area1.innerHTML += `age: ${age}, type: ${typeof(age)}<br>`;
    area1.innerHTML += `height: ${height}, type: ${typeof(height)}<br>`;
    area1.innerHTML += `check: ${check}, type: ${typeof(check)}<br>`;
   
}
function typeTest2(){

    console.log('typeTest2');
    // 배열
    let hobbies = ['축구','농구','야구'];

    let area2 = document.getElementById('area2');
    area2.innerHTML = '<h4>객체 테스트<br></h4>';
    area2.innerHTML += `hobbies : ${hobbies} , type : ${typeof(hobbies)}<br><br>`;

    // 변수에 함수를 저장할 수도 있고
    // 매개변수로 함수를 넘겨줄 수도 있다!!

    // 함수 선언 : 익명의 함수를 변수에 저장
    // 매개변수의 갯수가 일치하지 않은경우
    // , undefined로 초기화 되어 오류가 발생 ===> 초기값 지정을 해줘야한다!!
    // 초기값 지정 (num1=0, num2=0)

    let testFunc = function(num1=0, num2=0){
        console.log('num1', num1);
        console.log('num2', num2);
        return num1+num2;
    }
    // 함수를 실행 : 변수이름(매개변수)
    console.log('testFunc : ',testFunc(12,13));
    // 매개변수의 갯수가 일치하지 않아도 실행 (없거나 1개여도 실행)
    console.log('testFunc : ',testFunc());

    area2.innerHTML += `testFunc : ${testFunc}, type : ${typeof(testFunc)}<br><br>`;

    // 객체타입
    let user = {
        /* 속성 : 값,
           속성 : 값,....
        */ 
        name : '메시',
        age  : 20,
        height : 180.2,
        id : 'test',
        hobbies : ['축구','농구','야구']
    };
    // 모든객체 출력
    console.log('user :',user);
    // . 을이용해 객체 선택
    console.log(user.name);
    console.log(user.hobbies);
    
    area2.innerHTML += `user : ${user}, type : ${typeof(user)}<br><br>`;
    area2.innerHTML += `null type : ${typeof(null)}<br><br>`;
    area2.innerHTML += `undefined type : ${typeof(undefined)}<br><br>`;
}

// 2. 데이터 형변환

function plusTest(){

    let test1 = 7+7;
    let test2 = '7'+7;
    let test3 = '7'+(7+7);
    let test4 = 7*'7';  // 49
    let test5 = 4 %'2'; // 0
    let test6 ='3'*'a'; // NaN

    let area = document.getElementById('area3'); 

    area.innerHTML = `test1 : ${test1}<br>`;
    area.innerHTML += `test2 : ${test2}<br>`;
    area.innerHTML += `test3 : ${test3}<br>`;
    area.innerHTML += `test4 : ${test4}<br>`;
    area.innerHTML += `test5 : ${test5}<br>`;
    area.innerHTML += `test6 : ${test6}<br>`;

}

function castingTest(){

    let area4 = document.getElementById('area4');

    area4.innerHTML = `${2+'3'}<br>`;
    area4.innerHTML += `${2+Number('3')}<br>`;
    area4.innerHTML += `${2+parseInt('3')}<br>`;
    area4.innerHTML += `${2 + parseFloat('3')}<br>`;
    
    // 16진수를 10진수로 변환
    // ff : 255
    area4.innerHTML += `${parseInt('ff',16)}`
}

function opTest(){
    let area5 = document.getElementById('area5');

    area5.innerHTML = '"==" 연산자 테스트<br>';
    area5.innerHTML += `7==7 : ${7 == 7}<br><br>`;
    area5.innerHTML += `7=='7' : ${7 == '7'}<br><br>`;
    area5.innerHTML += `7 !='7' : ${7 != '7'}<br><br>`;
    area5.innerHTML += `'7'!='7' : ${'7' != '7'}<br><br>`;

    area5.innerHTML += '"===" 연산자 테스트<br><br>';
    area5.innerHTML += `7===7 : ${7 === 7}<br><br>`;
    area5.innerHTML += `7==='7' : ${7 === '7'}<br><br>`;
    area5.innerHTML += `7 !=='7' : ${7 !== '7'}<br><br>`;
    area5.innerHTML += `'7' !=='7' : ${'7' !== '7'}<br><br>`;
}

function forTest(){

    // 1~10까지 수를 담고있는 배열 array
    let array = [1,2,3,4,5,6,7,8,9,10];

    for(let i=0; array.length>i; i++){

        console.log(array[i]);
    }
    console.log('for ===================')

    // for(변수 in 객체){}
    // 반복문 - 객체 키와 값 가져오기
    // 반복 변수에 array의 index를 순서대로 담아서 반복시킨다.
    // 객채명.속성명,객체명[속성명]

    for(let i in array){
        console.log(array[i]);
    }

    let student = {
        name : '홍준표'
        ,age : '20'
        ,class : '1'
    };
    //객체의 속성, 속성값을 출력
    for(key in student){
        console.log(key,student[key]);
        // 객체명.속성명 -> thrtjdauddmf dkfrh dlTdmfEo tkdyd
        // 속성명이 key인 요소를 찾는데 없으니까 undefined 반환
        //  console.log(key,student.key); ERR
    }
    console.log('for in ===================');

    // 배열.forEach(function(변수){})
    // 배열의 요소를 함수의 매개변수로 전달
    array.forEach(function(num){
        console.log(num);
    })
    console.log('forEach ===================');

    let i = 0;
    while(true){
        i++;
        // 짝수이면 출력
        if(i % 2 == 0){
            console.log(i);
        }

        if(i>5){
            break;
        }
    }
    console.log('while ===================');

    //ES6부터 추가된 for문
    for (let iterator of array){
        console.log(iterator);
    }

}