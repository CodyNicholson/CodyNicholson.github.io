function parallax()
    {
      var prlx_lyr_1 = document.getElementById('prlx_lyr_1');
      var prlx_lyr_2 = document.getElementById('prlx_lyr_2');
      prlx_lyr_1.style.top = (window.pageYOffset/3) + 'px';
      prlx_lyr_2.style.top = -(window.pageYOffset/5) + 'px';
      prlx_lyr_2.style.marginBottom = prlx_lyr_2.style.top;
    }
window.addEventListener("scroll", parallax, false);
