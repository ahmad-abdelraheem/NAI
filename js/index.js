const postBtn = document.getElementById('post-btn');
const feed = document.getElementById('posts');
postBtn.addEventListener('click', () => {
    let newPost = ` <div class="post">
                        <div class="post-header">
                            <img src="./img/profileImg.png" alt="" class="profile-img">
                            <span class="account-name">Ahmad Abdelraheem</span>
                            <span class="user-name">@ahmadabdelraheem</span>
                            <span class="time">&bull;now</span>
                        </div>
                        <div class="post-content">
                            <p>${document.getElementById('new-post').value}</p>
                            <img src="" alt="">
                        </div>
                        <div class="post-footer">
                            <div class="loves" onclick="like(this)">
                                <i class="bi bi-heart"></i>
                                <span>0</span>
                            </div>
                            <div class="comments">
                                <i class="bi bi-chat-left"></i>
                                <span>0</span>
                            </div>
                            <div class="repost">
                                <i class="bi bi-repeat"></i>
                                <span>0</span>
                            </div>
                        </div>
                    </div>`;
    feeds.innerHtml = newPost + feeds.innerHtml;
});
function test(){
    console.log('testtttt')
}














function like(e) {
    e.firstElementChild.classList.remove("bi-heart")
    e.firstElementChild.classList.add("bi-suit-heart-fill")
    e.firstElementChild.style.color = 'var(--main-color)'
    e.attributes.removeNamedItem('onclick');
    var attribute = document.createAttribute("onclick");
    attribute.value = "removeLike(this)";
    e.setAttributeNode(attribute);
}
function removeLike(e) {
    e.firstElementChild.classList.remove("bi-suit-heart-fill")
    e.firstElementChild.classList.add("bi-heart")
    e.firstElementChild.style.color = 'inherit'
    e.attributes.removeNamedItem('onclick');
    var attribute = document.createAttribute("onclick");
    attribute.value = "like(this)";
    e.setAttributeNode(attribute);
}
