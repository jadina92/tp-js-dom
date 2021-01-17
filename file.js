//exo 1 
function changer_style(){
    var pstyle = document.getElementById("parag1");
    pstyle.style.color= 'white';
    pstyle.style.background = 'black';
    pstyle.style.border = 'dotted  1px';
    pstyle.style.padding = ' 5 px';
    

}


// exo 2
function changer_style(){
    var pstyle = document.getElementById("parag1");
    pstyle.className = 'active';
}

// exo 3
function getAttributes(){
var lien  = document.getElementById("w3r");
var href = lien.getAttribute('href');
document.writeln('<p>le valeur de attribute href est : ' + href +'</p>');
var hreflang = lien.getAttribute('hreflang');
document.writeln('<p>le valeur de attribute hreflang est : ' + hreflang +'</p>');
var rel = lien.getAttribute('rel');
document.writeln('<p>le valeur de attribute rel est : ' + rel +'</p>');
var target = lien.getAttribute('target');
document.writeln('<p>le valeur de attribute target est : ' + target +'</p>');
var type = lien.getAttribute('type');
document.writeln('<p>le valeur de attribute type est : ' +type +'</p>');
}


//exo 3
function getFormvalue(){
   
        var name  = document.getElementById('form1').elements[0].value; 
        var lastname  = document.getElementById('form1').elements[1].value; 
     document.writeln('<p> my name is :' + name +'</p>');
     document.writeln('<p> my last name  is :' + lastname +'</p>');
        }
// EXO 4
        function loadfun(){
            alert ("thie page has been loaded");
        }

    function attention(){
        alert("don't touch me");
    }
    function changeMe(){
        document.body.style.backgroundColor = "yellow";
    }
    
    function changeMeagain(){
        alert('you have click this button');
    }

    function retourN(){
        document.body.style.backgroundColor = "white";
    }

    function ichange(){
        var special = document.getElementById('special');
        special.style.width ="70px";
        special.style.backgroundColor ='red';
    }

     function backAgain(){
         var special =  document.getElementById('special');
         special.remove();
     }

     function  mouseHere()  {
        document.getElementById("myimg").src= "image3.jpg";
     }
 
     function mouseOut() {
        document.getElementById("myimg").setAttribute('src','image2.jpg');;
     }  
 