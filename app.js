const pageContent = document.querySelector('.page__container');
const registratiPage = document.querySelector('.registratiContainer');
const loggedinPage =  document.querySelector('.logged__in__container');
const mainLoginButton = document.querySelector('.main__page__button');
const mainContent = document.querySelector('.main__content');

const registratiButton = document.querySelector('.registrati__button');

const form = document.querySelector('.registratiForm');
const email = document.getElementById('formEmail');
const password = document.getElementById('formPassword');
const formButton = document.getElementById('formButton');
const userList = [];
const nome = JSON.parse(localStorage.getItem("myUser"));
const user = document.querySelector('.user');

const filmLeftArrow = document.querySelector('.films__left__arrow');
const filmRightArrow = document.querySelector('.films__right__arrow');
const serietvLeftArrow = document.querySelector('.serietv__left__arrow');
const serietvRightArrow = document.querySelector('.serietv__right__arrow');
const documentariLeftArrow = document.querySelector('.documentari__left__arrow');
const documentariRightArrow = document.querySelector('.documentari__right__arrow');

const filmContainer = document.querySelector('.films__container');
const serietvContainer = document.querySelector('.serietv__container');
const documentariContainer = document.querySelector('.documentari__container');

const apiKey = '6c85b0d73ef62d5d74f445db372820ed'
const movieImg = 'https://image.tmdb.org/t/p/w1280'

function getMovie(){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=it&page=1`)
      .then((data) => data.json())
      .then((data) =>{
        console.log(data)

        // se user esiste fa il login altrimenti apre il registrati
        mainLoginButton.addEventListener('click', function(){

            if(localStorage.getItem("myUser")){
              pageContent.style.zIndex = "1";
              loggedinPage.style.zIndex = "99999";
            }else{
                pageContent.style.zIndex = "1";
                registratiPage.style.zIndex = "99999";
            }

        })

        // registra l'utente in local stortage e poi fa il login
        registratiButton.addEventListener('click', function(e){
              e.preventDefault();
              let user = {
                nome: document.getElementById('formNome').value,
                password: document.getElementById('formPassword').value
              }
              if(user.nome.length > 0 && user.password.length > 0){

                userList.push(user)
                localStorage.setItem('myUser', JSON.stringify(userList))

                if(localStorage.getItem("myUser")){
                  pageContent.style.zIndex = "1";
                  loggedinPage.style.zIndex = "99999";
                  location.reload();
                }else{
                    pageContent.style.zIndex = "1";
                    registratiPage.style.zIndex = "99999";
                }

              }else{
                console.log('errore')
              }
            })


        user.innerHTML = nome[0].nome

        data.results.forEach((movie) =>{
          const img = document.createElement("img");
          img.classList.add('movieImg')
          img.src = movieImg + movie.poster_path

          filmContainer.appendChild(img)
        })

      })

      fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=it&page=1`)
      .then((data2) => data2.json())
      .then((data2) =>{
        console.log(data2)
        data2.results.forEach((movie) =>{
          const img2 = document.createElement("img");
          img2.classList.add('movieImg')
          img2.src = movieImg + movie.poster_path

          serietvContainer.appendChild(img2)
        })
      })

      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=it&page=1`)
      .then((data3) => data3.json())
      .then((data3) =>{
        console.log(data3)
        data3.results.forEach((movie) =>{
          const img3 = document.createElement("img");
          img3.classList.add('movieImg')
          img3.src = movieImg + movie.poster_path

          documentariContainer.appendChild(img3)
        })
      })

}


filmLeftArrow.addEventListener('click', function(){
  filmContainer.scrollLeft += 250;
})

filmRightArrow.addEventListener('click', function(){
  filmContainer.scrollLeft += -250;
})

serietvLeftArrow.addEventListener('click', function(){
  serietvContainer.scrollLeft += 250;
})

serietvRightArrow.addEventListener('click', function(){
  serietvContainer.scrollLeft += -250;
})

documentariLeftArrow.addEventListener('click', function(){
  documentariContainer.scrollLeft += 250;
})

documentariRightArrow.addEventListener('click', function(){
  documentariContainer.scrollLeft += -250;
})
