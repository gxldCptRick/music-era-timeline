// setting up the menu button functionality
var menuButton = document.getElementsByClassName("icon")[0],
    x;

menuButton.onclick = function () {

    x = document.getElementById("myNav");

    if (x.className === "nav") {

        x.className = "nav";

        x.className += "responsive";

    } else {

        x.className = "nav";

    }

};

// Get the modal
var modals = document.getElementsByClassName('myModal'),

    // Get the image and insert it inside the modal
    imgs = document.getElementsByClassName('myImg'),
    modalImgs = document.getElementsByClassName("img01"),
    spans = document.getElementsByClassName("close"),
    captions = document.getElementsByClassName("cap"),
    img,
    modal,
    modalImg,
    span,
    caption,
    i;

for (i = 0; i < imgs.length; i++) {

    img = imgs[i];

    modal = modals[i];

    modalImg = modalImgs[i];

    span = spans[i];

    caption = captions[i];

    (function (img, modal, modalImg, caption) {
        img.onclick = function () {
            modal.style.display = "inline-block";
            modalImg.src = this.src;
        };
    })(img, modal, modalImg, caption);

    (function (span, modal) {
        span.onclick = function () {
            modal.style.display = "none";
        }
    })(span, modal);

}
