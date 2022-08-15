function encriptar() {
    var textIn = document.getElementById("textIn").value;

    if (textIn != "") {
        var textEncrypt = textIn.split("e").join("enter").split("i").join("imes").split("a").join("ai").split("o").join("ober").split("u").join("ufat");
        document.getElementById("textOut").value = textEncrypt;
        document.getElementById("textIn").value = "";
    }
}

function dencriptar() {
    var textIn = document.getElementById("textIn").value;

    if (textIn != "") {
        textEncrypt = textIn.split("enter").join("e").split("imes").join("i").split("ai").join("a").split("ober").join("o").split("ufat").join("u");
        document.getElementById("textOut").value = textEncrypt;
        document.getElementById("textIn").value = "";
    }
}

async function copiar() {
    let text = document.getElementById("textOut").value;
    await navigator.clipboard.writeText(text);
    document.getElementById("textOut").value = "";
}
