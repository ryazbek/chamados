<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'autoload.php'
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Recolha os dados do formulário
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $ramal = $_POST["ramal"];
    $acesso_remoto = $_POST["acesso_remoto"];
    $id = $_POST["id"];
    $senha = $_POST["senha"];
    $mensagem = $_POST["mensagem"];

    // Configurações do servidor SMTP do Yahoo
    $smtpHost = 'smtp.mail.yahoo.com';
    $smtpPort = 587;
    $smtpUser = 'chamados.ryazbek';
    $smtpPassword = 'jmtrkyutyqnljoyk';

    // Configurações do email
    $destinatario = 'informatica@ryazbek.com.br';
    $assunto = 'Novo Chamado';

    // Cria uma nova instância do PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configuração do servidor SMTP
        $mail->isSMTP();
        $mail->Host = $smtpHost;
        $mail->Port = $smtpPort;
        $mail->SMTPAuth = true;
        $mail->Username = $smtpUser;
        $mail->Password = $smtpPassword;

        // Configuração do email
        $mail->setFrom('chamados.ryazbek@yahoo.com', 'Chamados');
        $mail->addAddress('informatica@ryazbek.com.br');
        $mail->Subject = 'Novo Chamado';

        // Conteúdo do email
        $conteudo_email = "Nome: $nome\n";
        $conteudo_email .= "Ramal: $ramal\n";
        $conteudo_email .= "Acesso remoto escolhido: $acesso_remoto\n";
        $conteudo_email .= "ID: $id\n";
        $conteudo_email .= "Senha: $senha\n\n";
        $conteudo_email .= "Mensagem:\n$mensagem";

        $mail->Body = $conteudo_email;

        // Envia o email
        $mail->send();
        echo 'E-mail enviado com sucesso!';
    } catch (Exception $e) {
        echo 'Ocorreu um erro ao enviar o e-mail: ' . $mail->ErrorInfo;
    }
}
?>
