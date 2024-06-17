
document.addEventListener('DOMContentLoaded', function() {
    const sideMenuCheckbox = document.getElementById('side-menu');
    const main = document.querySelector('main');

    sideMenuCheckbox.addEventListener('change', function() {
      console.log(sideMenuCheckbox.checked)
      if (sideMenuCheckbox.checked) {
      main.classList.add('espacio');
     } else {
      main.classList.remove('espacio');
    }
  });
});


// erscrol div 




// function toggleHeaderMargin() {
//     const mm = document.querySelector('#side-menu');
//     console.log(mm.checked);
//     mm.checked ?
//      agregar_clase('espacio') 
//      :
//       eliminar_clase('espacio');
// }

// function agregar_clase() {

//     const header = document.querySelector('.header');
//     header.classList.add('espacio');
// }

// function eliminar_clase() {
//     const header = document.querySelector('.header');
//     header.classList.remove('espacio');
// }
