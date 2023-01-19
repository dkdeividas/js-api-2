// pasizymiu input, kad pasiimciau vartotojo ivesta reiksme
const country_name = document.getElementById("country_name");

// pasuzymiu mygtuka, kad iskviesti funkcija
const my_button = document.querySelector("button");
//////////////////
const img = document.querySelector('.img-container');

const getCountryInfo = async (event) => {
  event.preventDefault();
  // pasitikrinu, ar gaunu ivesta vartotojo reiksme
  console.log(country_name.value);
  const country = country_name.value;
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await res.json();
    const maindiv = document.createElement('div');
    
    if (data.status === 404) {
      const message = document.createElement('p');
      message.classList.add('message');
      message.innerText = 'Try again'
      img.appendChild(message);
    } else {
      data.map(item => {
        maindiv.classList.add('deletible');
        img.appendChild(maindiv)
        const imgg = `<img src='${item.flags.png}'></img>
                      <p>Country's name: ${item.name.common}</p>`
        maindiv.innerHTML += imgg;
      })
    }

  };


  // data.map((country) => {
  //   console.log(country.name.common);
  //   // kuriu elementa i kuri irasysiu salies pavadinima
  //   const one_country_info = document.createElement('div'); // kiekviena salis turi savo div'a
  //   const my_country_name = document.createElement('h2');
  //   // const country_continent = document.createElement('h4')
  //   const my_img = document.createElement('img');
  //   //idedu teksta, reiksme, kintamaji i sukurta elementa
  //   my_country_name.innerText = country.name.common;
  //   // country_continent.innerText = country.name.continents;
  //   my_img.src = country.flags.png;
  //   //idedu i main div'a savo sukurta elementa su contentu
  //   my_main_div.appendChild(one_country_info); // i main div'a idedam kiekvienu saliu div'us
  //   one_country_info.appendChild(my_img);
  //   one_country_info.appendChild(my_country_name);
  //   // one_country_info.appendChild(country_continent);
  
  // })


my_button.addEventListener("click", getCountryInfo);
