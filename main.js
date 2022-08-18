const button = document.querySelector("#button");
const header = document.querySelector("#url-text");



function btnClick() {
    console.log("Button clicked!");

    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then((response) => {
        console.log(response.data.results[0].residents);

        const residentsArr = response.data.results[0].residents;
      
        for (i = 0; i < residentsArr.length; i++) {
            console.log(residentsArr[i]);

            axios.get(residentsArr[i])
            .then((response) => {
                console.log(response.data);

                const hTag = document.createElement("h2");
                hTag.textContent = response.data.name;

                // append new h2 element to <div></div> in HTML
                const names = document.getElementById("names");
                names.appendChild(hTag);

                console.log(response.data.name);
            })
        }
    })

}



button.addEventListener("click", btnClick);