import { Canvas } from "./canvas.class";
import { BrushTool } from "./tools/brush-tool";
import { SelectionTool } from "./tools/selection-tool";

const canvas   = new Canvas(new BrushTool)
canvas.mouseUp();
canvas.mouseDown();