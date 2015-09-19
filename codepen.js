//<![CDATA[
setTimeout(function() {
        $('.copen-demo').each(function() {
        $(this).replaceWith('<iframe class="copen-demo loadercute" src="' + $(this).data('src') + '" allowfullscreen="allowfullscreen"></iframe>');
    });
}, 5000);
//]]>
