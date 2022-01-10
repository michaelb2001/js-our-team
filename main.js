let team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

  for(let i = 1; i < team.length ; i++) {
   
        createDomCard( team[i] )        
}

function createDomCard( cardObj )
{
  document.querySelector('.team-container').innerHTML += 
        `<div class="team-card">
            <div class="card-image">
                <img src="img/${cardObj.image}" alt="${cardObj.name}"/>
            </div>
            
            <div class="card-text">
                <h3>${cardObj.name}</h3>
                <p>${cardObj.role}</p>
            </div>
        </div>`;
}

document.getElementById("addMemberButton").addEventListener("click",function(){

  let userName = document.getElementById("name").value;
  let userRole = document.getElementById("role").value;
  let userPhoto = document.getElementById("image").value;
  
  let userObj = {
    name: userName,
    role : userRole,
    image : userPhoto
  }

  createDomCard(userObj);
});



