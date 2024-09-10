var Btn = document.getElementById("btnClick");
var value = document.querySelector("#inputField").value
Btn.click(function(){
    if(value){
        alert("The Value is : " + value);
    }else{
        alert("The Value not Found!");
    }
})
