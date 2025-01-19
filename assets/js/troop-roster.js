const cardsEl = document.querySelector('.cards');

const key3 = [
    {name:'Jim Ridgeway', title:'Key 3', image:'./assets/images/scoutmaster.JPG', rank:'', position:'Scoutmaster'},
    {name:'Angel Boeckman', title:'Key 3', image:'./assets/images/committee-chair.JPG', rank:'', position:'Committee Chairman'},
    {name:'Donald Craig', title:'Key 3', image:'./assets/images/charter-rep.JPG', rank:'', position:'Charter Organization Representative'}
];

const seniorPatrol = [
    {name:'Isaac L.', title:'Wet Bandits Patrol', rank:'Life Scout', image:'./assets/images/SPL.JPG', position:'SPL'},
    {name:'Chris L.', title:'Wet Bandits Patrol', rank:'Life Scout', image:'./assets/images/ASPL.JPG', position:'ASPL'},
];
    
const wetBandits = [
    {name:'Brighton S.', title:'Wet Bandits Patrol', image:'./assets/images/wet-bandits.JPG', rank:'Life Scout', position:''},
    {name:'John Y.', title:'Wet Bandits Patrol', image:'./assets/images/wet-bandits.JPG', rank:'Scout', position:'Outdoor Ethics Guide'},
    {name:'William K.', title:'Wet Bandits Patrol', image:'./assets/images/wet-bandits.JPG', rank:'Life Scout', position:''},
    {name:'Logan G.', title:'Wet Bandits Patrol', image:'./assets/images/wet-bandits.JPG', rank:'Life Scout', position:'Patrol Leader'},
    {name:'Isaac L.', title:'Wet Bandits Patrol', rank:'Life Scout', image:'./assets/images/wet-bandits.JPG', position:'SPL'},
    {name:'Caleb L.', title:'Wet Bandits Patrol', rank:'Life Scout', image:'./assets/images/wet-bandits.JPG', position:'Assistant Patrol Leader'},
    {name:'Chris L.', title:'Wet Bandits Patrol', rank:'Life Scout', image:'./assets/images/wet-bandits.JPG', position:'ASPL, Den Cheif'},
    {name:'Grady W.', title:'Wet Bandits Patrol', image:'./assets/images/wet-bandits.JPG', rank:'Star Scout', position:''},
    {name:'Gavin R.', title:'Wet Bandits Patrol', image:'./assets/images/wet-bandits.JPG', rank:'Second Class', position:'Quartermaster'},
    {name:'John B.', title:'Wet Bandits Patrol', rank:'', image:'./assets/images/wet-bandits.JPG', position:''},
    {name:'Jay E.', title:'Wet Bandits Patrol', rank:'Life', image:'./assets/images/wet-bandits.JPG', position:'Scribe'}
];

const fireChickens = [
    {name:'Brandon S.', title:'Fire Chickens Patrol', rank:'Life Scout', image:'./assets/images/fire-chickens.png', position:'Den Chief'},
    {name:'Hugh M.', title:'Fire Chickens Patrol', rank:'Scout', image:'./assets/images/fire-chickens.png', position:''},
    {name:'Kyle S.', title:'Fire Chickens Patrol', rank:'First Class', image:'./assets/images/fire-chickens.png', position:'Patrol Leader'},
    {name:'Levi E.', title:'Fire Chickens Patrol', rank:'Second Class', image:'./assets/images/fire-chickens.png', position:'Librarian'},
    {name:'Nicholas V.', title:'Fire Chickens Patrol', rank:'First Class', image:'./assets/images/fire-chickens.png', position:'Troop Guide'},
    {name:'Steven W.', title:'Fire Chickens Patrol', rank:'Tenderfoot', image:'./assets/images/fire-chickens.png', position:''},
    {name:'Walter L.', title:'Fire Chickens Patrol', rank:'Scout', image:'./assets/images/fire-chickens.png', position:'Historian'},
    {name:'Chase G.', title:'Fire Chickens Patrol', rank:'Tenderfoot', image:'./assets/images/fire-chickens.png', position:'Assistant Patrol Leader'},
    {name:'Luke R.', title:'Fire Chickens Patrol', rank:'Scout', image:'./assets/images/fire-chickens.png', position:''},
    {name:'Dean G.', title:'Fire Chickens Patrol', rank:'Scout', image:'./assets/images/fire-chickens.png', position:''},
];

const turtles = [
    {name:'Eli E.', title:'Turtles Patrol', rank:'Scout', image:'./assets/images/Turtles.png', position:'Assistant Patrol Leader'},
    {name:'Arthur L.', title:'Turtles Patrol', rank:'', image:'./assets/images/Turtles.png', position:''},
    {name:'Max L.', title:'Turtles Patrol', rank:'Scout', image:'./assets/images/Turtles.png', position:'Chaplains Aide'},
    {name:'Aiden L.', title:'Turtles Patrol', rank:'Tenderfoot', image:'./assets/images/Turtles.png', position:''},
    {name:'Zach R.', title:'Turtles Patrol', rank:'Scout', image:'./assets/images/Turtles.png', position:'Patrol Leader'},
    {name:'Nolan S.', title:'Turtles Patrol', rank:'Scout', image:'./assets/images/Turtles.png', position:''},
    {name:'Robbie W.', title:'Turtles Patrol', rank:'', image:'./assets/images/Turtles.png', position:''},
    {name:'Lennon T.', title:'Turtles Patrol', rank:'', image:'./assets/images/Turtles.png', position:''},
    {name:'Samuel P.', title:'Turtles Patrol', rank:'', image:'./assets/images/Turtles.png', position:''},
];

const scoutMasters = [
    {name:'Blake Dysinger', title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Tom Dysinger', title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Glen Luersman', title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Benjamin Schmitz', title:'Assistant Scoutmaster', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'James Ridgeway',title:'Assistant Scoutmasters', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Jon Sears', title:'Assistant Scoutmaster', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Derek Long', title:'Assistant Scoutmaster', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
    {name:'Matt Ernst', title:'Assistant Scoutmaster', image:'./assets/images/assist-scoutmaster.JPG', rank:'', position:'Assistant Scoutmaster'},
];

const committee = [
    {name:'Nick Lesher', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Adopt-A-Mum Coordinator'},
    {name:'Angel Boeckman', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Committee Chair'},
    {name:'Deborah Rodenberg', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Secretary'},
    {name:'Daniel Collins', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Advancement Coordinator'},
    // {name:'Melinda Luersman', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Recruitment Coordinator'},
    {name:'Andy Luersman', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Committee Member'},
    {name:'Glen Luersman', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Webmaster, Equipment Coordinator'},
    {name:'Shawn Vehr', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Treasurer'},
    {name:'Derek Long', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Cobbler Coordinator, Shopping Coordinator'},
    {name:'Heather Long', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Shopping Coordinator'},
    {name:'Marc Sharpnack', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Chaplin'},
    {name:'Ben Lambers', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Committee Member'},
    {name:'Benjamin Schmitz', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Outdoors Activities Coordinator, Transportation Coordinator'},
    {name:'Bill Kaufman', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Unit Scouter Reserve'},
    {name:'Steve Welker', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Committee Member'},
    {name:'Ryan Hurst', title:'Committee Members', image:'./assets/images/committee.JPG', rank:'', position:'Committee Member'},
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
