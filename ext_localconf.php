<?php

/***************
 * Add default RTE configuration
 */
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['tmpl_qmh'] = 'EXT:tmpl_qmh/Configuration/RTE/Default.yaml';
$GLOBALS['TYPO3_CONF_VARS']['FE']['pageNotFound_handling'] = "/sitemap";
$GLOBALS['TYPO3_CONF_VARS']['FE']['pageNotFound_handling_statheader'] = "HTTP/1.0 404 Not Found";

/***************
 * PageTS
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/TsConfig/Page/All.tsconfig">');
