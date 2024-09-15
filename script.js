const container=document.querySelector('.container');

function displayGrid(){
    let theInput=document.querySelector('.theinput')
    let size=Number(theInput.value);
    
    for (let i=0;i<size;i++){
        let div=document.createElement('div');
        div.classList.add('grid-item');
        div.addEventListener('mouseover',()=>{
            div.style.backgroundColor="blue";
        })
        container.appendChild(div);
    
        
    }
    theInput.value='';
}


