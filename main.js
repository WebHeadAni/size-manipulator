noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup(){
    canvas = createCanvas(550,550);
    canvas.position(560,160);
    video = createCapture(VIDEO);
    video.size(550,500);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPose );
}
function modelLoaded() {
    console.log("poseNet is initialized");
}
function draw() {
    background("#008080");
    fill('#091111');
    stroke('#280203');
    square(noseX,noseY,difference);
    document.getElementById("SquareSize").innerHTML = difference;
}
function gotPose(results){
if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log('noseX = ' + noseX + 'noseY = ' + noseY); 

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = Math.floor(leftWristX - rightWristX);
    console.log('difference = ' + difference);
}
}