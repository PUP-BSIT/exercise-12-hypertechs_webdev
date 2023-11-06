function addComment() {
    var name = document.getElementById('name').value;
    var commentText = document.getElementById('comment').value;

    if (name.trim() === '' || commentText.trim() === '') {
        alert('Please fill out both the fields.');
        return;
    }

    var commentList = document.getElementById('comment-list');
    var newComment = document.createElement('div');
    newComment.classList.add('comment-container'); // Add class for styling

    var userIcon = document.createElement('img');
    userIcon.src = 'images/user_icon.jpg';
    userIcon.alt = 'User Icon';
    userIcon.className = 'user-icon';

    var commentContent = document.createElement('div');
    commentContent.classList.add('comment-content');

    var nameElement = document.createElement('strong');
    nameElement.textContent = name;
    var commentElement = document.createElement('p');
    commentElement.textContent = commentText;

    commentContent.appendChild(nameElement);
    commentContent.appendChild(commentElement);

    newComment.appendChild(userIcon);
    newComment.appendChild(commentContent);

    commentList.prepend(newComment);

    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
}
