const p1Button =document.querySelector('#p1Button');
const p2Button =document.querySelector('#p2Button');
const resetButton=document.querySelector('#reset');
const upto=document.querySelector('#upto');


p1Display =document.querySelector('#p1Display');
p2Display=document.querySelector('#p2Display');


let p1Score=0;
let p2Score=0;
let winningscore=3;
let isGameOver=false;
let resetScore=0;

upto.addEventListener('change',function()
{
    winningscore = parseInt(this.value);
    resetfun();
})


p1Button.addEventListener('click',function(){
    if(!isGameOver){
        p1Score+=1;
        if(p1Score===winningscore){
            isGameOver=true;
            p1Display.classList.add('winner');
            p2Display.classList.add('looser');
            p1Button.disabled=true;
            p2Button.disabled=true;
        }
        p1Display.textContent=p1Score;
    }
})

p2Button.addEventListener('click',function(){
    if(!isGameOver)
    {
        p2Score+=1;
        if(p2Score===winningscore)
        {
            isGameOver=true;
            p2Display.classList.add('winner');
            p1Display.classList.add('looser');
            p1Button.disabled=true;
            p2Button.disabled=true;
        }
        p2Display.textContent=p2Score;
    }
})

resetButton.addEventListener('click',resetfun)

function resetfun()
{
    isGameOver=false;
    p1Score=0;
    p2Score=0;
    p1Display.textContent=p1Score;
    p2Display.textContent=p2Score;
    p1Display.classList.remove('winner','looser');
    p2Display.classList.remove('winner','looser');
    p1Button.disabled=false;
    p2Button.disabled=false;
}

