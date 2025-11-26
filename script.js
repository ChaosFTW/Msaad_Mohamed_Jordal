
let items = document.querySelectorAll(".nav-item");

items.forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        item.classList.add("active");
    })
});


const postBox = document.getElementById("postBox");

postBox.addEventListener("input", () => {
    postBox.style.height = "auto";                     // reset height
    postBox.style.height = postBox.scrollHeight + "px"; // grow based on content
});





const postsData = [
    {
        id: 1,
        userName: "Youssef nattoun",
        userImg: "assests/wassel.jpeg",
        content: "Just launched my new project! Feeling excited 🚀",
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
        content: "Allah yahdik ya Araujo ama dima Barca on top w inchalah el 9adem 5ir 💙❤️",
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


let allPosts = [...postsData]; // coppy 3al data mte3na

const feed =document.getElementById("feed");

function renderposts(postsRend=allPosts) {
    
    feed.innerHTML="";
    //ken mafama 7ata post fel postdata
    if (postsRend.length === 0) {
        feed.innerHTML='<div class="no-results" >No Jordals for today</div>';
        return;
    }

    postsRend.forEach(post => {
        if (!post.hasOwnProperty('shares')) post.shares = 0;
        if (!post.hasOwnProperty('liked')) post.liked= false;
        if (!post.hasOwnProperty('shared')) post.shared= false;

        const postfd= document.createElement('div');
        postfd.className='postf';


        postfd.innerHTML=`
            <div class="postf-header">
                <img class="postf-user-img" src="${post.userImg}" alt="${post.userName}">
                <span class="postf-user-name">${post.userName}</span>
            </div>
            
            <p class"postf-cont">${post.content}</p>

            <div class="post-action">
                <button class="action-btn like-btn ${post.liked ? 'liked' : ''}">
                    <i class="fas fa-heart"></i>
                    <span class="count">${post.likes}</span>
                </button>

                <button class="action-btn comment-toggle">
                    <i class="fas fa-comment"></i>
                    <span class="count">${post.comments.length}</span>
                </button>

                <button class="action-btn share-btn ${post.shared ? 'shared' : ''}">
                    <i class="fas fa-share-alt"></i>
                    <span class="count">${post.shares}</span>
                </button>
            </div>

            <div class="comment-section" >
                <ul class="comment-list">
                    ${post.comments.map(c => 
                        `<li class="comment-item"><strong>${c.user}:</strong> ${c.text}</li>`
                    ).join('')}
                </u>
                <div>
                    <input type="text" class="comment-input" placeholder="Write a comment...">
                    <button class="comment-btn">Send</button>
                </div>
            </div>
        `;

        const likebtn = postEl.querySelector('.like-btn');
        const likeCount = likeBtn.querySelector('.count');

        likebtn.addEventListener('click', () => {
            if (!post.liked) {
                post.likes++; post.liked=true;
                likebtn.classList.add('liked');
            } else {
                
            }



        })

    }

    )





    
}