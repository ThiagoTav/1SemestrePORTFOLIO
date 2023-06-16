window.addEventListener('scroll', function() {
    var nav = document.getElementById('nav');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop > 0) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
  function scrollToTop() {
    const topElement = document.getElementById('topo');
    topElement.scrollIntoView({ behavior: 'smooth' });
  }

  // Esconder todas as imagens, exceto a primeira, ao carregar a página
  window.addEventListener('load', function() {
    var imagens = document.querySelectorAll('#imagens figure');
    for (var i = 1; i < imagens.length; i++) {
      imagens[i].style.display = 'none';
    }
  });
  
  function trocarImagem(numero) {
    var imagens = document.querySelectorAll('#imagens figure');
    var botoes = document.querySelectorAll('#botoes .bolinha');

    for (var i = 0; i < imagens.length; i++) {
      imagens[i].style.display = 'none';
      botoes[i].classList.remove('selecionada');
    }

    imagens[numero - 1].style.display = 'block';
    botoes[numero - 1].classList.add('selecionada');
  }

  //esconder texto


  window.addEventListener('DOMContentLoaded', function() {
    var divTexto = document.getElementById('textoDiv');
    divTexto.classList.add('visible');
  });