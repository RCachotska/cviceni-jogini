//console.log('funguju!');
import { Header } from './src/components/Header/Header.js'; 
import { Intro } from './src/components/Intro/Intro.js';   
import { Pose } from './src/components/Pose/Pose.js';     

const headerProps = {
  title: 'Jogíni',
  navLinks: [
    { text: 'domů', href: '#' },
    { text: 'lekce', href: '#' },
    { text: 'náš tým', href: '#' },
    { text: 'události', href: '#' },
    { text: 'kontakt', href: '#' },
  ],
};

const introProps = {
  heading: 'Vítejte mezi Jogíny',
  text: `Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
         něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
         Postupně se seznámíte se základními principy jógy, jak přístupovat k
         sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
         svoje tělo, pocity a emoce.`,
};

const poseProps = {
  src: 'img/yoga-pose.jpg',
};

const appRoot = document.getElementById('app');

// Vytvoření HTML z komponent
const pageContent = `
  ${Header(headerProps)}
  ${Intro(introProps)}
  ${Pose(poseProps)}
`;

// Vložení obsahu do #app
if (appRoot) {
  appRoot.innerHTML = pageContent;
} else {
  console.error('Element s ID "app" nebyl nalezen.');
}