document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generate");
    const nameInput = document.getElementById("name");
    const titleInput = document.getElementById("title");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const addressInput = document.getElementById("address");
    const signatureTextarea = document.getElementById("signature");

    generateButton.addEventListener("click", function() {
        const name = nameInput.value;
        const title = titleInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;
        const address = addressInput.value;

        const signature = `
            ${name}
            ${title}
            E-mail: ${email}
            Telefone: ${phone}
            Endereço da obra ou escritório: ${address}
        `;
        signatureTextarea.innerText = signature;
    });
});
