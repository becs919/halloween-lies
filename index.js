var hide = document.querySelector(".hide-button");

let getCharacter = () => {
  var code = document.querySelector(".code").value;

  let char = characters.find(item => {
    return item.code === code;
  })

  if (char) {
    document.querySelector(".code").value = "";
    document.querySelector("#name").innerText = char.name+" your character is: "
    document.querySelector("#character").innerText = char.character_name
    document.querySelector("#desc").innerText = char.desc
    hide.style.display = "inline";
  } else {
    hideCharacter();
    alert("Ooops try again!")
    hide.style.display = "none";
  }
}

let hideCharacter = () => {
  document.querySelector("#name").innerText = "";
  document.querySelector("#character").innerText = "";
  document.querySelector("#desc").innerText = "";
  document.querySelector(".code").value = "";
  hide.style.display = "none";
}
