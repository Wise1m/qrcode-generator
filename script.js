const wrapper = document.querySelector(".wrapper");
const textInput = wrapper.querySelector(".form input");
const generateButton = wrapper.querySelector(".form button");
const qrImage = wrapper.querySelector(".qr-code img");

generateButton.addEventListener("click", () => {
    let inputVal = textInput.value;
    if(!inputVal) return; //if the input is empty do not show anything
    generateButton.innerText = "Processing QR Code...";
    // getting a qrcode of user entered value using the qrserver
    // api and passing the api returned img src to qrimg
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal}`;
    qrImage.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateButton.innerText = "Generate QR CODE";
    })
});

textInput.addEventListener("keyup", () => {
    if(!textInput.value){
        wrapper.classList.remove("active");
    }
})