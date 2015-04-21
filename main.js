$(document).ready(function(){
    var list = [];
    $(".addItem").on("click", function addItem(){
        var newItem = $(".newItem").val();
        list.unshift(newItem);
        console.log(list);
        $(".list").prepend("<li class='well well-sm'>" + newItem + "<i class='fa fa-bars align-right'></i></li>");
        $(".newItem").val("");
    });
});
