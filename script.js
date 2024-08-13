let keys = document.getElementsByClassName("keys")

var turn = 'X'
var res
function changeturn() {
    if (turn == 'X') {
        turn = 'O'
        document.getElementById("turn").innerText = `Turn for ${turn}`
        res = 'X'
    }
    else {
        turn = 'X'
        document.getElementById("turn").innerText = `Turn for ${turn}`
        res = 'O'
    }
}

async function clearscreen() {
    document.getElementById("key1").innerText = ''
    document.getElementById("key2").innerText = ''
    document.getElementById("key3").innerText = ''
    document.getElementById("key4").innerText = ''
    document.getElementById("key5").innerText = ''
    document.getElementById("key6").innerText = ''
    document.getElementById("key7").innerText = ''
    document.getElementById("key8").innerText = ''
    document.getElementById("key9").innerText = ''
    turn = 'X'
}


async function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("ok")
        }, 3000);
    })
}
async function always(className) {
    document.getElementById("res").innerText = `${res} Won`
    document.getElementById("win").classList.toggle(className)
    document.getElementById("hold").classList.toggle("hold")
    document.getElementById("dance1").src = 'trophy.mp4'
    await delay()
    clearscreen()
    document.getElementById("hold").classList.toggle("hold")
    document.getElementById("win").classList.toggle(className)
    document.getElementById("res").innerText = ''
    document.getElementById("dance1").src = ''
    document.getElementById("turn").innerText = `Turn for X`
}
async function checkwin() {
    var k1 = document.getElementById("key1").innerText
    var k2 = document.getElementById("key2").innerText
    var k3 = document.getElementById("key3").innerText
    var k4 = document.getElementById("key4").innerText
    var k5 = document.getElementById("key5").innerText
    var k6 = document.getElementById("key6").innerText
    var k7 = document.getElementById("key7").innerText
    var k8 = document.getElementById("key8").innerText
    var k9 = document.getElementById("key9").innerText

    if ((k1 == k2) && (k1 == k3) && k1 == 'X') {
        document.getElementById("res").innerText = "X won"
        await always("r1")
    }
    else if ((k4 == k5) && (k4 == k6) && k4 == 'X') {
        await always("r2")
    }
    else if ((k7 == k8) && (k7 == k9) && k7 == 'X') {
        always("r3")
    }
    else if ((k1 == k4) && (k1 == k7) && k1 == 'X') {
        always("c1")
    }
    else if ((k2 == k5) && (k2 == k8) && k2 == 'X') {
        always("c2")
    }
    else if ((k3 == k6) && (k3 == k9) && k3 == 'X') {
        always("c3")
    }
    else if ((k1 == k5) && (k1 == k9) && k1 == 'X') {
        always("t1")
    }
    else if ((k3 == k5) && (k3 == k7) && k3 == 'X') {
        always("t2")
    }
    else if ((k1 == k2) && (k1 == k3) && k1 == 'O') {
        always("r1")
    }
    else if ((k4 == k5) && (k4 == k6) && k4 == 'O') {
        always("r2")
    }
    else if ((k7 == k8) && (k7 == k9) && k7 == 'O') {
        always("r3")
    }
    else if ((k1 == k4) && (k1 == k7) && k1 == 'O') {
        always("c1")
    }
    else if ((k2 == k5) && (k2 == k8) && k2 == 'O') {
        always("c2")
    }
    else if ((k3 == k6) && (k3 == k9) && k3 == 'O') {
        always("c3")
    }
    else if ((k1 == k5) && (k1 == k9) && k1 == 'O') {
        always("t1")
    }
    else if ((k3 == k5) && (k3 == k7) && k3 == 'O') {
        always("t2")
    }
    else if (k1 !== '' && k2 !== '' && k3 !== '' && k4 !== '' && k5 !== '' && k6 !== '' && k7 !== '' && k8 !== '' && k9 !== '') {
        document.getElementById("res").innerText = `Tie! wait for 4 sec`
        await delay();
        clearscreen();
        document.getElementById("res").innerText = ``
    }
}


Array.from(keys).forEach((key) => {
    key.addEventListener("click", (e) => {
        if (e.target.innerText != "") {
            return;
        }
        e.target.innerText = turn
        changeturn()
        checkwin()
    })
});