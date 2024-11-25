const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const generateBtnEl = document.getElementById("generate-btn")
const passdEl = document.getElementById("passd")

generateBtnEl.addEventListener("click", function(){
    let pass = ["",""]
    for(let i=0;i<2;i++){
        for(let j=0; j<15;j++){
            let index = Math.floor(Math.random() * characters.length)
            pass[i]+=characters[index]
        }
    }
    passdEl.innerHTML = `<span class="pass">${pass[0]}</span>
                <span class="pass">${pass[1]}</span>`
})



