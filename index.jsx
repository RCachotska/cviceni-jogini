//console.log('funguju!');
//console.log('funguju!');
import { Header } from "./components/Header.js";
import { Intro } from "./components/Intro.js";
import { Pose } from "./components/Pose.js";

const appElement = document.getElementById('app');

appElement.innerHTML = `
  ${Header({ title: 'Jogíni' })}
  ${Intro({
    heading: 'Vítejte mezi Jogíny',
    text: `Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
           něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
           Postupně se seznámíte se základními principy jógy, jak přístupovat k
           sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
           svoje tělo, pocity a emoce.`,
  })}
  ${Pose({ src: 'img/yoga-pose.jpg' })}
`;