let mtg_url_api = "https://api.magicthegathering.io/v1/cards";

function actBtnSearchCardId(){
    let card;
    function reqListener (){
        card = JSON.parse(this.response).card;
        console.log(card);


        document.querySelector("p#nome").innerHTML = card.name;
        document.querySelector("p#numero").innerHTML = card.number;
        document.querySelector("p#tipoOriginal").innerHTML = card.originalType;
    }

    let cardID = document.querySelector("input#mtg_id");
    let oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    // oReq.open("get", mtg_url_api);
    oReq.open("get", `${mtg_url_api}/${cardID.value}`, true);
    oReq.send();

    let theBoxRotateY = document.getElementById("img_card");
    theBoxRotateY.addEventListener("click", (event) => {
        let target = event.currentTarget;
        target.animate([
            {transform: `rotateY(0deg)`},
            {transform: `rotateY(180deg)`},
        ], 2500);
        document.querySelector("img#img_card").src = card.imageUrl;
        // setInterval(()=>{document.querySelector("img#img_card").src = card.imageUrl;},0);
        target.animate([
            {transform: `rotateY(180deg)`},
            {transform: `rotateY(0deg)`},
        ], 2500);
    });
}