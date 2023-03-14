<?php
if(!isset($_GET['user']) || !isset($_GET['pass'])) {
    die("エラー,認証情報が指定されていません。");
}
try {
    $pdo = new PDO(
        'mysql:host=' . getenv('DB') . ';dbname=zikan;charset=utf8',
        $_GET['user'],
        $_GET['pass']
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
} catch (PDOException $Exception) {
    die('エラー,' . $Exception->getMessage());
}
try {
    $sql = "SELECT * FROM zikan." . $pdo->quote($_GET['user']) . "";
    $stmh = $pdo->prepare($sql);
    $stmh->execute();
} catch (PDOException $Exception) {
    die('エラー,' . $Exception->getMessage());
}

while($row = $stmh->fetch(PDO::FETCH_ASSOC)){
    echo ( htmlspecialchars($row['月曜日']) . ',' );
    echo ( htmlspecialchars($row['火曜日']) . ',' );
    echo ( htmlspecialchars($row['水曜日']) . ',' );
    echo ( htmlspecialchars($row['木曜日']) . ',' );
    echo ( htmlspecialchars($row['金曜日']) . ',' );
}