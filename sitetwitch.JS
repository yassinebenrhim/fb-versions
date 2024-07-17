document.getElementById('send-btn').addEventListener('click', function() {
    const chatInput = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');
    
    if (chatInput.value.trim() !== '') {
      const newMessage = document.createElement('p');
      newMessage.textContent = chatInput.value;
      chatBox.appendChild(newMessage);
      
      chatInput.value = '';
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  });
  
  document.getElementById('chat-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.getElementById('send-btn').click();
    }
  });
  