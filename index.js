/*
option = {
    type: "",
    message: ""
}
*/
function Toast(option) {
    var toast = $("<div>");
    toast.css({
        "position": "fixed",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "background": "rgba(0,0,0,0.35)",
        "z-index": "100px"
    })
    if (option) {
        
    } else {
        console.error("(#`O′)未定义option, 格式:{type: \"success/failure\", message: text}")
    }
    $("body").append(toast)
}
Toast()
