function addPost() {
    const postInput = document.getElementById('postInput');
    const postsContainer = document.getElementById('posts');

    if (postInput.value.trim()) {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <p>${postInput.value}</p>
            <button class="delete-btn" onclick="deletePost(this)">Delete</button>
        `;
        postsContainer.prepend(postDiv); // Add new post at the top

        postInput.value = ''; // Clear the input
    } else {
        alert("Please enter a post!");
    }
}

function deletePost(button) {
    const post = button.parentElement;
    post.remove();
}