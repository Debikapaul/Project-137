status="";

function setup(){
    canvas=createCanvas(480,280);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(480,280);
    video.hide();
}

function draw(){
    image(video,0,0,480,280);
}

function start(){
    objectDectected=ml5.objectDectector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML= " Status = Detecting objects ";

    if(objects[i].label == object_name){
    document.getElementById("object_status").innerHTML = object_name + "Found" ;
    }
}

function modelLoaded(){
    console.log("Model Loaded");
    status=true;
}

function gotResult(error,results){

    if(error){
        console.error(error);
    }

    console.log(results);
    objects_name=results;
}