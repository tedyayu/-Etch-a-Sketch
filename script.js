const container=document.querySelector('.container');

function displayGrid(){
    let theInput=document.querySelector('.theinput')
    let size=Number(theInput.value);
    if(size>100){
        let tehAnswer=document.querySelector('.answer');
        let newAnswer=document.createElement('p');
        newAnswer.textContent='can not create the grid please insert a size below 100';
        tehAnswer.appendChild(newAnswer);
    }
    else{
        for (let i=0;i<size*size;i++){
            let div=document.createElement('div');
            div.classList.add('grid-item');
            div.addEventListener('mouseover',()=>{
                div.style.backgroundColor="blue";
            })
            container.appendChild(div);
        
            
        }
    }
    
  
    theInput.value='';
}


