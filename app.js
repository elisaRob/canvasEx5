window.onload=function(){
    const canvas=document.querySelector("canvas");
    if(canvas && canvas.getContext){
        let ctx=canvas.getContext("2d");
        if(ctx){
            ctx.fillStyle="blue";
            ctx.strokeStyle="yellow";
            ctx.lineWidth=10;

            //path
            ctx.beginPath();
            ctx.moveTo(50,100);
            ctx.lineTo(100,50);
            ctx.lineTo(150,100);
            ctx.lineTo(100,150)
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(200,100);
            ctx.lineTo(250,50);
            ctx.lineTo(300,100);
            ctx.lineTo(250,150);
            ctx.closePath();
            ctx.stroke();

            ctx.beginPath()
            ctx.moveTo(350,100);
            ctx.lineTo(400,50);
            ctx.lineTo(450,100);
            ctx.lineTo(400,150);
            ctx.fill();
            ctx.closePath();
            ctx.stroke();

        }else{
            alert("ton navigateur ne supporte pas les canvas")
        }
    }
}