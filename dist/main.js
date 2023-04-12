"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_1 = require("canvas");
const fs = require("fs");
const data = require("./data.json");
//import input image
const input = "input.png";
// Load the input image
(0, canvas_1.loadImage)(`./assets/imgs/${input}`).then((image) => {
    try {
        const textX = image.width / 2;
        const textY = image.height / 2;
        data.forEach((info) => {
            const canvas = (0, canvas_1.createCanvas)(image.width, image.height);
            // Create a new canvas element
            const ctx = canvas.getContext("2d");
            // Draw the image onto the canvas
            ctx.drawImage(image, 0, 0, image.width, image.height);
            // Set the font and text color
            ctx.font = "200px Georgia";
            ctx.fillStyle = "black";
            // Set the text alignment to be in the center of the image
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            // Write the text onto the canvas at a specific position
            ctx.fillText(`${info.name}`, textX, textY);
            // Convert the canvas to a PNG buffer
            const buffer = canvas.toBuffer("image/png");
            // Save the buffer to the output file path
            fs.writeFileSync(`./assets/imgs/output/${info.name}-${info.role}.png`, buffer);
        });
        console.log("Done! Check the output folder.");
    }
    catch (err) {
        console.log(err.message);
    }
});
