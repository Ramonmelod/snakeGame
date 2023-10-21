const cobra = document.querySelector('.cobra');

let posicaoV =18;
let posicaoH =18;
let idIntervalH;
let idIntervalV;

function contarSegundosVCima(){
    
    posicaoV ++;
    cobra.style.bottom = posicaoV*3 +'px';
    
}


function contarSegundosHDireita(){
    
    posicaoH ++;
    cobra.style.left = posicaoH*3 +'px';
    
}



setInterval(document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {

        clearInterval(idIntervalH);
        cobra.style.transform = 'rotate(0deg)';                //rotaciona a cobrinha para zero graus
        
        idIntervalV = setInterval(contarSegundosVCima, 100);
            
            
        
       
    } else if (event.key === 'ArrowRight') {

        clearInterval(idIntervalV);
        cobra.style.transform = 'rotate(90deg)';               //rotaciona a cobrinha para noventa graus
        idIntervalH = setInterval(contarSegundosHDireita,100);}
        
        
    }
    
),1);



