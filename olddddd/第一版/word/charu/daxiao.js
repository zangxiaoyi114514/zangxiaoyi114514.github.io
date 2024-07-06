function setFontSize() {  
    var viewportWidth = window.innerWidth;  
    var fontSize = viewportWidth / 10; // 假设1%的视口宽度等于1px的字体大小  
    document.documentElement.style.fontSize = fontSize + 'px';  
  }  
  window.addEventListener('resize', setFontSize);  
  setFontSize(); // 页面加载时设置初始字体大小