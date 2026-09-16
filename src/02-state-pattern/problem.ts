enum ToolType {
    SELECTION,
    BRUSH,
    ERASER
}

class Canvas {
    constructor(private tool: ToolType) {}

    private mouseUp() {
        if(this.tool === ToolType.SELECTION) {
            console.log('selection icon')
        } else if(this.tool === ToolType.BRUSH) {
            console.log('brush icon')
        } else if (this.tool === ToolType.ERASER) {
            console.log('eraser icon')
        }
    }
 
    private mouseDown() {
        if(this.tool === ToolType.SELECTION) {
            console.log('draw dashed rectangle')
        } else if(this.tool === ToolType.BRUSH) {
            console.log('draw a line')
        } else if (this.tool === ToolType.ERASER) {
            console.log('erase somthing')
        }
    }
}


// suppose tomorrow we need to support keyup and keydown or need to support more tools this code will grow
// which is hard to maintain.