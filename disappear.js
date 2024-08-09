// script.js  
document.getElementById("close-btn").onclick = function() {  
    var notification = document.getElementById("notification");  
    notification.style.opacity = "0"; // 渐变消失  
    setTimeout(function() {  
        notification.style.display = "none"; // 隐藏元素  
    }, 300); // 匹配 CSS 中的 transition 时间  
}