console.log("TETRIS.JS LOADED ");

const screen= document.getElementById('screen');
const ctx = screen.getContext('2d');

const COLOR1 = '#00AA8D'
const COLOR2 = '#00BF9A'


const SCALE_F = 20

ctx.scale(SCALE_F,SCALE_F);
for(let i = 0; i < screen.width/SCALE_F;i++) {
    ctx.fillStyle = i % 2 === 0 ? COLOR1 : COLOR2;
    ctx.fillRect(i,0,1, screen.height / SCALE_F);
    console.log(i);
}


ctx.fillStyle = 'green'
ctx.fillRect(5,5,1,1);
