import { Tool } from "./tool"

export class Canvas {
    constructor(private tool: Tool) {}

    mouseUp() {
        this.tool.mouseUp()
    }

    mouseDown() {
        this.tool.mouseDown()
    }
}