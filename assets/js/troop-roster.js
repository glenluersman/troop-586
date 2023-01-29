const cardsEl = document.querySelector('.cards');

const key3 = [{name:'Jim Ridgeway', title:'Key 3', image:'./assets/images/scoutmaster.JPG', rank:'', position:'Scoutmaster'},
    {name:'Jon Sears', title:'Key 3', image:'./assets/images/committee-chair.JPG', rank:'', position:'Committee Chairman'},
    {name:'Donald Craig', title:'Key 3', image:'./assets/images/charter-rep.JPG', rank:'', position:'Charter Organization Representative'}
];

const seniorPatrol = [{name:'Isaac L.', title:'Wet Bandits Patrol', rank:'First Class', image:'./assets/images/SPL.JPG', position:'SPL'},
{name:'Logan G.', title:'Wet Bandits Patrol', image:'./assets/images/ASPL.JPG', rank:'Second Class', position:'ASPL'}
];

const fancyFishes = [{name:'Logan D.',title:'Fancy Fishes Patrol', image:'./assets/images/fancy-fishes.webp', rank:'Life Scout', position:''},
    {name:'Christian H.', title:"Fancy Fishes Patrol", image:'./assets/images/fancy-fishes.webp', rank:'Life Scout', position:''},
    {name:'Gavyn M.', title:"Fancy Fishes Patrol", image:'./assets/images/fancy-fishes.webp', rank:'Eagle Scout', position:''},
    {name:'Jackson C.',title:'Fancy Fishes Patrol', image:'./assets/images/fancy-fishes.webp', rank:'Tenderfoot', position:''},
    {name:'Trevor H', title:'Fancy Fishes Patrol', image:'./assets/images/fancy-fishes.webp', rank:'First Class', position:''},
    {name:'Brighton S.', title:'Fancy Fishes Patrol', image:'./assets/images/fancy-fishes.webp', rank:'Star Scout', position:'Chaplains Aide, Librarian'}
];
    
const wetBandits = [{name:'Logan G.', title:'Wet Bandits Patrol', image:'./assets/images/wet-bandits.JPG', rank:'Tenderfoot', position:'ASPL, Den Cheif'},
    {name:'Isaac L.', title:'Wet Bandits Patrol', rank:'First Class', image:'./assets/images/wet-bandits.JPG', position:'SPL, Den Cheif'},
    {name:'Cayll L.', title:'Wet Bandits Patrol', rank:'Scout', image:'./assets/images/wet-bandits.JPG', position:''},
    {name:'Caleb L.', title:'Wet Bandits Patrol', rank:'Second Class', image:'./assets/images/wet-bandits.JPG', position:''},
    {name:'Chris L.', title:'Wet Bandits Patrol', rank:'Tenderfoot', image:'./assets/images/wet-bandits.JPG', position:'Den Cheif'},
    {name:'Grayson M.', title:'Wet Bandits Patrol', image:'./assets/images/wet-bandits.JPG', rank:'Tenderfoot', position:''},
    {name:'Grady W.', title:'Wet Bandits Patrol', image:'./assets/images/wet-bandits.JPG', rank:'Tenderfoot', position:''}
];

const fireChickens = [
    {name:'Gentry B.', title:'Fire Chickens Patrol', rank:'', image:'./assets/images/fire-chickens.png', position:''}
];

const scoutMasters = [{name:'Blake Dysinger', title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Tom Dysinger', title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Matthew Hollon', title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Glen Luersman', title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Rick Bedwell', title:'Assistant Scoutmaster', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Noah Barnes',title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'}
];

const committee = [{name:'Robert Lesher', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Fundraising'},
    {name:'Angel Grubbs', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Secretary'},
    {name:'Brittany Cheadle', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Fundraising'},
    {name:'Matt Hollon', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Equipment Coordinator'},
    {name:'Dennis Mullins', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Treasurer'},
    {name:'Tanya Mullins', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Advancement Coordinator'},
    {name:'Cid Ridgeway', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Scouting For Food'},
    {name:'Melinda Luersman', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Outdoors Activities Chair'},
    {name:'Jon Sears', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Chaplain'},
    {name:'Andy Luersman', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Recruitment Coordinator'},
    {name:'Glen Luersman', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Webmaster'}
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
