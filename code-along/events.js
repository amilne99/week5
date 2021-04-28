// // Get a reference to the page title element from the DOM
// let pageTitleElement = document.querySelector(`.page-title`)

// // Modify the page title element's contents
// pageTitleElement.innerHTML = `Movies to watch!`

// // Get a reference to the bulleted list of movies
// let movieList = document.querySelector(`.movies-to-watch`)

// // Add an new list item to the bulleted list of movies
// movieList.insertAdjacentHTML(`beforeend`, `
//   <li>Spaceballs</li>
// `)

// // Get a reference to the image
// let image = document.querySelector(`img`)

// // Add the `border-pink-500` class to the image element
// image.classList.add(`border-pink-500`)

// Get a reference to the "click me" button based on class in HTML
let clickMeButton = document.querySelector(`.click-me`)

// Event listener for the "click me" button
  // 99% of time listening for click, async function (event) then whatever you want to happen
clickMeButton.addEventListener(`click`, async function(event){

  //Get a reference to the page title element from the DOM
  let pageTitleElement = document.querySelector(`.page-title`)
  // Modify the page title element's contents
  pageTitleElement.innerHTML = `Movies to watch!`
})

// Get a reference to the "add movie" link
let addMovieLink = document.querySelector(`.add-movie`)

// Event listener for the "add movie" link
addMovieLink.addEventListener(`click`, async function(event) {
// Prevent the link's default behaviour (going to google)
event.preventDefault()

  // Get a reference to the bulleted list of movies
 let movieList = document.querySelector(`.movies-to-watch`)

// // Add an new list item to the bulleted list of movies
 movieList.insertAdjacentHTML(`beforeend`, `
   <li>Spaceballs</li>
 `)
})

// Get a reference to the zoom image button
let zoomImageButton = document.querySelector(`.zoom-image`)

// Event listener for the "zoom image" button
zoomImageButton.addEventListener(`click`, async function(event) {
// Get a reference to the image
let image = document.querySelector(`img`)

// Add the `border-pink-500` class to the image element
image.classList.add(`border-pink-500`)

// Make the image larger
// Can use remove/add
image.classList.toggle(`w-96`)
image.classList.toggle(`w-full`)

})

let changeImageButton = document.querySelector(`.change-image`)

changeImageButton.addEventListener(`click`, async function(event) {
  let image = document.querySelector(`img`)
//Where to target and what to set it to
image.setAttribute(`src`,`../images/grogu2.jpg`)
})

// Get a reference to the "say hi" button
let sayHiButton = document.querySelector(`.say-hi`)

// Event listener for the "say hi" button
sayHiButton.addEventListener(`click`, async function(event){
  //Prevent the default behaviour
  event.preventDefault()

  // Get a reference to the input field that holds first name
  let nameInput = document.querySelector(`#first-name`)

  // Get the value from the input field
  let firstName = nameInput.value
 
  // Get a reference to the "greet" element
  let greetElement = document.querySelector(`.greet`)

  // First name should havea value
  if (firstName.length > 0 ) {

  

  // Create a sentence to put in the greet element
  let sentence = `Hi, ${firstName}. Welcome!`
  // Set the "greet" element's HTML to the sentence
  greetElement.innerHTML = sentence
} else {
  greetElement.innerHTML = ``
}
  console.log(`the form was submitted`)
})