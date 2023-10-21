const cobra = document.querySelector('.cobra');

let posicaoV =18;
let posicaoH =18;
let idIntervalHDireita;
let idIntervalVCima;
let idIntervalHEsquerda;
let idIntervalVBaixo;

function contarSegundosVCima(){
    
    posicaoV ++;
    cobra.style.bottom = posicaoV*3 +'px';
    
}

function contarSegundosVBaixo(){
    posicaoV --;
    cobra.style.bottom = posicaoV*3 +'px';
    
}


function contarSegundosHDireita(){
    
    posicaoH ++;
    cobra.style.left = posicaoH*3 +'px';
    
}
function contarSegundosHEsquerda(){
    
    posicaoH --;
    cobra.style.left = posicaoH*3 +'px';
    
}

setInterval(document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {

        clearInterval(idIntervalVBaixo);
        clearInterval(idIntervalHDireita);
        clearInterval(idIntervalHEsquerda);
        cobra.style.transform = 'rotate(0deg)';                //rotaciona a cobrinha para zero graus
        
        idIntervalVCima = setInterval(contarSegundosVCima, 100);
            
    } else if (event.key === 'ArrowRight') {

        clearInterval(idIntervalVCima);
        clearInterval(idIntervalVBaixo);
        clearInterval(idIntervalHEsquerda);
        cobra.style.transform = 'rotate(90deg)';               //rotaciona a cobrinha para noventa graus
        idIntervalHDireita = setInterval(contarSegundosHDireita,100);
        
        
    } else if (event.key === 'ArrowDown') {

        clearInterval(idIntervalVCima);
        clearInterval(idIntervalHDireita);
        clearInterval(idIntervalHEsquerda);
        cobra.style.transform = 'rotate(0deg)';               //rotaciona a cobrinha para noventa graus
        idIntervalVBaixo = setInterval(contarSegundosVBaixo,100);
        
        
    } else if (event.key === 'ArrowLeft') {

        clearInterval(idIntervalVCima);
        clearInterval(idIntervalHDireita);
        clearInterval(idIntervalVBaixo);
        cobra.style.transform = 'rotate(90deg)';               //rotaciona a cobrinha para noventa graus
        idIntervalHEsquerda = setInterval(contarSegundosHEsquerda,100);
        
        
    }}
    
),100);



