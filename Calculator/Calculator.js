$(document).ready(function(){
    $('#one').click(function(){
    document.forms.display.value += 1; 
    });
    $('#two').click(function(){
    document.forms.display.value += 2; 
    });
    $('#three').click(function(){
    document.forms.display.value += 3; 
    });
    $('#four').click(function(){
    document.forms.display.value += 4; 
    });
    $('#five').click(function(){
    document.forms.display.value += 5; 
    });
    $('#six').click(function(){
    document.forms.display.value += 6; 
    });
    $('#seven').click(function(){
    document.forms.display.value += 7; 
    });
    $('#eight').click(function(){
    document.forms.display.value += 8; 
    });
    $('#nine').click(function(){
    document.forms.display.value += 9; 
    });
    $('#zero').click(function(){
    document.forms.display.value += 0; 
    });
    $('#dot').click(function(){
    document.forms.display.value += '.'; 
    });
    $('#add').click(function(){
        document.forms.display.value += '+'; 
    });
    $('#subs').click(function(){
        document.forms.display.value += '-'; 
    });
    $('#multi').click(function(){
        document.forms.display.value += '*'; 
    });
    $('#divide').click(function(){
        document.forms.display.value += '/'; 
    });
    $('#Clear').click(function(){
        document.forms.display.value =""; 
    });
    $('#Equal').click(function(){
        // Récupérer l'expression de l'utilisateur
        var expression = document.forms.display.value;
        // Vérifier si l'expression contient une division par zéro
        if (expression.includes('/0')) {
            alert("Division par zéro est impossible");
            return;
        }else{
            document.forms.display.value =
            eval(document.forms.display.value);
        }
    });
});
document.addEventListener("keydown", event =>{
    if(event.keyCode === 49){
        document.forms.display.value += 1;

    }
});
document.addEventListener("keydown", event =>{
    if (event.keyCode === 50){
        document.forms.display.value += 2;
    }
}); 
document.addEventListener("keydown", event =>{
    if (event.keyCode === 51){
        document.forms.display.value += 3;
    }
}); 
document.addEventListener("keydown", event =>{
    if (event.keyCode === 52){
        document.forms.display.value += 4;
    }
}); 
document.addEventListener("keydown", event =>{
    if (event.keyCode === 53){
        document.forms.display.value += 5;
    }
}); 
document.addEventListener("keydown", event =>{
    if (event.keyCode === 54){
        document.forms.display.value += 6;
    }
}); 
document.addEventListener("keydown", event =>{
    if (event.keyCode === 55){
        document.forms.display.value += 7;
    }
}); 
document.addEventListener("keydown", event =>{
    if (event.keyCode === 56){
        document.forms.display.value += 8;
    }
}); 
document.addEventListener("keydown", event =>{
    if (event.keyCode === 57){
        document.forms.display.value += 9;
    }
}); 
document.addEventListener("keydown", event =>{
    if (event.keyCode === 48){
        document.forms.display.value += 0;
    }
}); 
document.addEventListener("keydown", event =>{
    if (event.keyCode === 190){
        document.forms.display.value += ".";
    }
}); 
document.addEventListener("keydown", event =>{
    if (event.keyCode === 107){
        document.forms.display.value += "+";
    }
});
document.addEventListener("keydown", event =>{
    if (event.keyCode === 109){
        document.forms.display.value += "-";
    }
});
document.addEventListener("keydown", event =>{
    if (event.keyCode === 106){
        document.forms.display.value += "*";
    }
}); 
document.addEventListener("keydown", event =>{
    if (event.keyCode === 111){
        document.forms.display.value += "/";
    }
}); 
document.addEventListener("keydown", event =>{
    if (event.keyCode === 8){
        document.forms.display.value = "";
    }
}); 
document.addEventListener("keydown", event =>{
    if (event.keyCode === 13){
        if (display.value == "") {
            alert("Please enter any numbers to calculate");
          }else{
              document.forms.display.value =
              eval(document.forms.display.value);
          }
    }
}); 