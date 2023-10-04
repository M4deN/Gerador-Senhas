const button1 = document.getElementById("generatePassword");
const displayer = document.getElementById("generatedPassword");
button1.addEventListener("click", function (){
    let passLength = (document.getElementById("charNumber").value);
    let passArray = [];
    for(let i = 0;i<passLength;i++){
        while(true)
        {
            var randomchar = Math.floor(Math.random()*(127-33))+33;
            if (randomchar > 96 && randomchar < 123){
                break;
            } else if (document.getElementById("includeCaps").checked 
            && (randomchar > 64 && randomchar < 91)
            ){
                break;
            } else if (document.getElementById("includeNumber").checked 
            && (randomchar > 47 && randomchar < 58)
            ){
                break;
            } else if (document.getElementById("includeSpecialChars").checked 
            && (
                (randomchar > 32 && randomchar < 48) 
                || (randomchar > 57 && randomchar < 65) 
                || (randomchar > 90 && randomchar < 97) 
                || (randomchar > 122)
                )
                ){
                break;
            }
        }
        if (randomchar===60)
        {
            passArray.push("&lt;");
        } else {
            passArray.push(String.fromCharCode(randomchar));
        }
    }
    displayer.innerHTML = passArray.join("");
})
