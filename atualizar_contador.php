<?php
if (isset($_POST['contador'])) {
    $contador = $_POST['contador'];
    file_put_contents('contador.txt', $contador);
}
?>
