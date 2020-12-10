var pests = {
    "goomba": {
        "caught": 0,
        "cost": 5
    },
    "bobomb": {
        "caught": 0,
        "cost": 7
    },
    "cheep": {
        "caught": 0,
        "cost": 11
    }
}

function addPest(pest) {
    pests[pest].caught++;
    totalCost(pest);
    changeCaught(pest);
    pestTotal();
}

function subtractPest(pest) {
    pests[pest].caught--;
    totalCost(pest);
    changeCaught(pest);
    pestTotal();
}

function changeCaught(pest) {
    document.getElementById(pest + "-caught").innerHTML = pests[pest].caught;
}

function totalCost(pest) {
    var total = 0;
    for (var pest in pests) {
        total += pests[pest].cost * pests[pest].caught;
    }
    document.getElementById("totalCost").innerHTML = total;
}

function pestTotal() {
    var total = 0;
    for (var pest in pests) {
        total += pests[pest].caught;
    }
    document.getElementById("pestTotal").innerHTML = total;

}