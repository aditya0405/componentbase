// di tangkap dl ,
// element mana yang di injext

// menggunakan operator logika

import Navbar from './component/Navbar.js';
import Hero from './component/Hero.js'; 
import About from './component/About.js'

document.getElementById('root').innerHTML = 
`
${Navbar()}
${Hero()}
${About()}
`;

// bisa sperti ini , bisa sperti di atas
// let main = document.getElementById('root')
// main.innerHTML += `
// ${Navbar()};
// ${Hero()};

// `;

// let navbar = document.getElementById("root");
// navbar.innerHTML += "<h3> Jvalley </h3>"
// navbar.innerHTML += `

// <h3 class="brand"> Jvalley </h3>


//     <ul class="menu">

//         <li class="menu_item">
//             <a href="/">Home</a>
//         </li>
        
//         <li class="menu_item">
//             <a href="about.html">About</a>
//         </li>
    
//         <li class="menu_item">
//             <a href="gallery.html">Gallery</a>
//         </li>
    
//         <li class="menu_item">
//             <a href="contact.html">Contact</a>
//         </li>

    
//     </ul>


// `;

// let section = document.getElementById("menu")
// section.innerHTML = "<p>Paragraf</p>"
// console.log(navbar);