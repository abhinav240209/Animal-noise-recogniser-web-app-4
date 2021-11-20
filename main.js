//https://teachablemachine.withgoogle.com/models/HFk3lVzIC/model.json



function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true,

    });
   Mysoundclassifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/HFk3lVzIC/model.json", modelReady);
  
}

function modelReady() {
    Mysoundclassifier.classify(gotResult);
}

function gotResult(error,results){
      if(error) {
          console.error(error);
      }

      else {
          console.log(results);
          r=Math.floor(Math.random()*255)+1;
          g=Math.floor(Math.random()*255)+1;
          b=Math.floor(Math.random()*255)+1;      
          console.log(r +", "+ g+ ", " + b); 
          document.getElementById("sound").innerHTML=output_name;   
          document.getElementById("sound").style.color="rgb("+r+", "+g+", "+b+")";
          document.getElementById("accuracy").innerHTML=output_confidence;
          document.getElementById("accuracy").style.color="rgb("+r+", "+g+", "+b+")";

          if(output_name=="roaring"){
              document.getElementById("image").src="tiger-cartoon-drawing-clip-art-png-favpng-YFP5390q2wUd67J0ciy4cjD5v";
              
              
          }

        else if(output_name=="meowing"){
            document.getElementById("image").src="images";
            
        }

        else if(output_name=="barking") {
            document.getElementById("image").src="1d7abbca56d491a9425586ca9eaf4918";
              
        }

        else if(output_name=="mooing"){
            document.getElementById("image").src="png-transparent-cattle-illustration-graphy-illustration-cartoon-cows-white-and-black-cow-illustration-cartoon-character-photography-cartoon-arms";
              
        }
       
      }
}
