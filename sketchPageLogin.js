var loginButton;
var imgLogo;
var usernameInput;
var col;

function preload() {
  imgLogo = loadImage('img/logo.png')
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(255,245,235);

    image(imgLogo,windowWidth * 1/2 - 200,windowHeight * 1/7,400,400)


  inputun = createInput('xiqianli@gmail.com','text');
  inputun.size(600,100);
  inputun.style('font-size','48px','text-color','grey');
  inputun.position(windowWidth * 1/2 - inputun.width / 2, 850);
  textSize(48);
  text("Enter username:",windowWidth * 1/2 - inputun.width / 2, 820);


    //input password
    inputpass = createInput('','password');
    inputpass.size(600,100);
    inputpass.style('font-size','48px');
    inputpass.position(windowWidth * 1/2 - inputpass.width / 2, 1100);
    textSize(48);
    text("Enter password:",windowWidth * 1/2 - inputpass.width / 2, 1070);

      //login button

  

    let col = color(131,197,190); 
  loginButton = createButton('Sign In');
  loginButton.size(600,100);
  loginButton.style('font-size','48px',);
  loginButton.style('background-color',col);
  loginButton.position(windowWidth * 1/2 - loginButton.width / 2, 1300);
  loginButton.mousePressed(openLink);
}


function draw() {
}

function openLink() {
  window.open("indexPageMain.html","_self")
}
