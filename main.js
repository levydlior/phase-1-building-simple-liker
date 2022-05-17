// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


const likeButtons = document.querySelectorAll('.like-glyph')

likeButtons.forEach(likeButton => {
  likeButton.addEventListener('click', e=> {
    mimicServerCall()
    .then(() => {

      if(likeButton.className === 'activated-heart'){
        likeButton.textContent= EMPTY_HEART
      likeButton.classList.remove('activated-heart')
      } else {
        likeButton.textContent= FULL_HEART
        likeButton.className = 'activated-heart'
      }
      
    })
    .catch(function (error) {
      const errorDiv = document.querySelector('#modal')
      errorDiv.classList.remove("hidden")
      setTimeout(() => {
        errorDiv.classList = "hidden"}, 3000)


    })
  })
})
  