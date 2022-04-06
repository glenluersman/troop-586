const cardsEl = document.getElementById('cards-container');
let roster = [
    {name:'Logan D.',title:'Scout',patrol:'Phoenix',position:''},
    {name:'Mason H.', title:'Scout', patrol:'Phoenix', position:''},
    {name:'Garrett P.', title:'Scout', patrol:'Phoenix', position:''},
    {name:'Dillen S.', title:'Scout', patrol:'Phoenix', position:''},
    {name:'Leo H.', title:'Scout', patrol:'Pheonix', position:''},
    {name:'Christian H.', title:'Scout', patrol:"The Banananadana's", position:''},
    {name:'Gavyn M.', title:'Scout', patrol:"The Banananadana's", position:''},
    {name:'Jackson C.',title:'Scout',patrol:'Infernos',position:''},
    {name:'Gavin G.', title:'Scout', patrol:'Infernos', position:''},
    {name:'Trevor H', title:'Scout', patrol:'Infernos', position:'ASPL'},
    {name:'Brighton S.', title:'Scout', patrol:'Infernos', position:'SPL'},
    {name:'Logan G.', title:'Scout', patrol:'Wet Bandits', position:''},
    {name:'Isaac L.', title:'Scout', patrol:'Wet Bandits', position:'Quartermaster'},
    {name:'Cayll L.', title:'Scout', patrol:'Wet Bandits', position:''},
    {name:'Caleb L.', title:'Scout', patrol:'Wet Bandits', position:'Patrol Leader'},
    {name:'Jeremy F.', title: 'Scout', patrol: 'New', position:''},
    {name:'Maximilian M.', title:'Scout', patrol:'New', position:'Patrol Leader'},
    {name:'Chris L.', title:'Scout', patrol:'New', position:'Assistant Patrol Leader'},
    {name:'Grayson M.', title:'Scout', patrol:'New', position:''},
    {name:'Jim Ridgeway', title:'Scoutmaster', patrol:'OSPP', position:'Scoutmaster'},
    {name:'Blake Dysinger', title:'Assistant Scoutmaster', patrol:'OSPP', position:''},
    {name:'Noah Barnes',title:'Assistant Scoutmaster',patrol:'OSPP',position:''},
    {name:'Tom Dysinger', title:'Assistant Scoutmaster', patrol:'OSPP', position:''},
    {name:'Matthew Hollon', title:'Assistant Scoutmaster', patrol:'OSPP', position:'Equipment Coordinator'},
    {name:'Glen Luersman', title:'Assistant Scoutmaster', patrol:'OSPP', position:'Webmaster'},
    {name:'Robert Lesher', title:'Committee Member', patrol:'OSPP', position:'Fundraising'},
    {name:'Angel Grubbs', title:'Committee Member', patrol:'OSPP', position:'Secretary'},
    {name:'Ceana Hollon', title:'Committee Member', patrol:'OSPP', position:''},
    {name:'Brittany Cheadle', title:'Committee Member', patrol:'OSPP', position:'Fundraising'},
    {name:'Cameron Haller', title:'Committee Member', patrol:'OSPP', position:'Charter Organization Rep.'},
    {name:'Dennis Mullins', title:'Committee Member', patrol:'OSPP', position:'Treasurer'},
    {name:'Cid Ridgeway', title:'Committee Member', patrol:'OSPP', position:''},
    {name:'Melinda Luersman', title:'Committee Member', patrol:'OSPP', position:'Outdoors Activities Chair'},
    {name:'Jon Sears', title:'Committee Member', patrol:'OSPP', position:'Committee Chairman'},
    {name:'Andy Luersman', title:'Committee Member', patrol:'OSPP', position:'Recruitment'}
            ]

function createCards() {
    for (i = 0; i < roster.length; i++) {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        cardsEl.appendChild(card);
        
        const cardContent = document.createElement("div");
        cardContent.setAttribute("class", "content");
        card.appendChild(cardContent);
        
        const cardImg = document.createElement("img");
        cardImg.setAttribute("class", "img");
        cardImg.setAttribute("src", "./assets/images/boy-scout-logo.jpg");
        cardContent.appendChild(cardImg);
        
        const name = document.createElement("h4");
        name.setAttribute("class", "name");
        name.innerHTML = roster[i].name;
        cardContent.appendChild(name);
        
        const title = document.createElement("p");
        title.setAttribute("class", "title");
        title.innerHTML = roster[i].title;
        cardContent.appendChild(title);
        
        const patrol = document.createElement("p");
        patrol.setAttribute("class", "patrol");
        patrol.innerHTML = roster[i].patrol;
        cardContent.appendChild(patrol);
        
        const position = document.createElement("p");
        position.setAttribute("class", "position");
        position.innerHTML = roster[i].position;
        cardContent.appendChild(position);
    }
};

createCards()