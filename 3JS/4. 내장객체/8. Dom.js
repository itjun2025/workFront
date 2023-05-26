// 페이지가 로드(이벤트 발생)된 이후 함수를 실행
window.onload= ()=>{
    btn1.addEventListener('click',function(){
        
        
        // 1. 요소노드 만들기
        let elementNode = document.createElement('h3');
        // 2. 텍스트 노드 만들기
        let textNode = document.createTextNode('안녕하세요오');
        // 3. 자식노드 연결하기
        // 부모요소의 맨 마지막 요소로 추가가 됨
        elementNode.appendChild(textNode);
        // 4.area1 에 연결한 노드 연결하기
        area1.appendChild(elementNode);
        
        area1.innerHTML += '<h3>innerHTML로도 가능하다!!</h3>'
    });

    // 텍스트 노드가 없는 요소노드생성
    // 요소의 속성을 설정하는 방법
    btn2.addEventListener('click',function(){
        // img 요소 노드 생성
        let imgNode = document.createElement('img')
        
        // 속성 설정 하는 방법
        imgNode.src = 'images/morning.jpg'
        imgNode.setAttribute('width','500px')
        imgNode.setAttribute('height','250px')

        // 연결(자식요소로 추가)
        area2.appendChild(imgNode);

        // 기존 방식
        area2.innerHTML+="<img src='images/morning.jpg' width=500px height=250px>"
        
    });

    btn3.addEventListener('click',function(e){
       
        // 노드 삭제하기
        area3.remove();

        // 이벤트가 발생한 요소
        let target =e.target;
        console.log(target)

        // 상위요소를 반환
        console.log(target.parentNode)

        // 상위요소의 자식노드를 삭제
        let delNode = document.getElementById('area1')
        target.parentNode.removeChild(delNode);


    });

    btn4.addEventListener('click',()=>{
        // p 요소 생성
        // text 노드 생성
        let pNode = document.createElement('p')
        let textNode = document.createTextNode('신규 노드 추가!!')

        // 연결
        pNode.appendChild(textNode);

        // 부모요소 선택
        let body = document.querySelector('body');

        // 노드 선택(삽입하고 싶은 위치의 요소를 선택)
        let h1 = document.querySelector('h1')

        // insertBefore(추가할요소, 추가할 위치의 요소)
        body.insertBefore(pNode, h1);
        body.appendChild(pNode);
    })
}