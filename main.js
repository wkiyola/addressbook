var arrayOfPosts='';


window.onload = function() {
}

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
function getPosts (){
    let data = '';
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => console.log(data))
}

// this function logs the results in your browsers console
const consolePosts = () => {
  console.log(arrayOfPosts)
}
const displayPost = () => {
    const allPosts = document.getElementById('all-posts')
    arrayOfPosts.map((post, index) => {
      const li = document.createElement('li')
      const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
      li.appendChild(text)
      allPosts.append(li)
    })
  }