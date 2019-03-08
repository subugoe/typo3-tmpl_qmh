<?php

/**
 * Extension Manager/Repository config file for ext "tmpl_qmh".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'tmpl qmh',
    'description' => 'Template and Configuration for the Quality Management Guide Teaching and Learning of the Georg-August-Universität Göttingen.',
    'category' => 'templates',
    'shy' => 0,
    'constraints' => [
        'depends' => [
            'typo3' => '8.7.0-9.5.99',
            'rte_ckeditor' => '8.7.0-9.5.99',
            'bootstrap_package' => '10.0.0-10.0.99'
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Subugoe\\TmplQmh\\' => 'Classes'
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 1,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Marcus Hellmann',
    'author_email' => 'hellmann@sub.uni-goettingen.de',
    'author_company' => 'www.sub.uni-goettingen.de',
    'version' => '1.0.0',
];
