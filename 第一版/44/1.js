document.getElementById('passwordForm').addEventListener('submit', function(event) {  
    event.preventDefault(); // 阻止表单默认的提交行为  
  
    var passwordInput = document.getElementById('password');  
    var password = passwordInput.value;  
  
    // 这里假设密码是 "secret"  
    if (password === '114') {  
        document.getElementById('content').style.display = 'block'; // 显示内容  
        passwordInput.value = ''; // 清空密码输入框  
    } else {  
        alert('Incorrect password!'); // 密码错误时显示警告  
    }  
});