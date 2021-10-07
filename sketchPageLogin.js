var loginButton;
var imgLogo;
var usernameInput;
var col;

function preload() {
  imgLogo = loadImage('img/logo.png')
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(254,250,224);

    image(imgLogo,windowWidth * 1/2 - 200,windowHeight * 1/7,400,400)

    //input username
    // usernameInput = createInput("Your username","text");
    // usernameInput.size(600,100);
    // usernameInput.position(windowWidth * 1/2 - usernameInput.width / 2, windowHeight * 1/4 - usernameInput.height / 2 + 300);
    // text("Enter username:",windowWidth * 1/2 - usernameInput.width / 2, windowHeight * 1/4 - usernameInput.height / 2 + 200);



  inputun = createInput('xiqianli@gmail.com','text');
  inputun.size(600,100);
  inputun.style('font-size','48px','text-color','grey');
  inputun.position(windowWidth * 1/2 - inputun.width / 2, windowHeight * 1/4 - inputun.height / 2 + 350);
  textSize(48);
  text("Enter username:",windowWidth * 1/2 - inputun.width / 2, windowHeight * 1/4 - inputun.height / 2 + 320);


    //input password
    inputpass = createInput('','password');
    inputpass.size(600,100);
    inputpass.style('font-size','48px');
    inputpass.position(windowWidth * 1/2 - inputpass.width / 2, windowHeight * 1/2 - inputpass.height / 2+50);
    textSize(48);
    text("Enter password:",windowWidth * 1/2 - inputpass.width / 2, windowHeight * 1/2 - inputpass.height / 2+20);

      //login button

  

    let col = color(131,197,190); 
  loginButton = createButton('Sign In');
  loginButton.size(300,100);
  loginButton.style('font-size','48px',);
  loginButton.style('background-color',col);
  loginButton.position(windowWidth * 1/2 - loginButton.width / 2, windowHeight * 3/4 - loginButton.height / 2 - 300);
  loginButton.mousePressed(openLink);
}


function draw() {
}

function openLink() {
  window.open("indexPageMain.html","_self")
}
