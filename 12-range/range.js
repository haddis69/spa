$(function(){
    var m=$("#range"),n=$("#age");
    n.html(m.val()),
    m.change(function(){
        n.html(m.val())
    })
});