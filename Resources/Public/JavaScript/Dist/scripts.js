/*!
 * tmpl qmh v1.0.0 (https://qmh.sub.uni-goettingen.de/)
 * Copyright 2017-2019 Marcus Hellmann
 * Licensed under the GPL-2.0-or-later license
 */

$(function () {

    var heightDocument = $(document).height();
    var heightViewport = $(window).height();
    var heightFooterHalf = Math.trunc($('#page-footer').height() * 0.2);

    var maxPaddingTop = heightDocument - heightViewport - heightFooterHalf;

    $(window).on('resize, scroll', function () {

        var heightHeader = $('#page-header').height();
        var headerScrolled = $(window).scrollTop();

        if (headerScrolled > 150) {
            $('.subnav-wrap').css('padding-top', headerScrolled-heightHeader);
            if (headerScrolled > maxPaddingTop) {
                $('.subnav-wrap').css('padding-top', maxPaddingTop-heightHeader);
            }
        } else {
            $('.subnav-wrap').css('padding-top', headerScrolled);
        }

    });

});
