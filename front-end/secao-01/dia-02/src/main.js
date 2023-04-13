const heroImg = document.querySelector('#hero-img');
const heroName = document.querySelector('#hero-name');
const heroBtn = document.querySelector('#hero-btn');

import Swal from 'sweetalert2'

const generateRandomNumber = () => Math.round(Math.random() * 731);

const SUPERHERO_API = `https://akabab.github.io/superhero-api/api/all.json`;

  heroBtn.addEventListener('click', () => {
    fetch(SUPERHERO_API)
    .then((response) => response.json())
    .then((data) => {
      const randomNum = generateRandomNumber();
      const heroNewName = data[randomNum].name;
      const heroNewImg = data[randomNum].images;
      const heroNewImgs = Object.assign(heroNewImg);

      heroImg.src = heroNewImgs.md;
      heroName.innerHTML = heroNewName;
    })
    // .catch((error) => alert('Erro'));
    .catch((error) => Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    }));
  });

  // Swal.fire({
  //   icon: 'error',
  //   title: 'Oops...',
  //   text: 'Something went wrong!',
  //   footer: '<a href="">Why do I have this issue?</a>'
  // })