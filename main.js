function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  Video = createCapture(VIDEO);
  Video.hide();
  classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}
function modelLoaded(){
  console.log("Model Loaded!");
}
function draw(){
  image(Video, 0, 0, 300, 300);
  classifier.classify(Video, gotResult);
}

function gotResult(error, results){
  if(error){
    console.log(error);
  }
  else{
    console.log(results);
    document.getElementById("Obj_Name").innerHTML = results[0].label;
    document.getElementById("Accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}