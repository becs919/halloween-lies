
let getCharacter = () => {
  var code = document.querySelector(".code").value;

  let char = characters.find(item => {
    return item.code === code;
  })

  console.log(char)

  if (char) {
    document.querySelector(".code").value = "";
    document.querySelector("#character").innerText = "Your character's name is: "+char.character_name
    document.querySelector("#desc").innerText =  char.desc
  } else {
    hideCharacter();
    alert("Opps try again!")
  }
}

let hideCharacter = () => {
  document.querySelector("#character").innerText = "";
  document.querySelector("#desc").innerText = "";
  document.querySelector(".code").value = "";
}
