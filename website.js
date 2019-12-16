function ready() {
    submit.onclick = function(){
    var arabic = document.getElementById("arabic").value;
    console.log(arabic);
    var roman = document.getElementById("roman");
    console.log(A2R(arabic));
    console.log(R2A(roman));
    // makes sure the roman text box is empty
    if( document.getElementById("arabic").value.length == 0) {
        document.getElementById("arabic").value = R2A(roman.value);
    }if (document.getElementById("roman").value.length == 0) {
        document.getElementById("roman").value = A2R(arabic);
    }
    clear.onclick = function(){
        document.getElementById("roman").value = "";
        document.getElementById("arabic").value = "";
    }
    }
    function A2R(arabic) {
        // arabic to roman
        if (arabic <0){
            return "No negitives"
        } 
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

    function R2A(x){
        var char;
        var val;
        // the i value higher
        var val1;
        var char1;
        var arabicval = 0;
        // Adds 1 for each value in x
        for(i = 0;i < x.length; i++){
            char = x.charAt(i);
            char1 = x.charAt(i+1);
            // gets the character at i
            val = getValue(char);
            val1 = getValue(char1);
            console.log(val);
            if (val < 0){
                return "No Negitives";
            }
            if (val1>val){
                arabicval += (val1) - (val);
                arabicval -= val1
            } else{
                arabicval += val;
            }
            
        }
        console.log(arabicval);
        return (arabicval);
    }
    
    function getValue(x){
        var result = 0;
        // selects one of many of the code blocks for whats true for X
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