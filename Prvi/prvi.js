(function romanConverter(){
    "use strict"
    function $(selector) {
        return document.querySelector(selector);
    }
    
    function $$(selector) {
        return document.querySelectorAll(selector);
    }
    
    function CL(selector){
        return document.getElementsByClassName(selector);
    }
    
    
    $("#btn-1").addEventListener("click", function(){
        if (CL("input-11")[0].value === ""){
            alert("Please enter a number!!!");
        }
        else{
        let arabic = CL("input-11")[0].value;
        
        CL("input-12")[0].value = arabicToRoman(arabic);
        }
    });
    
    $("#btn-2").addEventListener("click", function(){
        if (CL("input-21")[0].value === ""){
            alert("Please enter a roman number!!!");
        }
        else{
        let roman = CL("input-21")[0].value;
        CL("input-22")[0].value = romanToArabic(roman);
        }
    });
    
    $("#clr-1").addEventListener("click", function(){
        CL("input-12")[0].value = "";
        CL("input-11")[0].value = "";
    });
    $("#clr-2").addEventListener("click", function(){
        CL("input-22")[0].value = "";
        CL("input-21")[0].value = "";
    });
    
    
      function arabicToRoman(num) {  
        var roman = "";
        var arabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        var romanNumbers = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
        for (let i = 0; i <= arabicNumbers.length; i++) {
          while (num >= arabicNumbers[i]) {
            roman += romanNumbers[i];
            num -= arabicNumbers[i];
          }
        }
        return roman;
      }
    
    function romanToArabic(str) {  
        var arabic = 0;
        var arabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        var romanNumbers = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
        for (var i = 0; i <= arabicNumbers.length; i++) {
          while (str.indexOf(romanNumbers[i]) === 0){
            arabic += arabicNumbers[i];
            str = str.replace(romanNumbers[i],'');
          }
        }
        return arabic;
    }
})();