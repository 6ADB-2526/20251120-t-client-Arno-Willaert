/**
 * 
 */

const lijstKinderen = document.querySelector("#kinderen")
const geschenklijst = document.querySelector("#geschenkenlijst")

const addKind = document.querySelector("#addKind")

fetch("https://o-apiandclient-render.onrender.com/kinderen")
    .then(info => info.json())
    .then((kinderen) => {
        console.log(kinderen);
        kinderen.forEach((kind) => {
            const newOption = document.createElement("option");
            newOption.value = kind.id
            newOption.innerHTML = kind.voornaam
            lijstKinderen.appendChild(newOption)
        });
    })

lijstKinderen.addEventListener("change", (e) => {
    selectedID = e.target.value

    fetch("https://o-apiandclient-render.onrender.com/kinderen")
    .then(info => info.json())
    .then((kinderen) =>  {
        kinderen.forEach((geschenk) => {
            geschenklijst.innerHTML = ""
            const newList = document.createElement("li")
            newList.innerHTML = geschenk.fullGeschenk
            console.log(newList);
            geschenklijst.appendChild(newList)
        })        
    })
})


const btn = document.createElement("button")
btn.innerHTML = "voeg toe"
addKind.appendChild(btn)