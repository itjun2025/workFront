/*
    1. 화면이 모두 로드된 이후 실행
        winodw.onload = function(){...}
    2. 버튼을 선택, div 선택
        document.getElementById('id')
    3. 로또번호 생성
        parseInt(Math.random()*6)
        
    4. 버튼을 클릭하면div에 생성된 번호를 출력
        div.innerHTML = '<div class ='ball'>${num}</div>'
*/

console.log('log');
let btn1 = document.getElementById('btn1');

// 1. 화면이 모두 로드 된 이후 실행
window.onload = function(){
    console.log('화면이 모두 로딩되었습니다.')

// 2. 버튼, div 선택하기
    let btn1 = document.getElementById('btn1');
    let lottoDiv = document.querySelectorAll('div[class=lottoDiv]');




   
// 3. 버튼이 클릭되었을때 div 초기화
btn1.onclick = function(){
    // div 초기화
    lottoDiv.innerHTML='';

    let nums = [3,5,7,9,12];
    console.log('=============')

    for(let num of nums){
            console.log(num);
            lottoDiv.innerHTML = `<div class ="ball">${num}</div>`;
        }
    
        // 색상 변경
        let ballList = document.querySelectorAll('div[class=ball]')
        for(let i=0; i<ballList.length ; i++){
            console.log(i)
            let color = getColor();

             ballList[i].style.backgroundColor = color;
             ballList[i].style.borderColor = color;


        }
    }

};

function getColor(){
    console.log('색상변환')

    let r,g,b;
     r = parseInt(Math.random()*256);
     g = parseInt(Math.random()*256);
     b = parseInt(Math.random()*256);
    return`rgb(${r},${g},${b})`;
}