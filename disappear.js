// script.js  
document.getElementById("close-btn").onclick = function() {  
    var notification = document.getElementById("notification");  
    notification.style.opacity = "0"; // ������ʧ  
    setTimeout(function() {  
        notification.style.display = "none"; // ����Ԫ��  
    }, 300); // ƥ�� CSS �е� transition ʱ��  
}