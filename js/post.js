function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(posts){
    const postsContainer = document.getElementById('posts-container');
    for(const post of posts){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        console.log(post);
        postDiv.innerHTML = `
            <h4>user-${post.userId}</h4>
            <h5>Post: ${post.title}</h5>
            <p>Post Description: ${post.body}</p>       
        `;
        postsContainer.appendChild(postDiv);
    }
}
loadPosts();