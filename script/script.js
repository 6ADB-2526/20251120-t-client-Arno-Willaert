/**
 * 
 */

const lijstKinderen = document.querySelector("#kinderen")

fetch("https://o-apiandclient-render.onrender.com/kinderen")
    .then(info => info.json())
    .then((kinderen) => {
        console.log(kinderen);
        kinderen.forEach((kind) => {
            const newOption = document.createElement("option");
            newOption.value = kind.id
            newOption.innerHTML = kind.
            lijstKinderen.appendChild(newOption)
        });
    })