function Toast(option) {
    if (option) {
        if (option.type == "success") {
            document.createDocumentFragment("div");
        }
    } else {
        console.error("(#`O′)未定义option, 格式:{type: \"success/failure\", tips: text}")
    }

}
Toast()
/* 
{
    type: "",

}
*/