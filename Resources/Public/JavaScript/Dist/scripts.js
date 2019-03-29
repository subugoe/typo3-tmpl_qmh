/*!
 * tmpl qmh v1.0.0 (https://qmh.sub.uni-goettingen.de/)
 * Copyright 2017-2019 Marcus Hellmann
 * Licensed under the GPL-2.0-or-later license
 */

$(function () {

    $(window).on('resize, scroll', function () {

        var heightDocument = $(document).height();
        var heightViewport = $(window).height();
        var heightHeader = $('#page-header').height();
        var heightFooterHalf = $('#page-footer').height() * 0.2;

        var scrollHeight = heightDocument - heightViewport - heightFooterHalf;

        var headerScrolled = $(window).scrollTop();

        if (headerScrolled > 150) {
            $('.subnav-wrap').css('padding-top', headerScrolled-heightHeader);
            if (headerScrolled > scrollHeight) {
                $('.subnav-wrap').css('padding-top', scrollHeight-heightHeader);
            }
        } else {
            $('.subnav-wrap').css('padding-top', headerScrolled);
        }

    });

});
