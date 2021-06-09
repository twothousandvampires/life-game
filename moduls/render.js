export class Render{

    static canvas  = document.getElementById('canvas')

    static ctx = Render.canvas.getContext('2d')

    static draw(array){
        Render.ctx.clearRect(0,0,1000,1000)
        Render.ctx.fillStyle = 'black'
        Render.ctx.fillRect(0, 0 ,1000 ,1000)
        Render.ctx.fillStyle = 'white'
        array.forEach( elem => {
            if(elem[2] == 1){
                Render.ctx.fillRect(elem[0] * 10, elem[1] *10 , 10,10)
            }
        })
    }
}