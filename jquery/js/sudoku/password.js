var guessed  = "";
function guessPassword(){
    if (guessed.length===password.length){
        return guessed === password;
    }
for (var i =0; i  < charest.length; i ++){
    var copy =`${guessed}`;
    guessed += charest.chatAt(i);
    if (guessPassword()){
        return true;
    }else {
        guessed = copy;
    }
}
    }
