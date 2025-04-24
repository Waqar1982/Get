function updateview(){
app.innerHTML=`
<input onchange = "saveName(this.value)">
`

}

function saveName(name){
inputName= name

}
