
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
        userImg: "assests/nattoun.jpeg",
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
        userImg: "assests/wassel.jpeg",
        content: "Allah yahdik ya Araujo ama dima Barca on top w inchalah el 9adem 5ir",
        likes: 128,
        comments: [
            { user: "You", text: "Visca el Barca" }
        ]
    },
    {
        id: 3,
        userName: "Mayara",
        userImg: "https://veggiegardenseeds.com.au/cdn/shop/products/cosmos-fizzy-white-seeds.jpg?v=1742878353&width=1080",
        content: "Be Happy",
        likes: 416,
        comments: []
    },
    {
        id: 4,
        userName: "Samsa",
        userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMTQubvxPgMHH404qfADD8irp3ukS-bmwF5w&s",
        content: "w Kima 9al el 3athim si 7amdi el 3o9 :'L ensen lbhim howa l9ari'",
        likes: 1416,
        comments: []
    },
    {
        id: 5,
        userName: "Mo2nes Sel3a b7ar 🌿",
        userImg: "assests/moe.png",
        content: "Chkoun men nebel y7ot 9alb",
        likes: 2,
        comments: [
            { user: "Wassel the Judge", text: "Mouch Ena" },

        ]
    },
    {
        id: 6,
        userName: "Kol chy",
        userImg: "assests/wassel.jpeg",
        content: "3acha el 9a2ed le 7or el watani ousema ben zittoun",
        likes: 416,
        comments: []
    },
    {
        id: 7,
        userName: "Zalabata 🦆",
        userImg: "assests/wassel.jpeg",
        content: "Batt sghir yetnazzah fel may ki sultan, w yenzel el cute level 100.",
        likes: 16,
        comments: []
    },
    {
        id: 8,
        userName: "Basmalah",
        userImg: "assests/wassel.jpeg",
        content: "el t9es el fatara hethy moch mte3 9raya mte3 rakcha fel dar weli m3aya y7ot like",
        likes: 416,
        shares : 12,
        comments: []
        
    },
    {
        id: 9,
        userName: "Bienco 🐱‍💻",
        userImg: "assests/wassel.jpeg",
        content: "Just Meow !😾",
        likes: 416,
        shares : 12,
        comments: []

    },
    {
        id: 8,
        userName: "Red Melek",
        userImg: "assests/wassel.jpeg",
        content: "",
        likes: 0,
        shares : 1,
        comments: []

    },
    {
        id: 8,
        userName: "Yessmine",
        userImg: "assests/wassel.jpeg",
        content: "tu connait que Le jaguar est le plus grand félin des Amériques et le troisième plus grand chat au monde (après le lion et le tigre).",
        likes: 751,
        shares : 89,
        comments: []

    },
    {
        id: 8,
        userName: "El 9erch 🦈",
        userImg: "assests/el 9erch.jpeg",
        content: "M a7la el Mokasarat 🥜 m3a layli dawri abtal europa",
        likes: 777,
        shares : 77,
        comments: [
            { user: "Youssef Nattoun", text: "🙌🏿 السوال هل ستبقى المكسرات دائم متوفرة؟ " },
            { user: "Aroujo 🐒", text: "1 2 3 Hala Madrid" },
        ]

    },
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
                <div class="post-header-left">
                    <img class="post-user-img" src="${post.userImg}" alt="${post.userName}">
                    <span class="post-user-name">${post.userName}</span>
                </div>
                <div class="post-header-right">
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            </div>
            <p class="post-content">${post.content}</p>

            <!-- Like + Comment + Share avec compteur -->
            <div class="post-actions">
                <button class="action-btn like-btn ${post.liked ? 'post-liked' : ''}">
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
                post.likes++; 
                post.liked = true;
                likeBtn.classList.add('post-liked');
                showNotification(`You liked ${post.userName}'s post`);
            } else {
                post.likes--; post.liked = false;
                likeBtn.classList.remove('post-liked');
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
        shares: 0,
        shared: false,
        comments: []
    };

    allPosts.unshift(newPost);        
    renderPosts();                    
    postBox.value = '';
    postBox.style.height = 'auto';
    showNotification('Post published successfully!');
    window.scrollTo({ top: 0, behavior: 'smooth' });  
});

function showNotification(msg) {
    const notif = document.createElement('div');
    notif.className = 'notification';
    notif.textContent = msg;
    document.getElementById('notifications').appendChild(notif);
    setTimeout(() => notif.remove(), 50000);
}



renderPosts();