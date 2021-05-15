// This is a JavaScript file

 $(document).on("click", "#camera", function tirarFoto(){

     navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
     saveToPhotoAlbum: true
     });

    function onSuccess(imageURI) {
    var imagem = document.getElementById('imagem');
    imagem.src = imageURI;
    }

     function onFail(message) {
    alert('Failed because: ' + message);
  };
 });

$(document).on("click", "#salvar", function(){
    let foto = document.querySelectorAll("img");
    
});

