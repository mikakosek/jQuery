$(function () {
    var $spanOdd = $("span:odd"),
        $paragraphs = $("p");
    
    $spanOdd.css('color', 'red');
        
    $paragraphs.each(function (index, element) {
        $(element).append('<button class="btn" data-tmp="' + index + '">Click me</button>');
    });
    
    $("button").click(function () {
        alert($(this).attr("data-tmp"));
    });
});