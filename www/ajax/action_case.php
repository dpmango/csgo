<?php

    echo json_encode([
        'success' => true,
        'data' => [
            'id' => '1',
            'img' => 'img/content/simple-case.png',
            'name' => ' AWP | Boom',
            'price' => '$ 3000',
            "category_id" => '2'
        ]
    ]);
    exit;

?>