window.onload=()=>{
   
    // 
    // 만약 현재 시간이 12시 이전이면
    // images/morning.jpg 
    // 아니면
    // images/afternoon.jpg
    //                         
    
    let date = new Date();
    let hour = date.getHours();
    
    let container = document.querySelector('#container');
    
    let image = document.createElement('img')
    let imgSrc = (hour<12) ? 'images/morning.jpg' : 'images/afternoon.jpg '
    image.src = imgSrc;

    container.appendChild(image)
    


}