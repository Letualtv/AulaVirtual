/* // JavaScript
const likeButton = document.getElementById('like-button');
const likeCountElement = document.getElementById('like-count');

// Check if like count data exists in localStorage and set the count accordingly
let likeCount = JSON.parse(localStorage.getItem('likeCount')) || 0;
likeCountElement.innerText = likeCount;

// Listen for clicks on the like button and increment the like count
likeButton.addEventListener('click', () => {
    likeCount++;
    likeCountElement.innerText = likeCount;

    // Store the updated like count in localStorage
    localStorage.setItem('likeCount', JSON.stringify(likeCount));
});
 */