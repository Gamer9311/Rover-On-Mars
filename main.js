canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_image = "mars.jpg";

roverimg = "rover.png"

roverx = 10;
rovery =10;

function add() 
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBacground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = roverimg;
}

function uploadBacground() 
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover()
{
    ctx.drawImage(rover_imgTag, roverx, rovery, rover_width, rover_height);
}

window.addEventListener("keydown", keydown);

function keydown(e)
{
    keyPressed = e.keyCode;

    console.log(keyPressed);

    if (keyPressed == "38")
    {
        up();
        console.log("up");
    }

    if (keyPressed == "40")
    {
        down();
        console.log("down");
    }

    if (keyPressed == "37")
    {
        left();
        console.log("left");
    }

    if (keyPressed == "39")
    {
        right();
        console.log("right");
    }
}

function up()
{
    if (rovery >= 0)
    {
        rovery = rovery - 5;
        console.log("When Up Arrow Is Pressed, The X and Y coordinates are = X = " + roverx + "; Y = " + rovery);
        uploadBacground();
        uploadRover();
    }
}

function down()
{
    if (rovery <= 500)
    {
        rovery = rovery + 5;
        console.log("When Down Arrow Is Pressed, The X and Y coordinates are = X = " + roverx + "; Y = " + rovery);
        uploadBacground();
        uploadRover();
    }
}

function left()
{
    if (roverx >= 0)
    {
        roverx = roverx - 5;
        console.log("When Left Arrow Is Pressed, The X and Y coordinates are = X = " + roverx + "; Y = " + rovery);
        uploadBacground();
        uploadRover();
    }
}

function right()
{
    if (roverx <= 700)
    {
        roverx = roverx + 5;
        console.log("When Right Arrow Is Pressed, The X and Y coordinates are = X = " + roverx + "; Y = " + rovery);
        uploadBacground();
        uploadRover();
    }
}
