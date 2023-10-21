const cobra = document.querySelector('.cobra');

let posicaoV =18;
let posicaoH =18;
let idIntervalHDireita;
let idIntervalVCima;                     
let idIntervalHEsquerda;
let idIntervalVBaixo;
let controleSetaCima = true;
let controleSetaBaixo = true;
let controleSetaDireita = true;
let controleSetaEsquerda = true;

function contarSegundosVCima(){
    
    posicaoV ++;
    cobra.style.bottom = posicaoV*3 +'px';
    controleSetaCima = false;
}

function contarSegundosVBaixo(){
    posicaoV --;
    cobra.style.bottom = posicaoV*3 +'px';
    controleSetaBaixo = false;
}


function contarSegundosHDireita(){
    
    posicaoH ++;
    cobra.style.left = posicaoH*3 +'px';
    controleSetaDireita = false;
}
function contarSegundosHEsquerda(){
    
    posicaoH --;
    cobra.style.left = posicaoH*3 +'px';
    controleSetaEsquerda = false;
}

setInterval(document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp'&& controleSetaCima ==true && controleSetaBaixo ==true) {
        
        controleSetaDireita = true;
        controleSetaEsquerda = true;
        clearInterval(idIntervalVBaixo);
        clearInterval(idIntervalHDireita);
        clearInterval(idIntervalHEsquerda);
        cobra.style.transform = 'rotate(0deg)';                //rotaciona a cobrinha para zero graus
        
        idIntervalVCima = setInterval(contarSegundosVCima, 100);
            
    } else if (event.key === 'ArrowRight' && controleSetaDireita ==true && controleSetaEsquerda ==true) {
        
        controleSetaCima = true;
        controleSetaBaixo = true;
        clearInterval(idIntervalVCima);
        clearInterval(idIntervalVBaixo);
        clearInterval(idIntervalHEsquerda);
        cobra.style.transform = 'rotate(90deg)';               //rotaciona a cobrinha para noventa graus
        idIntervalHDireita = setInterval(contarSegundosHDireita,100);
        
        
    } else if (event.key === 'ArrowDown' && controleSetaBaixo ==true && controleSetaCima ==true) {
        
        controleSetaDireita = true;
        controleSetaEsquerda = true;
        clearInterval(idIntervalVCima);
        clearInterval(idIntervalHDireita);
        clearInterval(idIntervalHEsquerda);
        cobra.style.transform = 'rotate(0deg)';               //rotaciona a cobrinha para noventa graus
        idIntervalVBaixo = setInterval(contarSegundosVBaixo,100);
        
        
    } else if (event.key === 'ArrowLeft' && controleSetaEsquerda ==true && controleSetaDireita ==true) { 
        controleSetaCima = true;
        controleSetaBaixo = true;
        clearInterval(idIntervalVCima);
        clearInterval(idIntervalHDireita);
        clearInterval(idIntervalVBaixo);
        cobra.style.transform = 'rotate(90deg)';               //rotaciona a cobrinha para noventa graus
        idIntervalHEsquerda = setInterval(contarSegundosHEsquerda,100);
        
        
    }}
    
),100);





