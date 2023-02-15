let chillNode = document.querySelector(".btn-cta-big").childNodes
for(let i=0;i<chillNode.length;i++){
    chillNode[i].remove();
}
    

chillNode[0].style.backgroundColor ='red';
