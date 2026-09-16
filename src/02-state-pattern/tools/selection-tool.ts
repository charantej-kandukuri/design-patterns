import { Tool } from "../tool";

export class SelectionTool implements Tool {
    mouseUp(): void {
        console.log('Show selection icon.')
    }

    mouseDown(): void {
        console.log('Draw dashed rectangle.')
    }
}