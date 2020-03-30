

function Palindrome() {
        var revStr = "";
        var str = prompt("Inserisci una parola")
        var i = str.length;
        for(var j=i; j>=0; j--) {
            revStr = revStr+str.charAt(j);
        }
        if(str == revStr) {
            document.getElementById('msg').innerHTML=(str+" è un palindromo");
        } else {
            document.getElementById('msg').innerHTML=(str+" non è un palindromo");
        }
    }
    Palindrome()



  
