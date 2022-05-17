const cardsEl = document.querySelector('.cards');

const key3 = [{name:'Jim Ridgeway', title:'Key 3', image:'./assets/images/scoutmaster.JPG', rank:'', position:'Scoutmaster'},
    {name:'Jon Sears', title:'Key 3', image:'./assets/images/committee-chair.JPG', rank:'', position:'Committee Chairman'},
    {name:'Cameron Haller', title:'Key 3', image:'./assets/images/charter-rep.JPG', rank:'', position:'Charter Organization Rep.'}
];

const seniorPatrol = [{name:'Brighton S.', title:'SPL & ASPL', image:'./assets/images/SPL.JPG', rank:'First Class', position:'SPL'},
    {name:'Trevor H', title:'SPL & ASPL', rank:'First Class', image:'./assets/images/ASPL.JPG', position:'ASPL'}
];

const pheonix = [{name:'Logan D.',title:'Phoenix Patrol', image:'./assets/images/phoenix.JPG', rank:'Life Scout', position:''},
    {name:'Garrett P.', title:'Phoenix Patrol', image:'./assets/images/phoenix.JPG', rank:'Eagle Scout', position:''},
    {name:'Dillen S.', title:'Phoenix Patrol', image:'./assets/images/phoenix.JPG', rank: 'Eagle Scout', position:''},
    {name:'Leo H.', title:'Pheonix Patrol', image:'./assets/images/phoenix.JPG', rank:'Eagle Scout', position:''}
];

const banananadana = [{name:'Christian H.', title:"Banananadana's Patrol", image:'./assets/images/bananas.JPG', rank:'Life Scout', position:''},
    {name:'Gavyn M.', title:"Banananadana's Patrol", image:'./assets/images/bananas.JPG', rank:'Life Scout', position:''}
];

const infernos = [{name:'Jackson C.',title:'Infernos Patrol', image:'./assets/images/infernos.png', rank:'Tenderfoot', position:''},
    {name:'Trevor H', title:'Infernos Patrol', image:'./assets/images/infernos.png', rank:'First Class', position:''},
    {name:'Brighton S.', title:'Infernos Patrol', image:'./assets/images/infernos.png', rank:'Tenderfoot', position:''}
];
    
const wetBandits = [{name:'Logan G.', title:'Wet Bandits Patrol', image:'./assets/images/wet-bandits.JPG', rank:'Scout', position:'Assistant Patrol Leader'},
    {name:'Isaac L.', title:'Wet Bandits Patrol', rank:'Tenderfoot', image:'./assets/images/wet-bandits.JPG', position:'Quartermaster'},
    {name:'Cayll L.', title:'Wet Bandits Patrol', rank:'Scout', image:'./assets/images/wet-bandits.JPG', position:''},
    {name:'Caleb L.', title:'Wet Bandits Patrol', rank:'Tenderfoot', image:'./assets/images/wet-bandits.JPG', position:'Patrol Leader'}
];

const underdogs = [{name:'Jeremy F.', title:'Underdogs Patrol', image:'./assets/images/underdogs.JPG', rank:'Scout', position:''},
    {name:'Maximilian M.', title:'Underdogs Patrol', image:'./assets/images/underdogs.JPG', rank:'Tenderfoot', position:'Patrol Leader'},
    {name:'Chris L.', title:'Underdogs Patrol', rank:'Scout', image:'./assets/images/underdogs.JPG', position:'Assistant Patrol Leader'},
    {name:'Grayson M.', title:'Underdogs Patrol', image:'./assets/images/underdogs.JPG', rank:'Scout', position:''}
];

const scoutMasters = [{name:'Blake Dysinger', title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Noah Barnes',title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Tom Dysinger', title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Matthew Hollon', title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Glen Luersman', title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'}
];

const committee = [{name:'Robert Lesher', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Fundraising'},
    {name:'Angel Grubbs', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Secretary'},
    {name:'Ceana Hollon', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:''},
    {name:'Brittany Cheadle', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Fundraising'},
    {name:'Matt Hollon', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Equipment Coordinator'},
    {name:'Dennis Mullins', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Treasurer'},
    {name:'Cid Ridgeway', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:''},
    {name:'Melinda Luersman', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Outdoors Activities Chair'},
    {name:'Jon Sears', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Chaplain'},
    {name:'Andy Luersman', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Recruitment'},
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