const cobra = document.querySelector('.cobra');


const movimentoVertical = ()=>{cobra.classList.add('movimentoCobraVertical');}

const movimentoHorizontal = ()=>{ cobra.classList.add('movimentoCobraHorizontal');}


document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {

        cobra.style.transform = 'rotate(0deg)';                //rotaciona a cobrinha para zero graus
        cobra.classList.remove('movimentoCobraHorizontal');
        movimentoVertical();
       
    } else if (event.key === 'ArrowRight') {

        cobra.style.transform = 'rotate(90deg)';               //rotaciona a cobrinha para noventa graus
        cobra.classList.remove('movimentoCobraVertical');
        movimentoHorizontal();
        
    }
    
});