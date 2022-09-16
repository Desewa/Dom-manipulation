$(document).ready(function () {
    $("button#hello").click(function () {
        $("li").text("Hello");
    })

    $("button#goodbye").click(function () {
        $("li").text("Goodbye");
    })
    $("button#stop").click(function () {
        $("li").text("stop copying me!");
    })
})