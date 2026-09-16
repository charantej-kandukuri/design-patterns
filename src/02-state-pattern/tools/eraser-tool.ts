import { Tool } from "../tool";

export class EraserTool implements Tool {
  mouseDown(): void {
    console.log("Start erasing");
  }

  mouseUp(): void {
    console.log("Show eraser icon");
  }
}