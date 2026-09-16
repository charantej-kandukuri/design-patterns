import { Tool } from "../tool";

export class BrushTool implements Tool {
  mouseDown(): void {
    console.log("Start drawing");
  }

  mouseUp(): void {
    console.log("Show brush icon");
  }
}