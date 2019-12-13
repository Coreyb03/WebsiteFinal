function ready() {
    submit.onclick = function(){
    var arabic = document.getElementById("arabic").value;
    console.log(arabic);
    var roman = document.getElementById("roman");
    console.log(A2R(roman));
    // makes sure the roman text box is empty
    if( document.getElementById("arabic").value.length == 0) {
        document.getElementById("arabic").value = R2A(roman);
    }else{
        document.getElementById("roman").value = A2R(arabic);
    }
    clear.onclick = function(){
        document.getElementById("roman").value = "";
        document.getElementById("arabic").value = "";
    }
    }
    function A2R(arabic) {
        // arabic to roman
        var roman = "";
        while (arabic - 1000 >= 0){
            roman += "M";
            arabic -= 1000;
        }
        while (arabic - 900 >= 0){
            roman += "CM";
            arabic -= 900;
        }
        while (arabic - 500 >= 0){
            roman += "D";
            arabic -= 500;
        }
        while (arabic - 400 >= 0){
            roman += "CD";
            arabic -= 400;
        }
        while (arabic - 100 >= 0){
            roman += "C";
            arabic -= 100;
        }
        while (arabic - 90 >= 0){
            roman += "XC";
            arabic -= 90;
        }
        while (arabic - 50 >= 0){
            roman += "L";
            arabic -= 50;
        }
        while (arabic - 40 >= 0){
            roman += "XL";
            arabic -= 40;
        }
        while (arabic - 10 >= 0){
            roman += "X";
            arabic -= 10;
        }
        while (arabic - 9 >= 0){
            roman += "IX";
            arabic -= 9;
        }
        while (arabic - 5 >= 0){
            roman += "V";
            arabic -= 5;
        }
        while (arabic - 4 >= 0){
            roman += "IV";
            arabic -= 4;
        }
        while (arabic - 1 >= 0){
            roman += "I";
            arabic -= 1;
        }
        return (roman);
    }
// roman numeral to arabic

    function R2A(roman){
        var char;
        var val;
        // the i value higher
        var val1;
        var char1;
        var arabic = "";
        for(i = 0;i < roman.length; i++){
            char = roman.charAt(i);
            char1 = roman.charAt(i+1);
            // gets the character at i
            val = getValue(char);
            val1 = getValue(char1);
            console.log(val);
            if (val < 0){
                return "No Negitives";
            }
            if (val1<val){
                arabic += (val - val1);
            } else{
                arabic += val;
            }
            
        }
        console.log(arabic);
        return (arabic);
    }
    
    function getValue(x){
        var result = 0;
        // selects one of many of the code blocks for whats true
        switch (x){
            case 'M':
                result = 1000;
            break;
            case 'D':
                result = 500;
            break;
            case 'C':
                result = 100;
            break;
            case 'L':
                result = 50;
            break;
            case 'X':
                result = 10;
            break;
            case 'V':
                result = 5;
            break;
            case 'I':
                result = 1;
            break;
            }
            return result;
        

    }
}
document.addEventListener("DOMContentLoaded", ready);