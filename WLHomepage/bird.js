var state = 0;

function Nestling() {
  var hyper = "link";
  if (state == 0){
    document.getElementById("questionHeader").innerHTML = 'If you cant find its nest, make a nest! The baby birds nest is probably damaged, and it needs a new nest so its can stay safe as it grows bigger. To learn how to build a new nest go to this<a href="https://www.wikihow.com/Help-a-Baby-Bird-That-Has-Fallen-Out-of-a-Nest#steps_2">link</a> ';
    var x = document.getElementById("nestling");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
      console.log("asdf");
      console.log(x);
        x.display = "none";
        console.log(x);
    }
    var x = document.getElementById("fledgling");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.display = "none";
    }
  }
  else if (state == 1) {
    document.getElementById("questionHeader").innerHTML = "Leave it alone! The baby bird is just exploring its world. Its mom is still keeping a watchful eye on her baby.";
  }
  var x = document.getElementById("nestling");
  if (x.style.display == "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
  var x = document.getElementById("fledgling");
  if (x.style.display == "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }

}



function Fledgling() {
  if (state == 0) {
    document.getElementById("questionHeader").innerHTML = "Is the bird able to walk around on its own?";
    //console.log("fld");
    document.getElementById("fledgling").innerHTML = "No";
    document.getElementById("nestling").innerHTML = "Yes";
    state = 1;
  }
    else if (state == 1) {
      document.getElementById("questionHeader").innerHTML = "Have your parents call a wildlfe rehabilitator! The bird might be hurt and should be helped by a professional. You helping it might hurt the baby further.";
      var x = document.getElementById("nestling");
      if (x.style.display == "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
      var x = document.getElementById("fledgling");
      if (x.style.display == "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
  }


}
