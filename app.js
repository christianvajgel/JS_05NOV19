var mtg_url_api = "https://api.magicthegathering.io/v1/cards";

function actBtnSearchCardId(){
    function reqListener (){
        var card = JSON.parse(this.response).card;
        console.log(card);
        document.querySelector("img#img_card").src = card.imageUrl;
        document.querySelector("p#nome").innerHTML = card.name;
        document.querySelector("p#numero").innerHTML = card.number;
        document.querySelector("p#tipoOriginal").innerHTML = card.originalType;
    }

    let cardID = document.querySelector("input#mtg_id");
    let oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("get", `${mtg_url_api}/${cardID.value}`);
    oReq.send();
}