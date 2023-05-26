window.onload = ()=>{
        
        let javaNode = document.createElement('li');
        let javatextNode = document.createTextNode('Java')
        
         // li 요소 위로
        javaNode.appendChild(javatextNode);
        let ul = document.querySelector('ul')
        let li = document.querySelector('li');
        ul.insertBefore(javaNode,li)

        // li 요소 위로
        let oracleNode = document.createElement('li');
        let oracletextNode = document.createTextNode('Oracle')
        oracleNode.appendChild(oracletextNode);
        ul.insertBefore(oracleNode,li)
        
         // 맨 아래로
        let jspNode = document.createElement('li');
        let jsptextNode = document.createTextNode('JSP')
        jspNode.append(jsptextNode);
        ul.appendChild(jspNode,li)
        
        // 맨 아래로
        let springNode = document.createElement('li');
        let springtextNode = document.createTextNode('Spring')
        springNode.appendChild(springtextNode);
        ul.appendChild(springNode,li)
   

      btn1.addEventListener('click',()=>{

        
     let javaNode = document.createElement('p');
     // javaNode.innerHTML='Java'    => 기존 방식
     let javatextNode = document.createTextNode('Java')
     
     // 연결
     javaNode.appendChild(javatextNode);
     // body 요소 선택
     let body = document.querySelector('body')
     // p 요소 선택
     let p = document.querySelector('p');
     // body 안에 p요소 앞으로 연결
     body.insertBefore(javaNode,p)

     // p 요소 위로
     let oracleNode = document.createElement('p');
     let oracletextNode = document.createTextNode('Oracle')
     oracleNode.appendChild(oracletextNode);
     body.insertBefore(oracleNode,p)
     
      // 맨 아래로
     let jspNode = document.createElement('p');
     let jsptextNode = document.createTextNode('JSP')
     jspNode.append(jsptextNode);
     body.insertBefore(jspNode,p)
     
     // 맨 아래로
     let springNode = document.createElement('p');
     let springtextNode = document.createTextNode('Spring')
     springNode.appendChild(springtextNode);
     body.insertBefore(springNode,p)



     
  })

};