import React from "react";

class Stage {
    canvas:HTMLCanvasElement;
    ctx:CanvasRenderingContext2D|null;
    width:number;
    height:number;
    text:string
    constructor(){
        this.width = 600
        this.height = 400
        this.canvas = document.createElement("canvas")
        this.ctx = this.canvas.getContext("2d")
        this.text = ""
    }


    render(container:any){
        container.width = this.width
        container.height = this.height
        container.style.border = "1px solid #000"
        const ctx:any = container.getContext("2d")

        ctx.fillStyle = "#00F";
        ctx.strokeStyle = "#F00";
        ctx.font = "italic 30pt Arial";
        ctx.fillText(this.text, 20, 50);

    }

    textRender(cureText:string){
        this.text = cureText
    }


}
export default new Stage();
