window.onload = function(){

    // open,close는 window객체의 내장함수
    // 아이디로 참조 불가
    // 직접 변수에 담아줘야 합니다.

    // #open : 모달창 보여주기
    // #close : 모달창 닫기
    let open = document.getElementById('open');
    let modal = document.getElementById('modal-box')
    let close = document.getElementById('close');

    open.addEventListener('click',function(e){
        // 모달창 열기 class 속성 active 추가
        //modal.classList.toggle('active');
       modal.classList.add('active');
    })

    close.addEventListener('click',function(e){
        // 모달창 닫기 class 속성 active 제거
        // modal.classList.toggle('active');
        modal.classList.remove('active');
                


    })
}

// 외부에서 호출 가능 (window밖)
function test(){
    console.log('외부함수입니다 ')
}