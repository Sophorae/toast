function showToast(option) {
    var toast = $("<div>").css({
        "position": "fixed",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "background": "rgba(0,0,0,0.35)",
        "z-index": "100"
    });
    var box = $("<div>").css({
        "position": "absolute",
        "left": "50%",
        "top": "50%",
        "margin-left": "-246px",
        "width": "492px",
        "padding": "40px 0",
        "background": "#ffffff"
    })
    var content = $("<p>").css({
        "margin": "0 auto",
        "height": "25px",
        "line-height": "25px",
        "text-align": "center",
        "font-size": "18px",
        "color": "#333333"
    })
    var tips = $("<p>").css({
        "margin-top": "14px",
        "height": "14px",
        "line-height": "14px",
        "text-align": "center",
        "font-size": "14px",
        "color": "#999999"
    })
    
    if (option) {
        if (option.type == "success") {
            content.html("<span class='icon-uniE943'><span class='path1'></span><span class='path2'></span></span>" +" "+"<span>提交成功</span>")
            if (option.message) {
                tips.text(option.message)
            } else {
                tips.text("专业服务人员将与您联系，请耐心等待")
            }
        } else if (option.type == "failure") {
            content.html("<span class='icon-5'><span class='path1'></span><span class='path2'></span><span class='path3'></span></span>" +" "+"<span>提交失败</span>");
            if (option.message) {
                tips.text(option.message)
            } else {
                tips.text("未知错误")
            }
            var btn = $("<a>").css({
                "display": "block",
                "margin-top": "17px",
                "margin": "17px auto 0",
                "width": "72px",
                "height": "30px",
                "text-align": "center",
                "line-height": "30px",
                "font-size": "16px",
                "color": "#ffffff",
                "text-decoration": "none",
                "background": "#F29718",
                "border-radius": "4px"
            }).attr("href", "javascript:;").text("确定")
            btn.on("click", function() {
                toast.remove();
            })
        } else {
            console.error("(#`O′)未定义option, 格式:{type: \"success/failure\", message: text}")
        }
    } else {
        console.error("(#`O′)未定义option, 格式:{type: \"success/failure\", message: text}")
    }
    box.append(content);
    box.append(tips);
    btn ? box.append(btn) : '';
    toast.append(box);
    $("body").append(toast);
    setTimeout(function() {
        toast.remove()
    }, 2000)
}
showToast({
    type: "success"
})
