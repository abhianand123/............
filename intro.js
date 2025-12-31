var buttonActive = document.querySelector('.button button')
buttonActive.onclick = function () {
    var boxFlower = document.querySelector('.flower-img:nth-child(1)')
    var boxFlower2 = document.querySelector('.flower-img:nth-child(2)')
    var boxFlower3 = document.querySelector('.flower-img:nth-child(3)')
    var boxFlower4 = document.querySelector('.flower-img:nth-child(4)')
    var boxFlower5 = document.querySelector('.flower-img:nth-child(5)')
    var boxFlower6 = document.querySelector('.flower-img:nth-child(6)')
    var circleActive = document.querySelector('.circle')
    var boxsliderimg1 = document.querySelector('.box-slider_img1')
    var catActive = document.querySelector('.cat')
    var numberActive = document.querySelector('.box-number')
    var buttonDisplay = document.querySelector('.box-button')
    var rhombus1 = document.querySelector('.rhombus:nth-child(1)')
    var rhombus2 = document.querySelector('.rhombus:nth-child(2)')
    var rhombusImg = document.querySelector('.rhombus-img')
    var mailActive = document.querySelector('.mail')

    boxFlower.classList.toggle("active")
    boxFlower2.classList.toggle("active")
    boxFlower3.classList.toggle("active")
    boxFlower4.classList.toggle("active")
    boxFlower5.classList.toggle("active")
    boxFlower6.classList.toggle("active")
    circleActive.classList.toggle("active")
    boxsliderimg1.classList.toggle("active")
    catActive.classList.toggle("active")
    numberActive.classList.toggle("active")
    buttonDisplay.classList.toggle("active")
    rhombus1.classList.toggle("active")
    rhombus2.classList.toggle("active")
    rhombusImg.classList.toggle("active")
    mailActive.classList.toggle("active")
}

var mailButton = document.querySelector(".mail button")
var heartButton = document.querySelector(".mail .heart")
var slider3 = document.querySelector(".slider3")
var closeSlider3 = document.querySelector(".fa-xmark")

// Function to update content
function showMessage(title, message, sender) {
    document.getElementById("name-cua-em").innerHTML = "&#129505 " + title;
    document.getElementById("message-content").innerHTML = message;
    // Update sender info - assuming the h3 is the last element in fixedContent or selecting by text if no ID
    // Since original didn't have ID for sender, let's use the structure
    var senderEl = document.querySelector(".fixedContent h3");
    if (senderEl) senderEl.innerHTML = sender;

    slider3.classList.add("active")
}

mailButton.onclick = function () {
    showMessage(
        "Thank You!",
        "As we step into 2026, I want to take a moment to express my deepest gratitude. Your guidance and wisdom have shaped me in ways words cannot fully capture. Thank you for being a light in my life.",
        "From: Abhi Anand"
    )
}

heartButton.onclick = function () {
    showMessage(
        "You're the Best!",
        "You are not just a teacher but a true inspiration. Your kindness, patience, and dedication make learning a joy. Wishing you a year as wonderful and radiant as you are!",
        "With Deepest Gratitude, Abhi Anand"
    )
}

closeSlider3.addEventListener('click', function () {
    slider3.classList.remove('active')
})


// ------audio------------
var buttonSong = document.querySelector('.button')
var mySong = document.getElementById("song")
buttonSong.onclick = function () {
    if (mySong.paused) {
        mySong.play()
    }
}