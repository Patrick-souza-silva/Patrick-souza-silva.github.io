$(document).ready(function () {

  //Função para adicionar as fotos
  const baseImages = {
    todas: ["nos.jpg", "teddy.jpg","nos1.jpg","nos2.jpg","nos3.jpg","nos4.jpg","nos5.jpg","nos6.jpg","teddy1.jpg","teddy2.jpg","teddy3.jpg","teddy4.jpg","teddy5.jpg","teddy6.jpg","flora.jpg",,"flora1.jpg","flora2.jpg","flora3.jpg","flora4.jpg","flora5.jpg","flora6.jpg"],
    nos: ["nos.jpg","nos1.jpg","nos2.jpg","nos3.jpg","nos4.jpg","nos5.jpg","nos6.jpg",],
    teddy: ["teddy.jpg","teddy1.jpg","teddy2.jpg","teddy3.jpg","teddy4.jpg","teddy5.jpg","teddy6.jpg",],
    flora: ["flora.jpg","flora1.jpg","flora2.jpg","flora3.jpg","flora4.jpg","flora5.jpg","flora6.jpg"],
  };

  function loadImages(categoria) {  
    const images = baseImages[categoria];
    const boxImages = $('body').find('.box-images');
    
    //empty tem a única função de limpar 
    boxImages.empty('')
    images.forEach(img => {
        console.log(img);
        boxImages.append('<div class="imagem-item"><img src="assets/'+img+'"></div>');
    });

  }

  //vai fazer abrir um pop-up ao clicar no botão
  $(".button").click(function () {
    // alert($(this).data('categoria'));

    //IF que vai "desclicar" o botão selecionado
    if ($(this).hasClass("active")) {
      $("body").find("button").removeClass("active")

    } else {
      //Não vai deixar selecionar dois botões ao mesmo tempo
      $("body").find(".button").removeClass("active");
      //vai alterar o backgorund do botão ao selecionar
      $(this).addClass("active");
    }

    //Função pra chamar as imagens
    const categoria = $(this).data("categoria");    
    loadImages(categoria);
  });
});
