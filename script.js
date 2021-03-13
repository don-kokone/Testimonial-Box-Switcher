const testimonialsContainer = document.querySelector(".testimonial-container")
const testimonial = document.querySelector(".testimonial")
const userImage = document.querySelector(".user-image")
const username = document.querySelector(".username")
const role = document.querySelector(".role")

const testimonials = [{
  name: "Adolf Hitler",
  position: "Fuhrer",
  photo: "https://en.wikipedia.org/wiki/Adolf_Hitler#/media/File:Hitler_portrait_crop.jpg",
  text: "The stronger must dominate and not mate with the weaker, which would signify the sacrifice of its own higher nature. Only the born weakling can look upon this principle as cruel, and if he does so it is merely because he is of a feebler nature and narrower mind; for if such a law did not direct the process of evolution then the higher development of organic life would not be conceivable at all",
},
{
  name: "Joseph Stalin",
  position: "General Secretary of the Communist Party of the Soviet Union",
  photo: "https://en.wikipedia.org/wiki/Joseph_Stalin#/media/File:Stalin_Full_Image.jpg",
  text: "It is enough that the people know there was an election. The people who cast the votes decide nothing. The people who count the votes decide everything.",
},
]

let idx = 1;

function updateTestimonial() {
  const {
    name,
    position,
    photo,
    text
  } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = username
  role.innerHTML = position

  idx++

  if (idx > testimonials.lenght) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
