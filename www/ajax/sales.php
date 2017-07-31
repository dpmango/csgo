<?php
    $result = array(
        'success' => false
    );

    if(isset($_GET['filter']) && isset($_GET['period'])) {
        $result['success'] = true;

        if($_GET['period'] == 'week') {
            if($_GET['filter'] == 'opening') {
                $result['cases'] = [
                    [
                        'id' => 1,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '20 раз',
                        'opening' => '20 раз',
                        'profit' => '5 700 рублей'

                    ],
                    [
                        'id' => 2,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '18 раз',
                        'opening' => '18 раз',
                        'profit' => '5 000 рублей'

                    ],
                    [
                        'id' => 3,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '17 раз',
                        'opening' => '17 раз',
                        'profit' => '4 200 рублей'

                    ]
                ];
            } else if ($_GET['filter'] == 'sales') {
                $result['cases'] = [
                    [
                        'id' => 1,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '1008 раз',
                        'opening' => '20 раз',
                        'profit' => '5 700 рублей'
                    ],
                    [
                        'id' => 2,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '1000 раз',
                        'opening' => '18 раз',
                        'profit' => '5 000 рублей'
                    ],
                    [
                        'id' => 3,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '800 раз',
                        'opening' => '17 раз',
                        'profit' => '4 200 рублей'
                    ],

                ];
            } else if ($_GET['filter'] == 'profit') {
                $result['cases'] = [
                    [
                        'id' => 1,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '5 700 рублей',
                        'opening' => '20 раз',
                        'profit' => '5 700 рублей'
                    ],
                    [
                        'id' => 2,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '5 000 рублей',
                        'opening' => '18 раз',
                        'profit' => '5 000 рублей'
                    ],
                    [
                        'id' => 3,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '4 200 рублей',
                        'opening' => '17 раз',
                        'profit' => '4 200 рублей'
                    ],
                ];
            }
        } else if ($_GET['period'] == 'month') {
            if($_GET['filter'] == 'opening') {
                $result['cases'] = [
                    [
                        'id' => 1,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '20 раз',
                        'opening' => '20 раз',
                        'profit' => '5 700 рублей'

                    ],
                    [
                        'id' => 2,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '18 раз',
                        'opening' => '18 раз',
                        'profit' => '5 000 рублей'

                    ],
                    [
                        'id' => 3,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '17 раз',
                        'opening' => '17 раз',
                        'profit' => '4 200 рублей'

                    ],
                    [
                        'id' => 4,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '10 раз',
                        'opening' => '10 раз',
                        'profit' => '3 000 рублей'
                    ]
                ];
            } else if ($_GET['filter'] == 'sales') {
                $result['cases'] = [
                    [
                        'id' => 1,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '1008 раз',
                        'opening' => '20 раз',
                        'profit' => '5 700 рублей'
                    ],
                    [
                        'id' => 2,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '1000 раз',
                        'opening' => '18 раз',
                        'profit' => '5 000 рублей'
                    ],
                    [
                        'id' => 3,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '800 раз',
                        'opening' => '17 раз',
                        'profit' => '4 200 рублей'
                    ],
                    [
                        'id' => 4,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '780 раз',
                        'opening' => '10 раз',
                        'profit' => '3 000 рублей'
                    ]

                ];
            } else if ($_GET['filter'] == 'profit') {
                $result['cases'] = [
                    [
                        'id' => 1,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '5 700 рублей',
                        'opening' => '20 раз',
                        'profit' => '5 700 рублей'
                    ],
                    [
                        'id' => 2,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '5 000 рублей',
                        'opening' => '18 раз',
                        'profit' => '5 000 рублей'
                    ],
                    [
                        'id' => 3,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '4 200 рублей',
                        'opening' => '17 раз',
                        'profit' => '4 200 рублей'
                    ],
                    [
                        'id' => 4,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '3 000 рублей',
                        'opening' => '10 раз',
                        'profit' => '3 000 рублей'
                    ]
                ];
            }
        } else if ($_GET['period'] == 'year') {
            if($_GET['filter'] == 'opening') {
                $result['cases'] = [
                    [
                        'id' => 1,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '20 раз',
                        'opening' => '20 раз',
                        'profit' => '5 700 рублей'

                    ],
                    [
                        'id' => 2,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '18 раз',
                        'opening' => '18 раз',
                        'profit' => '5 000 рублей'

                    ],
                    [
                        'id' => 3,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '17 раз',
                        'opening' => '17 раз',
                        'profit' => '4 200 рублей'

                    ],
                    [
                        'id' => 4,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '10 раз',
                        'opening' => '10 раз',
                        'profit' => '3 000 рублей'
                    ],
                    [
                        'id' => 5,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '9 раз',
                        'opening' => '9 раз',
                        'profit' => '2 900 рублей'
                    ]
                ];
            } else if ($_GET['filter'] == 'sales') {
                $result['cases'] = [
                    [
                        'id' => 1,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '1008 раз',
                        'opening' => '20 раз',
                        'profit' => '5 700 рублей'
                    ],
                    [
                        'id' => 2,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '1000 раз',
                        'opening' => '18 раз',
                        'profit' => '5 000 рублей'
                    ],
                    [
                        'id' => 3,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '800 раз',
                        'opening' => '17 раз',
                        'profit' => '4 200 рублей'
                    ],
                    [
                        'id' => 4,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '780 раз',
                        'opening' => '10 раз',
                        'profit' => '3 000 рублей'
                    ],
                    [
                        'id' => 5,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '770 раз',
                        'opening' => '9 раз',
                        'profit' => '2 900 рублей'
                    ]

                ];
            } else if ($_GET['filter'] == 'profit') {
                $result['cases'] = [
                    [
                        'id' => 1,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '5 700 рублей',
                        'opening' => '20 раз',
                        'profit' => '5 700 рублей'
                    ],
                    [
                        'id' => 2,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '5 000 рублей',
                        'opening' => '18 раз',
                        'profit' => '5 000 рублей'
                    ],
                    [
                        'id' => 3,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '4 200 рублей',
                        'opening' => '17 раз',
                        'profit' => '4 200 рублей'
                    ],
                    [
                        'id' => 4,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '3 000 рублей',
                        'opening' => '10 раз',
                        'profit' => '3 000 рублей'
                    ],
                    [
                        'id' => 5,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '2 700 рублей',
                        'opening' => '9 раз',
                        'profit' => '2 700 рублей'
                    ]
                ];
            }
        } else if ($_GET['period'] == 'all') {
            if($_GET['filter'] == 'opening') {
                $result['cases'] = [
                    [
                        'id' => 1,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '20 раз',
                        'opening' => '20 раз',
                        'profit' => '5 700 рублей'

                    ],
                    [
                        'id' => 2,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '18 раз',
                        'opening' => '18 раз',
                        'profit' => '5 000 рублей'

                    ],
                    [
                        'id' => 3,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '17 раз',
                        'opening' => '17 раз',
                        'profit' => '4 200 рублей'

                    ],
                    [
                        'id' => 4,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '10 раз',
                        'opening' => '10 раз',
                        'profit' => '3 000 рублей'
                    ],
                    [
                        'id' => 5,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '9 раз',
                        'opening' => '9 раз',
                        'profit' => '2 900 рублей'
                    ],
                    [
                        'id' => 6,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '8 раз',
                        'opening' => '8 раз',
                        'profit' => '2 400 рублей'
                    ]
                ];
            } else if ($_GET['filter'] == 'sales') {
                $result['cases'] = [
                    [
                        'id' => 1,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '1008 раз',
                        'opening' => '20 раз',
                        'profit' => '5 700 рублей'
                    ],
                    [
                        'id' => 2,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '1000 раз',
                        'opening' => '18 раз',
                        'profit' => '5 000 рублей'
                    ],
                    [
                        'id' => 3,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '800 раз',
                        'opening' => '17 раз',
                        'profit' => '4 200 рублей'
                    ],
                    [
                        'id' => 4,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '780 раз',
                        'opening' => '10 раз',
                        'profit' => '3 000 рублей'
                    ],
                    [
                        'id' => 5,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '770 раз',
                        'opening' => '9 раз',
                        'profit' => '2 900 рублей'
                    ],
                    [
                        'id' => 6,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '700 раз',
                        'opening' => '8 раз',
                        'profit' => '2 400 рублей'
                    ]

                ];
            } else if ($_GET['filter'] == 'profit') {
                $result['cases'] = [
                    [
                        'id' => 1,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '5 700 рублей',
                        'opening' => '20 раз',
                        'profit' => '5 700 рублей'
                    ],
                    [
                        'id' => 2,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '5 000 рублей',
                        'opening' => '18 раз',
                        'profit' => '5 000 рублей'
                    ],
                    [
                        'id' => 3,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '4 200 рублей',
                        'opening' => '17 раз',
                        'profit' => '4 200 рублей'
                    ],
                    [
                        'id' => 4,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '3 000 рублей',
                        'opening' => '10 раз',
                        'profit' => '3 000 рублей'
                    ],
                    [
                        'id' => 5,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '2 700 рублей',
                        'opening' => '9 раз',
                        'profit' => '2 700 рублей'
                    ],
                    [
                        'id' => 6,
                        'img' => 'img/content/simple-case.png',
                        'name' => 'AK-47 Redline',
                        'value_for_filter' => '2 400 рублей',
                        'opening' => '8 раз',
                        'profit' => '2 400 рублей'
                    ]
                ];
            }
        }

        echo json_encode($result);
        exit;
    }
?>