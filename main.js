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

document.getElementById("addMemberButton").addEventListener("click",function(){

  let userName = document.getElementById("name").value;
  let userRole = document.getElementById("role").value;
  let userPhoto = document.getElementById("image").value;
  
  let userObj = {
    name: userName,
    role : userRole,
    image : userPhoto
  }

  document.querySelector('.team-container').innerHTML += 
  `<div class="team-card">
      <div class="card-image">
          <img src="${userObj.image}" alt="${userObj.name}"/>
      </div>
      
      <div class="card-text">
          <h3>${userObj.name}</h3>
          <p>${userObj.role}</p>
      </div>
  </div>`;
});

for(let i = 1; i < team.length ; i++) {
    document.querySelector('.team-container').innerHTML += 
        `<div class="team-card">
            <div class="card-image">
                <img src="${team[i].image}" alt="${team[i].name}"/>
            </div>
            
            <div class="card-text">
                <h3>${team[i].name}</h3>
                <p>${team[i].role}</p>
            </div>
        </div>`;
}


