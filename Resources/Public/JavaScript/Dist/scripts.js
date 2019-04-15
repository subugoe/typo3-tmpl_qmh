/*!
 * tmpl qmh v1.0.0 (https://qmh.sub.uni-goettingen.de/)
 * Copyright 2017-2019 Marcus Hellmann
 * Licensed under the GPL-2.0-or-later license
 */

$(function () {

    var heightDocument = $(document).height();
    var heightViewport = $(window).height();
    var heightHeader = $('#page-header').height();
    var heightBreadcrumbs = $('.breadcrumb-section').height();
    var heightPageContentInit = $('#page-content').height();
    var heightSubnavWrapInit = $('.frame-type-subnavigation').outerHeight() + $('.subnavcont').outerHeight();
    var heightFooterOuter = $('#page-footer').outerHeight();
    var heightFooterHalf = Math.trunc($('#page-footer').height() * 0.2);

    /* minimale Höhe für Page Content */
    var heightPageContentMin = heightViewport - heightHeader - heightBreadcrumbs - heightFooterOuter;
    if (heightPageContentInit < heightPageContentMin) {
        $('#page-content').css('min-height', heightPageContentMin);
    }

    var maxPaddingTop = heightDocument - heightViewport - heightFooterHalf;

    $(window).on('resize, scroll', function () {

        var heightHeader = $('#page-header').height();

        /* Padding für Subnav Bar */
        var isSubnavWrap = ($('.subnav-wrap').css('display'));

        if ( isSubnavWrap !== 'none' ) {

            if ( heightSubnavWrapInit <= heightPageContentInit ) {

                var headerScrolled = $(window).scrollTop();

                var maxPaddingTop2 = heightPageContentInit-heightSubnavWrapInit;

                if ( (headerScrolled > 150) && (headerScrolled <= maxPaddingTop2) ) {
                    $('.subnav-wrap').css('padding-top', headerScrolled - heightHeader);
                } else if ( (headerScrolled > 150) && (headerScrolled > maxPaddingTop2) ) {
                    $('.subnav-wrap').css('padding-top', maxPaddingTop2);
                } else {
                    $('.subnav-wrap').css('padding-top', headerScrolled);
                }
            } else {

                var headerScrolled = $(window).scrollTop();
                if ( headerScrolled <= 50 ) {
                    $('.subnav-wrap').css('padding-top', '0');
                } else if ( (headerScrolled > 50) && (headerScrolled <= 150) ) {
                    $('.subnav-wrap').css('padding-top', headerScrolled - 50);
                } else {
                }

            }
        } else {
            $('.subnav-wrap').css('padding-top', '0');
        }

    });

});
