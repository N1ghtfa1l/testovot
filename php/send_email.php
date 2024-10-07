<?php

// Подключаем PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = trim($_POST['name']);
    $phone = trim($_POST['phone']);

    if (empty($name) || empty($phone)) {
        echo "Заполните все поля!";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Настройка SMTP
        $mail->isSMTP();                                           // Используем SMTP
        $mail->Host       = 'smtp.mail.ru';                      // SMTP сервер (например, Gmail)
        $mail->SMTPAuth   = true;                                  // Включаем SMTP аутентификацию
        $mail->Username   = 'email@mail.ru';                // Ваш email
        $mail->Password   = 'password';                       // Ваш пароль
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;        // Шифрование TLS
        $mail->Port       = 587;                                   // Порт SMTP (для TLS)

        // Настройки email
        $mail->setFrom('your_email@gmail.com', 'Ваше имя');        // От кого письмо
        $mail->addAddress('m.pilipchuk2004@mail.ru');              // Кому отправляем письмо

        // Содержание письма
        $mail->isHTML(false);                                      // Письмо в формате plain text
        $mail->Subject = 'Новая заявка с сайта';
        $mail->Body    = "Имя: $name\nТелефон: $phone";

        // Отправляем письмо
        if ($mail->send()) {
            echo "Ваша заявка успешно отправлена!";
        } else {
            echo "Произошла ошибка при отправке заявки.";
        }
    } catch (Exception $e) {
        echo "Ошибка при отправке письма: {$mail->ErrorInfo}";
    }

} else {
    echo "Ошибка: данные не отправлены!";
}
