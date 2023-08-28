var results=[37,10,30,20,37,18,36,10,30,20];
var userinput=new Array();

function takeinput(){
    var radio=document.querySelectorAll('input[type="radio"]:checked');
    radio.forEach(function(radio){
        userinput.push(radio.value);
    })
    console.log(userinput);
}

 function calculateresult(){
    var i;
    var score=0;
    var length=results.length;
    for(i=0;i<length;i++){
        if(results[i]==userinput[i]){
            score+=1;
        }
    }
    if(score>5 ){
        document.getElementById('result').innerHTML="Congratulations! You have passed the test. <br> Your score is "+ score;
    }
    else{
        document.getElementById('result').innerHTML="Alas! You have failed the test. <br> Your score is " + score;
    }
 }

 function display(){
    takeinput();
    calculateresult();
 }