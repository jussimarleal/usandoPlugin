// This is a JavaScript file
let elemento = document.querySelector("#camera");

$(document).on("click", elemento, function(){
  navigator.camera.getPicture(onSuccess, onFail, { 
    quality: 50,
    destinationType: 1,
    MediaType: 1,
    PictureSourceType: 1,
    saveToPhotoAlbum: Camera.saveToPhotoAlbum.1
     });

function onSuccess(imageURI) {
    var image = document.getElementById('imagem');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}

});