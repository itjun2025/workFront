window.onload = function(){
    let btn1 = document.getElementById('btn1');
    let area1 = document.getElementById('area1');

    //btn1  요소에 click이벤트가 발생하면 함수를 실행
    btn1.addEventListener(`click`,function(){
        //area1.innerHTML=('실행');
    
    // 1. 배열 생성하기
    let array1 = new Array(); // []
    let array2 = new Array(3); // [empty x 3]
    let array3 = new Array('빨강','파랑','초록','노랑');
    let array4 = ['java','oracle','html5','css3','javascript'];

    console.log('array1 :',array1);
    console.log('array2 :',array2);
    console.log('array3 :',array3);
    console.log('array4 :',array4);

    // 여러가지 타입을 입력
    let array5 = [
        '고경희'        // 문자
        ,20             // 숫자
        ,true           // 논리값
        ,[1,2,3,4]      // 배열
        ,function(){    // 함수
            return 1
        }
        ,{}             // 객체
    ];
    console.log('array5 :',array5);

    // 2. 배열에 값을 추가하기
    array1[0] ='귤';
    array1[1] ='사과';
    array1[2] ='자몽';
    console.log('--------------------');
    console.log(array1);

    area1.innerHTML = `array1(빈배열)에 값 대입' : [${array1}]<br>`
                            + `array1.length : ${array1.length}<br><br>`;


    // 배열의 길이를 3으로 정했지만 길이가 자동으로 늘어남                        
    array2[0] = '자동차';
    array2[1] = '비행기';
    array2[2] = '기차';
    array2[3] = '자전거';

    area1.innerHTML += `array2(빈배열)에 값 대입' : [${array2}]<br>`
    + `array2.length : ${array2.length}<br><br>`

});
    
    let area2 = document.getElementById('area2');
    let btn2 = document.getElementById('btn2');

    // 3. 배열의 메소드
    // 1) indexOf() : 항목의 index번호를 반환
    btn2.addEventListener('click',function(){

        
        let array =['귤','자몽','사과','바나나','키위'];

        area2.innerHTML = `array: [${array}]<br><br>`;
        // 자몽의 index
        area2.innerHTML += `자몽이 있는 배열의 인덱스 : ${array.indexOf('자몽')}<br><br>`;
        // 키위의 index
        area2.innerHTML += `키위가 있는 배열의 인덱스 : ${array.indexOf('키위')}`;
    });

    let area3 = document.getElementById('area3');
    let btn3 = document.getElementById('btn3');
    // 2) concat() : 배열을 연결하여 반환
    // 배열1.concat(배열2)
    btn3.addEventListener('click',function(){
        // area3.innerHTML='실행확인'

        let array1 = ['갈치','오징어'];
        let array2 = ['꽁치','돌고래','낙지'];

        area3.innerHTML = `array1 : [${array1}]<br><br>`
        area3.innerHTML += `array2 : [${array2}]<br><br>`

        area3.innerHTML += `결합 : [${array2.concat(array1)}]<br><br>`;
        // 원본에 영항을 미치지 않는다.
        area3.innerHTML += `array1: [${array2}]<br>`;

    });

    let area4 = document.getElementById('area4');
    let btn4 = document.getElementById('btn4');
    // 3) join() 배열의 요소들을 결합하여 문자열로 반환
    // 매개값으로 구분자를 입력할 수 있다.
    btn4.addEventListener('click',function(){
        // area4.innerHTML='실행확인'
        let array = ['서울','경기','강원'];

        area4.innerHTML = `array : [${array}]<br>`
        area4.innerHTML += `array.toString() : [${array.toString()}]<br><br>`

        // 배열 -> 문자열
        area4.innerHTML += `array.join() : [${array.join()}]<br>`
        area4.innerHTML += `array.join('|') : [${array.join('|')}]<br>`
        area4.innerHTML += `typeOf(array.join('|')) : ${typeof(array.join('|'))}<br><br>`

        // 공백을 구분자로 문자열 생성
        let str = array.join(' ');

        // 문자열 -> 배열
        area4.innerHTML += `str.split(' ') : [${str.split(' ')}]<br>`

    });

    let area5 = document.getElementById('area5');
    let btn5 = document.getElementById('btn5');
    // reverse()
    // 원본에 영향을 미치는 메소드 
    btn5.addEventListener('click',function(){

        // area5.innerHTML='실행확인';
        let array = Array.of(10,5,3,6);

        area5.innerHTML = `array : [${array}]<br><br>`;
        area5.innerHTML += `array.reverse() : [${array.reverse()}]<br><br>`;
        // 원본이 바뀜
        area5.innerHTML += `array : [${array}]<br><br>`;
        
    });

    let area6 = document.getElementById('area6');
    let btn56 = document.getElementById('btn6');
    // sort()  매개변수가 없는경우 ASCII 문자 오름차순으로 정렬
    // 원본 배열에 영향을 미치는 메서드
    btn56.addEventListener('click',function(){

        // area6.innerHTML='실행확인';
        let array1 = ['Carry','carry','Apple','drade'];
        let array2 = [10,22,40,90,150];

        area6.innerHTML = `array1 : [${array1}]<br><br>`;
        area6.innerHTML += `array2 : [${array2}]<br><br>`;
        area6.innerHTML += `array1.sort() : [${array1.sort()}]<br><br>`;
        area6.innerHTML += `array2.sort() : [${array2.sort()}]<br><br>`;

        // sort()메소드에 함수를 매개값으로 전달해서 정렬 기준을 변경할 수 있다.
        array1.sort(function(left,right){

            return left-right // 오름차순 정렬
        });
        area6.innerHTML += `array1 오름차순 정렬 : [${array2}]<br>`

        array1.sort(function(left,right){

            return right-left  // 내림차순 정렬
            
        });
        area6.innerHTML += `array1 내림차순 정렬 : [${array1}]<br>`
        area6.innerHTML += `array2.sort() : [${array2.sort().reverse()}]<br><br>`;
        
    });

    let area7 = document.getElementById('area7');
    let btn7 = document.getElementById('btn7');
    // push, pop
    btn7.addEventListener('click',function(){
        // area7.innerHTML = '실행확인'

        let array1 = ['빅뱅','소녀시대','방탄','씨스타'];

        area7.innerHTML = `array1 : [${array1}]<br><br>`
        // 배열에 요소를 추가후 배열의 길이를 반환
        console.log('push()', array1.push('나훈아')); 
        area7.innerHTML += `array1 : [${array1}]<br><br>`
        // 배열에 요소를 추가후 배열의 길이를 반환
        console.log('push()', array1.push('임창정'));
        area7.innerHTML += `array1 : [${array1}]<br><br>` 

        // 배열의 마지막 요소를 반환하고 제거
        area7.innerHTML += `array1.pop() : [${array1.pop()}]<br><br>`;
        area7.innerHTML += `array1 : [${array1}]<br><br>` 
        area7.innerHTML += `array1.pop() : [${array1.pop()}]<br><br>`;
        area7.innerHTML += `array1 : [${array1}]<br><br>` 
       
    });

    let area8 = document.getElementById('area8');
    let btn8 = document.getElementById('btn8');
    //  shift, unshift
    btn8.addEventListener('click',function(){
        // area8.innerHTML = '실행완료'
        let array1 = ['빅뱅','소녀시대','방탄','씨스타'];

        area8.innerHTML = `array1 : [${array1}]<br><br>`
        // 맨앞의 요소를 반환 후 제거한다.
        area8.innerHTML += `array1.shift() : [${array1.shift()}]<br><br>`

        area8.innerHTML += `array1 : [${array1}]<br><br>`
        // 맨앞에 요소를 추가후 요소의 갯수를 리턴한다
        area8.innerHTML += `array1.unshift() : [${array1.unshift('트와이스')}]<br><br>`
        area8.innerHTML += `array1 : [${array1}]<br><br>`



    });

    let area9 = document.getElementById('area9');
    let btn9 = document.getElementById('btn9');
    // slice(), splice()
    btn9.addEventListener('click',function(){
        // area9.innerHTML= '실행완료'
        let array = ['유치원','초등학교','중학교','고등학교','대학교'];
        // 배열 
        area9.innerHTML = `array : [${array}]<br><br>`;
        // slice 사용 : 원본에 영향을 끼치지 않는다
        // 시작인덱스 ~ (끝인덱스 -1) 요소를 추출 반환
        // 끝인덱스는 포함하지 않는다 !!
        area9.innerHTML += `array.slice() : [${array.slice(2,4)}]<br>`
        area9.innerHTML += `array.slice() : [${array.slice(0,3)}]<br>`
        area9.innerHTML += `array : [${array}]<br><br>`;

        // splice 사용 : 원본에 영향을 끼친다.
        area9.innerHTML += `array.splice() : [${array.splice(2,4)}]<br>`
        area9.innerHTML += `array : [${array}]<br><br>`;

        // array.splice(      2             ,0          ,'ㅇㅇ')
        //             ( 시작인덱스  , 삭제할 인덱스  , 항목)
        area9.innerHTML += `array.splice() : [${array.splice(2,0,'교회','성당')}]<br>`
        area9.innerHTML += `array : [${array}]<br>`;
    });
}