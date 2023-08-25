document.addEventListener("DOMContentLoaded", function() {
    // ... Aquisição de elementos do formulário e botão de geração ...

    generateButton.addEventListener("click", function() {
        // ... Aquisição de valores dos campos do formulário ...

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
