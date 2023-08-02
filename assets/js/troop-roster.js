const cardsEl = document.querySelector('.cards');

const key3 = [
    {name:'Jim Ridgeway', title:'Key 3', image:'./assets/images/scoutmaster.JPG', rank:'', position:'Scoutmaster'},
    {name:'Shawn Vehr', title:'Key 3', image:'./assets/images/committee-chair.JPG', rank:'', position:'Committee Chairman'},
    {name:'Donald Craig', title:'Key 3', image:'./assets/images/charter-rep.JPG', rank:'', position:'Charter Organization Representative'}
];

const seniorPatrol = [
    {name:'Logan G.', title:'Wet Bandits Patrol', rank:'First Class', image:'./assets/images/SPL.JPG', position:'SPL'},
    {name:'Brighton S.', title:'Fancy Fishes', image:'./assets/images/ASPL.JPG', rank:'First Class', position:'ASPL'}
];

const fancyFishes = [
    {name:'Christian H.', title:"Fancy Fishes Patrol", image:'./assets/images/fancy-fishes.webp', rank:'Life Scout', position:''},
    {name:'Gavyn M.', title:"Fancy Fishes Patrol", image:'./assets/images/fancy-fishes.webp', rank:'Eagle Scout', position:'Junior Assistant Scoutmaster, Patrol Leader'},
    {name:'Brighton S.', title:'Fancy Fishes Patrol', image:'./assets/images/fancy-fishes.webp', rank:'Life Scout', position:'Chaplains Aide, Troop Guide, Assistant Patrol Leader'},
    {name:'John Y.', title:'Fancy Fishes Patrol', image:'./assets/images/fancy-fishes.webp', rank:'', position:''}
];
    
const wetBandits = [
    {name:'Logan G.', title:'Wet Bandits Patrol', image:'./assets/images/wet-bandits.JPG', rank:'First Class', position:'ASPL, Den Cheif'},
    {name:'Isaac L.', title:'Wet Bandits Patrol', rank:'Star Scout', image:'./assets/images/wet-bandits.JPG', position:'SPL, Den Cheif, Musician'},
    {name:'Caleb L.', title:'Wet Bandits Patrol', rank:'First Class', image:'./assets/images/wet-bandits.JPG', position:'Patrol Leader'},
    {name:'Chris L.', title:'Wet Bandits Patrol', rank:'First Class', image:'./assets/images/wet-bandits.JPG', position:'Den Cheif'},
    {name:'Graysen M.', title:'Wet Bandits Patrol', image:'./assets/images/wet-bandits.JPG', rank:'Second Class', position:'Librarian, Assistant Patrol Leader'},
    {name:'Grady W.', title:'Wet Bandits Patrol', image:'./assets/images/wet-bandits.JPG', rank:'First Class', position:''}
];

const fireChickens = [
    {name:'Graham W.', title:'Fire Chickens Patrol', rank:'', image:'./assets/images/fire-chickens.png', position:''},
    {name:'Brandon S.', title:'Fire Chickens Patrol', rank:'Tenderfoot', image:'./assets/images/fire-chickens.png', position:''},
    {name:'Hugh M.', title:'Fire Chickens Patrol', rank:'Scout', image:'./assets/images/fire-chickens.png', position:''},
    {name:'Kyle S.', title:'Fire Chickens Patrol', rank:'Scout', image:'./assets/images/fire-chickens.png', position:''},
    {name:'Levi E.', title:'Fire Chickens Patrol', rank:'Scout', image:'./assets/images/fire-chickens.png', position:''},
    {name:'Nicholas V.', title:'Fire Chickens Patrol', rank:'Tenderfoot', image:'./assets/images/fire-chickens.png', position:'Patrol Leader'},
    {name:'Steven W.', title:'Fire Chickens Patrol', rank:'Scout', image:'./assets/images/fire-chickens.png', position:'Assistant Patrol Leader'},
    {name:'Walter L.', title:'Fire Chickens Patrol', rank:'Scout', image:'./assets/images/fire-chickens.png', position:''},
    {name:'Chase G.', title:'Fire Chickens Patrol', rank:'Scout', image:'./assets/images/fire-chickens.png', position:''},
    {name:'Luke R.', title:'Fire Chickens Patrol', rank:'Scout', image:'./assets/images/fire-chickens.png', position:''}
];

const scoutMasters = [
    {name:'Blake Dysinger', title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Tom Dysinger', title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Glen Luersman', title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Andy Luersman', title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Ben Schmidt', title:'Assistant Scoutmaster', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Noah Barnes',title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Jon Sears', title:'Assistant Scoutmaster', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
];

const committee = [
    {name:'Nick Lesher', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'MumFest Coordinator'},
    {name:'Angel Grubbs', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Secretary aka "The Handler"'},
    {name:'Dennis Mullins', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Treasurer'},
    {name:'Tanya Mullins', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Advancement Coordinator'},
    {name:'Cid Ridgeway', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Scouting For Food Coordinator'},
    {name:'Melinda Luersman', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Recruitment Coordinator'},
    {name:'Andy Luersman', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Outdoors Activities Coordinator'},
    {name:'Glen Luersman', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Webmaster, Equipment Coordinator'},
    {name:'Shawn Vehr', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Committee Chair'}
];

function createCards(value) {
    cardsEl.innerHTML = '';
    
    for (i = 0; i < value.length; i++) {
        // const cardsContainer = document.createElement('section');
        // cardsContainer.setAttribute("class", "cards");
        // cardsEl.appendChild(cardsContainer);

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
