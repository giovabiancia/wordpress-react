jQuery.noConflict();
jQuery(document).ready(function ($) {
    a(window).load(function () { a(".spinner").fadeOut("slow") }); setTimeout(function () {
        $('#homePopup').modal('show');
        console.log('popup')
    }, 4000); var e = a(".spinner"); function i(e) { e.matches ? a(window).on("scroll", function (e) { 58 < a(window).scrollTop() ? a(".navbar").addClass("affix") : a(".navbar").removeClass("affix") }) : a(window).on("scroll", function (e) { 72 < a(window).scrollTop() ? a(".navbar").addClass("affix") : a(".navbar").removeClass("affix") }) } setTimeout(function () { e.addClass("nofix") }, 6500), a("body").on("click", ".menu", function () { a(this).toggleClass("open") }), a("#menuList a").click(function () { a("body, html").animate({ scrollTop: a("#menuList").offset().top - 10 }, 400) }); var s = window.matchMedia("(max-width: 991px)"); i(s), s.addListener(i), a(window).on("scroll resize", function () { var e; e = a("#get_scroll").offset().top + .8 * a("#get_scroll").height(), a(".checkAnim").each(function () { a(this).offset().top < e && a(this).addClass("anim") }) }), a(window).bind("load", function () { a(".start").addClass("anim-head") }), a(function () { a(".lazy").lazy({ combined: !0, delay: 5e3, effect: "fadeIn", effectTime: 1e3, threshold: 0, placeholder: "data:image/gif;base64,R0lGODlhEALAPQAPzl5uLr9Nrl8e7..." }) }), COOKIES_ENABLER.init({ scriptClass: "ce-script", iframeClass: "ce-iframe", acceptClass: "ce-accept", dismissClass: "ce-dismiss", disableClass: "ce-disable", bannerClass: "ce-banner", cookieName: "ce-cookie", cookieDuration: "365", wildcardDomain: !1, iframesPlaceholder: !0, iframesPlaceholderHTML: '<p>To view this content you need to<a href="#" class="ce-accept">Enable Cookies</a></p>', iframesPlaceholderClass: "ce-iframe-placeholder", onEnable: "", onDismiss: "", onDisable: "" })
});