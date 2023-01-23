img="";
objectDetector="";
objects=[];
status="";
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modeLoaded);
    document.getElementById("status").innerHTML="status: detecting objects";
}

function modeLoaded(){
    console.log("model loaded");
    status="true";
    objectDetector.detect(img,gotResult);
}

function preload(){
    img=loadImage('dog_cat.jpg');
}

function gotResult(error,results){
    if(error){
        console.log(error);
}

console.log(results);
objects=results;


}

function draw(){
    image(img,0,0,640,420); 
    if(status !=""){
        for (var i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="status: object detected";
            fill(255, 0, 0);
            percent=floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(255,0,0);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }

            
        }
    }

    





