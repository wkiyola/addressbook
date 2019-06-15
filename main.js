var arrayOfPosts='';


window.onload = function() {
}

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
function getPosts (){
  
    let data = '';
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayPost(data.results))
}

// // this function logs the results in your browsers console
// const consolePosts = () => {
//   console.log(arrayOfPosts)
// } 
const displayPost = (x) => {
  console.log(x);
    const allPosts = document.getElementById('all-posts')
    x.map((post, index) => {
      
      const div = document.createElement('div')
      div.classList.add('displaybox')
      const text = document.createTextNode(`${post.name.title}:  ${post.name.first} ${post.name.last}`)
      const image = document.createElement('img')
      image.src=`${post.picture.thumbnail}`
      div.append(image)
      div.appendChild(text)
      allPosts.append(div)

      
    })
  }
