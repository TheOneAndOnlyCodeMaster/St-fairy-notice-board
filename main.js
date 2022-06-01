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
    background('#F12234');
}
function modelLoaded(){
    console.log("model is loaded");
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
}
}