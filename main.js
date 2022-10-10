
window.onload = () => {
   let questions  = document.querySelectorAll('.section-question') 
   for(let i = 0; i<questions.length;i++){
        questions[i].addEventListener('click', ()=>{
            if(questions[i].children[1].classList.contains('hide')){
                console.log(questions[i].children[0])
                questions[i].children[1].classList.remove('hide')
                questions[i].children[0].style.color = '#8a2be2'
                questions[i].children[0].lastElementChild.innerHTML = '<i class="fa-solid fa-minus"></i>'
            }else{
                questions[i].children[1].classList.add('hide')
                questions[i].children[0].style.color = '#000'
                questions[i].children[0].lastElementChild.innerHTML = '<i class="fa-solid fa-plus"></i>'

            }
        })
   }
    
}