//Creating animations

//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle
var ghost, asterisk;

//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay
function preload() {

    //create an animation from a sequence of numbered images
    //pass the first and the last file name and it will try to find the ones in between
    ghost = loadAnimation('assets/a_guitarra.png', 'assets/a_guitarra.png', 'assets/a_guitarra.png', 'assets/a_guitarra.png', 'assets/a_guitarra.png', 'assets/a_guitarra.png', 'assets/a_guitarra.png', 'assets/v_guitarra.png', 'assets/v_guitarra.png', 'assets/v_guitarra.png', 'assets/v_guitarra.png', 'assets/v_guitarra.png', 'assets/v_guitarra.png');

    //create an animation listing all the images files
    asterisk = loadAnimation('assets/asterisk.png', 'assets/triangle.png', 'assets/square.png', 'assets/cloud.png', 'assets/star.png', 'assets/mess.png', 'assets/monster.png');
}

function setup() {
    //frameRate(30);
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    //background(190);
    clear();
    var bruitX = 0.00001;
    var bruit_x = noise(millis() * bruitX) * width;

    var bruitY = 0.00008;
    var bruit_y = noise(millis() * bruitY) * height;

    var bruitX1 = 0.00001;
    var bruit_x1 = noise(millis() * bruitX1) * width;

    var bruitY1 = 0.00007;
    var bruit_y1 = noise(millis() * bruitY1) * height;
    //scale(3);
    //specify the animation instance and its x,y position
    //animation() will update the animation frame as well
    animation(ghost, bruit_x, bruit_y);
    //animation(asterisk, bruit_x1, bruit_y1);
}