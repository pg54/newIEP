/*
 用法:$('#'+print_id).print();
 可选:
 base:true,false,string(打印页的<base>:true=当前页面的base,false=当前页面域名,string=指定)
 title:string(打印页的标题)
 printClass:string(打印框的自定义样式,默认is_print,如希望打印的样式与当前页面显示不同样式时)
 注意:
 1.打印元素中如有canvas,canvas实际宽高务必1.1倍以上,以避免打印模糊,如<canvas width='100' height='110' style='width:100px;height:100px;'></canvas>
 2.打印所在层的css写法例子:
 .parent .print *{//错误写法};
 .print *{//正确写法};
 .is_print.print *{//打印后的样式(非必要,仅期望样式不同时)};
 */
!function (t) {

    function p_l(e, n, a) {
        var i = n.clone();
        if (0 < n.find("canvas").length) {
            var s, o;
            n.find("canvas").each(function (e) {
                s = t(this), o = '<img src="' + s[0].toDataURL("image/png") + '" />'
            }), i.find("canvas").each(function (e) {
                t(this).replaceWith(o)
            })
        }
        n = i.attr("data-print") ? i.attr("data-print") : a.printClass, i.addClass(n), e.append(t("<div/>").html(i).html())
    }


    var n;
    t.fn.print = function (a) {
        n = t.extend({}, t.fn.print.defaults, a);
        var i = this instanceof jQuery ? this : t(this);
        if (a = "print-" + (new Date).getTime(), window.location.hostname !== document.domain && navigator.userAgent.match(/msie/i)) {
            var s = 'javascript:document.write("<head><script>document.domain=\\"' + document.domain + '\\";</script></head><body></body>")',
                o = document.createElement("iframe");
            o.name = "printIframe", o.id = a, o.className = "MSIE", document.body.appendChild(o), o.src = s
        } else t("<iframe id='" + a + "' name='printIframe' />").appendTo("body");
        var d = t("#" + a);
        setTimeout(function () {
            var a = d.contents(), s = a.find("head"), o = a.find("body"), r = t("base"),
                r = !0 === n.base && 0 < r.length ? r.attr("href") : "string" == typeof n.base ? n.base : document.location.protocol + "//" + document.location.host;
            s.append('<base href="' + r + '">'), t("link[rel=stylesheet]").each(function () {
                var e = t(this).attr("href");
                if (e) {
                    var n = t(this).attr("media") || "all";
                    s.append("<link type='text/css' rel='stylesheet' href='" + e + "' media='" + n + "'>")
                }
            }), n.title && s.append("<title style='display:none'>" + n.title + "</title>"), o.addClass(t("body")[0].className), a.find("html").addClass(t("html")[0].className), p_l(o, i, n), setTimeout(function () {
                d.hasClass("MSIE") ? (window.frames.printIframe.focus(), s.append("<script>  window.print(); </script>")) : document.queryCommandSupported("print") ? d[0].contentWindow.document.execCommand("print", !1, null) : (d[0].contentWindow.focus(), d[0].contentWindow.print()), setTimeout(function () {
                    0 < d.length && d.remove()
                }, 500)
            }, 500)
        }, 500)
    }, t.fn.print.defaults = {title: "", base: !1, printClass: "is_print"}
}(jQuery);
