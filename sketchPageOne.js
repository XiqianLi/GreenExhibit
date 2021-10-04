var loginButton;
var imgLogo;

function preload() {
  imgLogo = loadImage('img/logo.png')
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(255);

    image(imgLogo,windowWidth * 1/2 - 200,windowHeight * 1/7,400,400)

    //input username
  inputun = createInput('Username');
  inputun.size(600,100);
  inputun.style('font-size','48px','stroke','red','text-color','grey');
  inputun.position(windowWidth * 1/2 - inputun.width / 2, windowHeight * 1/4 - inputun.height / 2 + 300);


    //input password
    inputpass = createInput('Password');
    inputpass.size(600,100);
    inputpass.style('font-size','48px','stroke','red','text-color','grey');

    inputpass.position(windowWidth * 1/2 - inputpass.width / 2, windowHeight * 1/2 - inputpass.height / 2);

      //login button

  


  loginButton = createButton('Sign In');
  loginButton.size(300,100);
  loginButton.style('font-size','48px','stroke','red','text-color','grey');
  loginButton.position(windowWidth * 1/2 - loginButton.width / 2, windowHeight * 3/4 - loginButton.height / 2 - 300);
  loginButton.mousePressed(openLink);
}


function draw() {
}

function openLink() {
  window.open("indexPageTwo.html","_self")
}
