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
            <p style="font-weight: bold; font-family: Arial; font-size: 11px;">${name}</p>
            <p style="font-family: Arial; font-size: 10px;">${title}</p>
            <p style="font-family: Arial; font-size: 8px; color: #0563C1;">E-mail: ${email}</p>
            <p style="font-family: Arial; font-size: 8px; color: #767171;">Telefone: ${phone}</p>
            <p style="font-family: Arial; font-size: 8px; color: #767171;">Endereço da obra ou escritório: ${address}</p>
        `;
        signatureDiv.innerHTML = signature;
    });
});
