const cardsEl = document.querySelector('.cards');

const key3 = [
    {name:'Jim Ridgeway', title:'Key 3', image:'./assets/images/scoutmaster.JPG', rank:'', position:'Scoutmaster'},
    {name:'Deborah Rodenberg', title:'Key 3', image:'./assets/images/committee-chair.JPG', rank:'', position:'Committee Chairman'},
    {name:'Jamie Hull', title:'Key 3', image:'./assets/images/charter-rep.JPG', rank:'', position:'Charter Organization Representative'}
];

const seniorPatrol = [
    {name:'Kyle S.', title:'Fire Chickens Patrol', rank:'Star Scout', image:'./assets/images/SPL.JPG', position:'SPL'},
    {name:'Zach R.', title:'Fire Chickens Patrol', rank:'Life Scout', image:'./assets/images/ASPL.JPG', position:'ASPL'},
];
    
const wetBandits = [
    {name:'Brighton S.', title:'Wet Bandits Patrol', image:'./assets/images/wet-bandits.JPG', rank:'Eagle Scout', position:''},
    {name:'Logan G.', title:'Wet Bandits Patrol', image:'./assets/images/wet-bandits.JPG', rank:'Eagle Scout', position:''},
    {name:'Isaac L.', title:'Wet Bandits Patrol', rank:'Eagle Scout', image:'./assets/images/wet-bandits.JPG', position:''},
    {name:'Caleb L.', title:'Wet Bandits Patrol', rank:'Eagle Scout', image:'./assets/images/wet-bandits.JPG', position:''},
    {name:'Chris L.', title:'Wet Bandits Patrol', rank:'Eagle Scout', image:'./assets/images/wet-bandits.JPG', position:''},
    {name:'Grady W.', title:'Wet Bandits Patrol', image:'./assets/images/wet-bandits.JPG', rank:'Life Scout', position:''},
    {name:'Gavin R.', title:'Wet Bandits Patrol', image:'./assets/images/wet-bandits.JPG', rank:'Star Scout', position:''},
    {name:'John B.', title:'Wet Bandits Patrol', rank:'Scout', image:'./assets/images/wet-bandits.JPG', position:''},
];

const fireChickens = [
    {name:'Brandon S.', title:'Fire Chickens Patrol', rank:'Life Scout', image:'./assets/images/fire-chickens.png', position:''},
    {name:'Kyle S.', title:'Fire Chickens Patrol', rank:'Star Scout', image:'./assets/images/fire-chickens.png', position:''},
    {name:'Levi E.', title:'Fire Chickens Patrol', rank:'First Class', image:'./assets/images/fire-chickens.png', position:''},
    {name:'Nicholas V.', title:'Fire Chickens Patrol', rank:'First Class', image:'./assets/images/fire-chickens.png', position:''},
    {name:'Walter L.', title:'Fire Chickens Patrol', rank:'Scout', image:'./assets/images/fire-chickens.png', position:''},
    {name:'Luke R.', title:'Fire Chickens Patrol', rank:'Scout', image:'./assets/images/fire-chickens.png', position:''},
    {name:'Dean G.', title:'Fire Chickens Patrol', rank:'Scout', image:'./assets/images/fire-chickens.png', position:''},
];

const turtles = [
    {name:'Eli E.', title:'Turtles Patrol', rank:'First Class', image:'./assets/images/Turtles.png', position:''},
    {name:'Arthur L.', title:'Turtles Patrol', rank:'Second Class', image:'./assets/images/Turtles.png', position:''},
    {name:'Max L.', title:'Turtles Patrol', rank:'First Class', image:'./assets/images/Turtles.png', position:''},
    {name:'Aiden L.', title:'Turtles Patrol', rank:'Life Scout', image:'./assets/images/Turtles.png', position:''},
    {name:'Zach R.', title:'Turtles Patrol', rank:'Life Scout', image:'./assets/images/Turtles.png', position:''},
    {name:'Nolan S.', title:'Turtles Patrol', rank:'Star Scout', image:'./assets/images/Turtles.png', position:''},
];

const nuggies = [
    {name:'Noah C.', title:'Dino Nuggies Patrol', rank:'Tenderfoot', image:'./assets/images/Dino_Nuggies.webp', position:''},
    {name:'Luke K.', title:'Dino Nuggies Patrol', rank:'Second Class', image:'./assets/images/Dino_Nuggies.webp', position:''},
    {name:'Ujval K.', title:'Dino Nuggies Patrol', rank:'Second Class', image:'./assets/images/Dino_Nuggies.webp', position:''},
    {name:'Levi L.', title:'Dino Nuggies Patrol', rank:'Scout', image:'./assets/images/Dino_Nuggies.webp', position:''},
    {name:'Chris T.', title:'Dino Nuggies Patrol', rank:'First Class', image:'./assets/images/Dino_Nuggies.webp', position:''},
    {name:'Jacob F.', title:'Dino Nuggies Patrol', rank:'First Class', image:'./assets/images/Dino_Nuggies.webp', position:''},
    {name:'Colton R.', title:'Dino Nuggies Patrol', rank:'Tenderfoot', image:'./assets/images/Dino_Nuggies.webp', position:''},
];

const gummy = [
    {name:'Adhwaith E.', title:'Gummy Bears Patrol', rank:'First Class', image:'./assets/images/Gummy.webp', position:''},
    {name:'Bentley H.', title:'Gummy Bears Patrol', rank:'Scout', image:'./assets/images/Gummy.webp', position:''},
    {name:'Beckett H.', title:'Gummy Bears Patrol', rank:'', image:'./assets/images/Gummy.webp', position:''},
    {name:'Bowen H.', title:'Gummy Bears Patrol', rank:'', image:'./assets/images/Gummy.webp', position:''},
    {name:'Gabriel L.', title:'Gummy Bears Patrol', rank:'', image:'./assets/images/Gummy.webp', position:''},
    {name:'Havish P.', title:'Gummy Bears Patrol', rank:'', image:'./assets/images/Gummy.webp', position:''},  
];

const scoutMasters = [
    {name:'Glen Luersman', title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Benjamin Schmitz', title:'Assistant Scoutmaster', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Derek Long', title:'Assistant Scoutmaster', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Matt Ernst', title:'Assistant Scoutmaster', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'David Toro', title:'Assistant Scoutmaster', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
];

const committee = [
    {name:'Nick Lesher', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Adopt-A-Mum Coordinator'},
    {name:'Deborah Rodenberg', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Committee Chair'},
    {name:'Daniel Collins', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Advancement Coordinator'},
    {name:'Glen Luersman', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Webmaster'},
    {name:'Shawn Vehr', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Treasurer'},
    {name:'Derek Long', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Cobbler Coordinator, Shopping Coordinator'},
    {name:'Marc Sharpnack', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Chaplin'},
    {name:'Matt Ernst', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Equipment Coordinator'},
    {name:'Ben Lambers', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Committee Member'},
    {name:'Benjamin Schmitz', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Outdoors Activities Coordinator, Transportation Coordinator'},
];

function createCards(value) {
    cardsEl.innerHTML = '';
    
    for (i = 0; i < value.length; i++) {
       
        const card = document.createElement("article");
        card.setAttribute("class", "card");
        cardsEl.appendChild(card);
        
        const cardImg = document.createElement("img");
        cardImg.setAttribute("src", value[i].image);
        card.appendChild(cardImg);
        
        const name = document.createElement("h4");
        name.innerHTML = value[i].name;
        card.appendChild(name);
        
        const currentRank = document.createElement("p");
        currentRank.innerHTML = value[i].rank;
        card.appendChild(currentRank);
        
        const position = document.createElement("p");
        position.innerHTML = value[i].position;
        card.appendChild(position);
    }
};

createCards()
