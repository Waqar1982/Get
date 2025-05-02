function updateview(){
app.innerHTML=/*HTML*/`

      <input onchange = "saveName(this.value)"type="text" placeholder="Navn">
      <input onchange = "saveAge (this.value)"type="number" placeholder="Alder">
      <button>Legg til barn</button>
      <ul></ul>
      <button>Sjekk skolestartere</button>
      <div id="resultat"></div>
`

}

function saveName(name){
inputName= name

}

function saveAge(age) {
    inputAge= age
}
