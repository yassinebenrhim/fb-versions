document.addEventListener('DOMContentLoaded', function() {
    const postInput = document.getElementById('post-input');
    const postBtn = document.getElementById('post-btn');
    const feed = document.getElementById('feed');
  
    // Load posts from localStorage
    function loadPosts() {
      const posts = JSON.parse(localStorage.getItem('posts')) || [];
      feed.innerHTML = '';
      posts.forEach(post => {
        const newPost = document.createElement('div');
        newPost.className = 'post';
        newPost.textContent = post.content;
        feed.appendChild(newPost);
      });
    }
  
    // Save a new post to localStorage
    function savePost(content) {
      const posts = JSON.parse(localStorage.getItem('posts')) || [];
      posts.unshift({ content, timestamp: new Date() });
      localStorage.setItem('posts', JSON.stringify(posts));
      loadPosts();
    }
  
    // Add event listener to post button
    postBtn.addEventListener('click', function() {
      if (postInput.value.trim() !== '') {
        savePost(postInput.value);
        postInput.value = '';
      }
    });
  
    // Load posts on initial load
    loadPosts();
  });
  