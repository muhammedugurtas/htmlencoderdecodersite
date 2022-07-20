window.addEventListener("load", function() {
    const encode_button = document.getElementById("encodeButton");
    const copy_button1 = document.getElementById("copyButton1");
    const decode_button = document.getElementById("decodeButton");
    const copy_button2 = document.getElementById("copyButton2");
    encode_button.addEventListener("click", Encode);
    copy_button1.addEventListener("click", Copy1);
    decode_button.addEventListener("click", Decode);
    copy_button2.addEventListener("click", Copy2);
}, false);

function Encode() {
    const encodeInput = document.getElementById("encodeInput");
    const copyInput1 = document.getElementById("copyInput1");
    if (!encodeInput.value == "") {
        copyInput1.value = encodeURIComponent(encodeInput.value);
    } else {
        alert("Please write something.");
    }
}

function Decode() {
    const decodeInput = document.getElementById("decodeInput");
    const copyInput2 = document.getElementById("copyInput2");
    if (!decodeInput.value == "") {
        copyInput2.value = decodeURIComponent(decodeInput.value);
    } else {
        alert("Please write something.");
    }
}

function Copy1() {
    const copyInput1 = document.getElementById("copyInput1");
    copyInput1.select();
    copyInput1.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyInput1.value);
}

function Copy2() {
    const copyInput2 = document.getElementById("copyInput2");
    copyInput2.select();
    copyInput2.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyInput2.value);
}