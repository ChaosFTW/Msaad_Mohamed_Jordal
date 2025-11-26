
let items = document.querySelectorAll(".nav-item");

items.forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        item.classList.add("active");
    })
});


const postBox = document.getElementById("postBox");

postBox.addEventListener("input", () => {
    postBox.style.height = "auto";                     
    postBox.style.height = postBox.scrollHeight + "px"; 
});





const postsData = [
    {
        id: 1,
        userName: "Youssef nattoun",
        userImg: "assests/wassel.jpeg",
        content: "Just launched my new project! Feeling excited",
        likes: 42,
        comments: [
            { user: "Bob", text: "Congrats! Looks amazing!" },
            { user: "Sara", text: "So proud of you!" }
        ]
    },
    {
        id: 2,
        userName: "Wassel the Judge",
        userImg: "assests/image-user.jpeg",
        content: "Allah yahdik ya Araujo ama dima Barca on top w inchalah el 9adem 5ir",
        likes: 128,
        comments: [
            { user: "You", text: "Visca el Barca" }
        ]
    },
    {
        id: 3,
        userName: "You",
        userImg: "assests/image-user.jpeg",
        content: "salem",
        likes: 416,
        comments: []
    }
];

let allPosts = [...postsData]; 

const feed = document.getElementById('feed');


function renderPosts(postsToShow = allPosts) {
    feed.innerHTML = '';

    if (postsToShow.length === 0) {
        feed.innerHTML = '<div class="no-results">No posts found</div>';
        return;
    }

    postsToShow.forEach(post => {
        
        if (!post.hasOwnProperty('shares')) post.shares = 0;
        if (!post.hasOwnProperty('shared')) post.shared = false;
        if (!post.hasOwnProperty('liked')) post.liked = false;

        const postEl = document.createElement('div');
        postEl.className = 'post';

        postEl.innerHTML = `
            <div class="post-header">
                <img class="post-user-img" src="${post.userImg}" alt="${post.userName}">
                <span class="post-user-name">${post.userName}</span>
            </div>
            <p class="post-content">${post.content}</p>

            <!-- Like + Comment + Share avec compteur -->
            <div class="post-actions">
                <button class="action-btn like-btn ${post.liked ? 'liked' : ''}">
                    <i class="fas fa-heart"></i>
                    <span class="count">${post.likes}</span>
                </button>

                <button class="action-btn comment-toggle">
                    <i class="fas fa-comment"></i>
                    <span class="count">${post.comments.length}</span>
                </button>

                <button class="action-btn share-btn ${post.shared ? 'shared' : ''}">
                <i class="fa-solid fa-share-from-square"></i>
                    <span class="count">${post.shares}</span>
                </button>
            </div>

            <!-- Section commentaires -->
            <div class="comment-section" style="display: none;">
                <ul class="comment-list">
                    ${post.comments.map(c => 
                        `<li class="comment-item"><strong>${c.user}:</strong> ${c.text}</li>`
                    ).join('')}
                </ul>
                <div style="display:flex; gap:8px; margin-top:10px;">
                    <input type="text" class="comment-input" placeholder="Write a comment...">
                    <button class="comment-btn"> <i class="fa-regular fa-paper-plane"></i> </button>
                </div>
            </div>
        `;

        
        const likeBtn = postEl.querySelector('.like-btn');
        const likeCount = likeBtn.querySelector('.count');
        likeBtn.addEventListener('click', () => {
            if (!post.liked) {
                post.likes++; post.liked = true;
                likeBtn.classList.add('liked');
                showNotification(`You liked ${post.userName}'s post`);
            } else {
                post.likes--; post.liked = false;
                likeBtn.classList.remove('liked');
            }
            likeCount.textContent = post.likes;
        });

        
        const commentToggle = postEl.querySelector('.comment-toggle');
        const commentSection = postEl.querySelector('.comment-section');
        const commentCount = commentToggle.querySelector('.count');
        commentToggle.addEventListener('click', () => {
            commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
        });

        
        const shareBtn = postEl.querySelector('.share-btn');
        const shareCount = shareBtn.querySelector('.count');
        shareBtn.addEventListener('click', () => {
            post.shares++;
            post.shared = true;
            shareBtn.classList.add('shared');
            shareCount.textContent = post.shares;

            
            navigator.clipboard.writeText(post.content + "\n— Shared from Jordal");
            showNotification('Post shared! Text copied to clipboard');
        });

        
        const commentInput = postEl.querySelector('.comment-input');
        const commentBtn = postEl.querySelector('.comment-btn');
        const commentList = postEl.querySelector('.comment-list');

        commentBtn.addEventListener('click', () => {
            if (commentInput.value.trim()) {
                const newComment = { user: "You", text: commentInput.value };
                post.comments.push(newComment);

                const li = document.createElement('li');
                li.className = 'comment-item';
                li.innerHTML = `<strong>You:</strong> ${commentInput.value}`;
                commentList.appendChild(li);

                commentCount.textContent = post.comments.length;
                commentInput.value = '';
                showNotification('Comment added!');
            }
        });

        feed.appendChild(postEl);
    });
}






document.getElementById('submit-btn').addEventListener('click', () => {
    const content = postBox.value.trim();
    if (!content) return;

    const newPost = {
        id: Date.now(),
        userName: "You",
        userImg: "assests/image-user.jpeg",
        content: content,
        likes: 0,
        liked: false,
        comments: []
    };

    allPosts.unshift(newPost);
    postBox.value = '';
    postBox.style.height = 'auto';


});



renderPosts();