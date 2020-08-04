/* Interfases */

interface RectangleOptions {
    width: number;
    length: number;
    height?: number; // ? optional arg
}

function drawRectangle(options: RectangleOptions) {
    let width = options.width;
    let length = options.length;

    // Draw Rectangle
}

drawRectangle({
    width: 100,
    length: 50,
    height: 30
})