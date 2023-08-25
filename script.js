document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generate");
    const nameInput = document.getElementById("name");
    const titleInput = document.getElementById("title");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const addressInput = document.getElementById("address");
    const signatureDiv = document.getElementById("signature");

    generateButton.addEventListener("click", function() {
        const name = nameInput.value;
        const title = titleInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;
        const address = addressInput.value;

       const signature = `
            <span style="font-weight: bold; font-family: Arial; font-size: 18px;">${name}</span>
            <br style="font-family: Arial; font-size: 15px;">${title}
            <br style="font-family: Arial; font-size: 10px; color: #0563C1;">E-mail: ${email}
            <br style="font-family: Arial; font-size: 10px; color: #767171;">Telefone: ${phone}
            <br style="font-family: Arial; font-size: 10px; color: #767171;">Endereço da obra ou escritório: ${address}
        `;
        signatureDiv.innerHTML = signature;
    });
});
