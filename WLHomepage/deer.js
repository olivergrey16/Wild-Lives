
var state = 0;
function Calm() {
  console.log("in calm")
  var hyper = "link";
  if (state == 0){
    document.getElementById("questionHeader").innerHTML = "The baby hasn't been abandonned, it is just obeying its mother. Mother deer often leave their fawns hidden in the grass while they search for food and usually return within a few hours. Be sure that you don't approach the fawn though, because your smell might make the mother wary of her baby.";
    var x = document.getElementById("Calm");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
      console.log("asdf");
      console.log(x);
        x.style.display = "none";
        console.log(x);
        var x = document.getElementById("hurt");
        if (x.style.display == "none") {
            x.style.display = "block";
        } else {
          console.log("asdf");
          console.log(x);
            x.style.display = "none";
            console.log(x);
          }
        }
      }
}



function Hurt() {
    document.getElementById("questionHeader").innerHTML = "Have your parents call a wildlife rehabilitator! The deer may be injured, or abandoned, and you could hurt it more while trying to help.";
      var x = document.getElementById("Calm");
      if (x.style.display == "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
      var x = document.getElementById("hurt");
      if (x.style.display == "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
  }
