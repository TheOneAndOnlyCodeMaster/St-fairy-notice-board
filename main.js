noseX=0;
noseY=0;
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
difference=0;
function preload(){

}
function setup(){
    video = createCapture(VIDEO);
    video.size(650, 490);
    video.position(200, 150)
    canvas = createCanvas(550, 500);
    canvas.position(900, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('darkred');
    textSize(difference);
    fill(107, 100, 10);
    text('Maanas Kudrimoti', noseX, noseY);

}
function modelLoaded(){
    console.log("model is loaded");
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX = "+noseX + " noseY = "+ noseY);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    rightWristY=results[0].pose.rightWrist.y;
    difference = floor(leftWristX - rightWristX);
    console.log("left wrist x = "+ leftWristX + " right wrist x = "+rightWristX);
}}