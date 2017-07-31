<?php

    if(isset($_GET['name']) && isset($_GET['chanc'])) {
        echo json_encode(['success' => 'true']);
        exit;
    }

?>