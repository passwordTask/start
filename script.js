const passwords = ["YWRtaW4=", "aGVzbG8=", "MTIzNDU=" ] //admin, heslo, 12345 // dont forget to del



const pickRandom = Math.floor(Math.random() * (2 - 0 + 1)) + 0; //0 to 2
console.log(pickRandom)
console.log(localStorage.getItem("password")) 
if(localStorage.getItem("password") == null){ // oldPassword
    localStorage.setItem("password", passwords[pickRandom]);
}
console.log(localStorage.getItem("password"))

const firstForm = document.getElementById("firstPassword");

firstForm.addEventListener("submit", function(event)    {
  event.preventDefault();  // Stop form from submitting
  document.getElementsByName("contextOld").textContent = "";

  const pass = document.getElementById("oldPassword");
  if(pass.value.trim() == ""){
    console.log("flag1")
    document.getElementsByName("contextOld")[0].textContent = "Skúste jednoduché, často používané heslá."
  }else if(btoa(pass.value.trim()) != localStorage.getItem("password")){
    console.log("flag2")
    document.getElementsByName("contextOld")[0].textContent = "Tip: Heslo má 5 znakov."
  }else{
      localStorage.removeItem("password")
      document.getElementById("secondTest").style.display = "block"
      document.getElementById("firstTest").style.display = "none"
      console.log("gotititworks")
  }});


function getType(char) {
    if (/[A-Z]/.test(char)) return "upper";
    if (/[a-z]/.test(char)) return "lower";
    if (/[0-9]/.test(char)) return "number";
    return "special";
}

  const secondForm = document.getElementById("secondPassword");
  secondForm.addEventListener("submit", function(event){
    event.preventDefault();  // Stop form from submitting
    const pass = document.getElementById("newPassword").value.trim();

    if(pass.length < 12){
        document.getElementsByName("contextNew")[0].textContent = "Tip: Heslo by malo mať aspoň 12 znakov."
        return;}
    if (!(/[A-Z]/.test(pass))){
        document.getElementsByName("contextNew")[0].textContent = "Tip: Heslo by malo obsahovať veľké písmená."
        return;
    }   
    if (!(/[a-z]/.test(pass))){
        document.getElementsByName("contextNew")[0].textContent = "Tip: Heslo by malo obsahovať malé písmená."
        return;
    }
    if (!(/[0-9]/.test(pass))){
        document.getElementsByName("contextNew")[0].textContent = "Tip: Heslo by malo obsahovať číslice."
        return;
    }
    if (!(/[^A-Za-z0-9]/.test(pass))){
        document.getElementsByName("contextNew")[0].textContent = "Tip: Heslo by malo obsahovať špeciálne znaky."
        return;
    }


    let lastType = null;
    let count = 0;
    for (let i = 0; i < pass.length; i++) {
        const type = getType(pass[i]);

    if (type === lastType) {    
        count++;
    if (count > 6) {
        document.getElementsByName("contextNew")[0].textContent = "Tip: Písmená, číslice a znaky je ideálne v hesle striedať a nepoužívať žiadne slová, či dôležité dátumy. Skúste sa vyvarovať dlhým skupinám písmen alebo číslic"
        return;
    }
    } else {
        lastType = type;
        count = 1;
    }
    }

    document.getElementById("nextRiddleCode").textContent += atob("S09ES09ES09E");
    document.getElementById("final").style.display = "block"
    document.getElementById("secondTest").style.display = "none"
  });