let allChildNode = document.querySelector("#SIvCob").childNodes;

for(let i=0;i<allChildNode.length;i++)
allChildNode[i].remove();

for(let i=0;i<allChildNode.length;i+=2)
    allChildNode[i].remove();