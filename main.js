import { Render } from "./moduls/render.js";

class Game{

    constructor() {
        this.plan = []
        for(let i = 0; i < 200; i ++){
            for(let j = 0; j < 200; j ++){
                this.plan.push([j , i , 0])
            }
        }
        window.addEventListener('keydown', (e)=> {
            if(e.keyCode == 32){
                e.preventDefault()
                this.start()
            }
        })
        Render.canvas.addEventListener('mousemove', (e) => {
            if(e.which === 1){
                let x = Math.floor(e.pageX/10)
                let y = Math.floor(e.pageY/10)
                this.plan[x + (200 * y)][2] = 1
                Render.draw(this.plan)
            }
        })
        Render.canvas.addEventListener('click', (e) => {
                let x = Math.floor(e.pageX/10)
                let y = Math.floor(e.pageY/10)
                this.plan[x + (200 * y)][2] = this.plan[x + (200 * y)][2] === 1 ? 0 : 1
                Render.draw(this.plan)
        })

    }

    start(){
        requestAnimationFrame(() => this.gameFrame())
    }

    gameFrame(){
        let new_generation = []
        for(let i = 0; i < this.plan.length; i ++){
            new_generation.push(this.lookingAround(i))
        }
        Render.draw(this.plan)
        this.plan = new_generation
        requestAnimationFrame(() => this.gameFrame())
    }

    lookingAround(i){

        let count = 0
        if(this.isExist(i-200)){
            if(this.plan[i - 200][2] === 1){
                count++
            }
        }

        if(this.isExist(i - 200 + 1)){
            if(this.plan[i - 200 + 1][2] === 1){
                count++
            }
        }

        if(this.isExist(i + 1)){
            if(this.plan[i + 1][2] === 1){
                count++
            }
        }

        if(this.isExist(i + 200 + 1)){
            if(this.plan[i + 200 + 1][2] === 1){
                count++
            }
        }

        if(this.isExist(i + 200)){
            if(this.plan[i + 200][2] === 1){
                count++
            }
        }

        if(this.isExist(i + 200 - 1)){
            if(this.plan[i + 200 - 1][2] === 1){
                count++
            }
        }

        if(this.isExist(i - 1)){
            if(this.plan[i - 1][2] === 1){
                count++
            }
        }

        if(this.isExist(i - 200 - 1)){
            if(this.plan[i - 200 - 1][2] === 1){
                count++
            }
        }

        if( this.plan[i][2] === 0 && count === 3 ){
           return [this.plan[i][0],this.plan[i][1],1]
        }
        else if ( this.plan[i][2] === 1 && (count < 2 || count > 3)){
            return [this.plan[i][0],this.plan[i][1],0]
        }
        else {
            return [this.plan[i][0],this.plan[i][1],this.plan[i][2]]
        }
    }

    isExist(i){
        return this.plan[i]
    }
}

let game = new Game()

