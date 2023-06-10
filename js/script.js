//show-hide
function hide(){
    document.getElementById(1).style.display="none";
}

function show(){
    document.getElementById(1).style.display="block";
}

// Paragraph changed 
function changed() {
    document.getElementById("2").innerHTML="Md Meyad Hossen";
  }

// number
  function number() {
    document.write(55 + 46)
  }

  function number2() {
    window.alert(55 + 66);
  }

//   variable
let number3, number4;

number3 = 20;
number4 = 7;

number3 += number4;

function add(){
    document.getElementById('3').innerHTML = number3
}

// Statements
let x, y, z;  
x = 5;        
y = 6;        
z = x + y;

function value(){
    document.getElementById('4').innerHTML = z;
  }

  // length

  let Text = "djdtyxokxuiyhdtkumhibgckjhhgfityjtupdsruyghkeydytitfiktyshytokgrtiyfikrt6"
  function length(){
    document.getElementById('5').innerHTML = Text.length
}
