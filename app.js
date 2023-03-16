
function scores(){
    let p1 = Math.floor(Math.random()*6+1);
     // changing the dice image
    var randomImg1 = "img/" + "dice" + p1 + ".png";
    var d1 = document.querySelectorAll("img")[0];
    d1.setAttribute("src",randomImg1);

   
    let p2 = Math.floor(Math.random()*6+1);
    // changing the dice image as per random generated number
    var randomImg2 = "img/" + "dice" + p1 + ".png";
    var d2 = document.querySelectorAll("img")[1];  
    d2.setAttribute("src", randomImg2);

    // declaring the result //
    if(p1>p2){
        document.getElementById("result").innerHTML = "Player 1 won!!";
    }
    else if(p2>p1){
        document.getElementById("result").innerHTML = "Player 2 won!!";
    }
    else{
        document.getElementById("result").innerHTML = "Its a tie!!";
    }
}