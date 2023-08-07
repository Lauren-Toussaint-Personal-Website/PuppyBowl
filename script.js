// Use the API_URL variable to make fetch requests to the API.
// Replace the placeholder with your cohort name (ex: 2109-UNF-HY-WEB-PT)
const cohortName = "2306-GHP-ET-WEB-FT-SF";
const PLAYERS_API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2306-ghp-et-web-ft-sf/players`;
const PLAYERSBYID_API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2306-ghp-et-web-ft-sf/players/`;

const fetchAllPlayers = async () => {
  try {
    const response = await fetch(PLAYERS_API_URL);

    const result = await response.json();

    console.log(result);

    console.log(result.data.players);

    return result.data.players;

    // TODO
  } catch (error) {
    console.error(error);
  }
};

const renderPlayerList = (players) => {
  const playerContainer = document.createElement("div");
  playerContainer.className = "player-container";
  const main = document.getElementById("main");
  main.appendChild(playerContainer);

// const renderPlayerList = await fetchAllPlayers()
// console.log('renderPlayerList: ', renderPlayerList);
// playerContainer.innerHTML = playerList.innerHTML;

  players.forEach((player) => {
    const playerList = document.createElement("div");
    playerContainer.appendChild(playerList);
    playerList.classList.add("players");
    playerList.innerHTML = `
    <h2>${player.name}</h2>
    <p>${player.id}</p>
    <p>${player.status}</p>
    <p>${player.breed}</p>
    <img class="player-img" src=${player.imageUrl}></>
    <br />
    <button id="${player.name}_viewDetails" class="details-button">View Details</button>
    <button id="${player.name}_delete" class="delete-button">Delete Player</button>`;
    
    document
      .getElementById(`${player.name}_viewDetails`)
      .addEventListener("click", async () => {
      console.log(`clicked ${player.name} view ".details-button"`);

        try {

        await fetchSinglePlayer(player.id);
   } catch (error) {
console.error(error)
   }
})

     document
      .getElementById(`${player.name}_delete`)
      .addEventListener("click", async () => {
      console.log(`clicked ${player.name} view ".delete-button"`);

        try {

        await deletePlayer(player.id);
   } catch (error) {
console.error(error)

   }
      
      })
})
}

  // fetchSinglePlayer => gets data => renderSinglePLayerData(x)
     

// 
const renderSinglePlayerData = (playerData) => {
  
    const main = document.getElementById("main");
    const divSinglePlayerForm = document.createElement("div");
    main.appendChild(divSinglePlayerForm);
    const SinglePlayerForm = document.createElement("div");
    const detailsButton = SinglePlayerForm.querySelector(".details-button");
    
    divSinglePlayerForm.appendChild(SinglePlayerForm);
    SinglePlayerForm.classList.add("single_player_details");
    const playerList = document.getElementsByClassName
    SinglePlayerForm.innerHTML =`
    <p>Player Details</p>
      <p>Pup Id: ${playerData.id}</p>
      <p>Pup Name: ${playerData.name}</p>
      <p>Pup Breed: ${playerData.breed}</p>
      <p>Pup Status: ${playerData.status}</p>
    <img class="player-img" src=${playerData.imageUrl}>
      <button class="close-button">Close</button>`;
 
    const closeButton = SinglePlayerForm.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
      divSinglePlayerForm.remove();
     
    });
};
         
 

    // TODO


const addNewPlayer = async (newPup) => {
  try {
   
    const response = await fetch(PLAYERS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPup),
    })
    
  
  } catch (error) {
    console.log(error);
  }
};

// function newPlayerForm (newPlayer) {
// const newPlayerForm = document.getElementById("new-player-form")

// const newPlayerForm.addEventListener("click", async (event) => {





const addModal = () => {
const addPlayerButton = document.createElement("button");
const myModal = document.createElement("dialog");
const newPlayerDiv = document.createElement("div");
const divModalContent = document.createElement("div");
const playerContainer = document.createElement("div");
const close = document.createElement("span");
addPlayerButton.innerText = 'Add New Player'
main.appendChild(addPlayerButton)
main.appendChild(myModal) 
main.appendChild(playerContainer);

  try {
    myModal.appendChild(close);
    divModalContent.appendChild(close);
    newPlayerDiv.appendChild(close);
    myModal.appendChild(addPlayerButton);
   
    
    playerContainer.appendChild(addPlayerButton);
    playerContainer.appendChild(myModal);

        divModalContent.innerHTML = `<form class="new_player_form">
        <input type="text" name="name" id="name" />
        <label for="name">Name</label>
        </br>
        <input type="number" name="teamid" id="id" />
        <label for="id">PlayerId</label>
        </br>
        <input type="text" name="breed" id="breed" />
        <label for="breed">Breed</label>
        </br>
        <input type="text" name="status"" id="status" />
        <label for="status">Status</label>
        </br>
        </br><input type="url" name="url" id="imageUrl" /></br>
        <button type="submit">Submit</button>
        </form>`

    myModal.appendChild(newPlayerDiv);
    myModal.appendChild(divModalContent);
    newPlayerDiv.appendChild(divModalContent);
      // let addPlayerButton = document.querySelector("showModal(addPlayerButton)");
      addPlayerButton
          .addEventListener("click", function () {
            
            myModal.showModal();
      //   console.log(`clicked ${addPlayerButton} show myModal`);
        })
        
document.querySelector('.new_player_form').addEventListener('submit', (event) => {
  event.preventDefault();
  const playerName =  document.getElementById('name').value;
  const playerId =  document.getElementById('id').value;
  const playerStatus =  document.getElementById('status').value;
   const playerBreed =  document.getElementById('breed').value;
   const playerImage =  document.getElementById('imageUrl').value;
      // let myModal = document.querySelector("myM//     const name = document.getElementById("name").value;
//     const breed = document.getElementById("breed").value;
//     const image = document.getElementById("url").value;odal");
      
      // addPlayerButton.innerHTML = `${'<button onclick="document.getElementById("myModal").style.display="block" class="my-btn w3-dark-grey" style="font-size:17px;padding:12px 35px">Add Player</button>'}`;
   
addNewPlayer({
  name: playerName,
  id: playerId,  
  status: playerStatus,
  breed: playerBreed, 
  image: playerImage

  })
      });
      
      
      // let close = document.querySelector(".close");
      
      close.innerHTML = `<span>&times;</span>`;

      close.addEventListener("click", function () {
        myModal.close();
      });


    // const result = await addNewPlayer();

  } catch(error) {
    console.error(error, "For pup's sake, where is our new player?! 🐶");
  }
};

const fetchSinglePlayer = async (id) => {
  try {
    const response = await fetch (`${PLAYERS_API_URL}/${id}`);
    console.log('id: ', id);
    const singlePlayerById = await response.json();

    renderSinglePlayerData(singlePlayerById.data.player)

    console.log(singlePlayerById.data)
    
    
   
    // const main = document.getElementById("main");
    // const divSinglePlayerForm = document.createElement("div");
    // main.appendChild(divSinglePlayerForm);
    // const SinglePlayerForm = document.createElement("form");
    // const detailsButton = SinglePlayerForm.querySelector(".details-button");
    
    // divSinglePlayerForm.appendChild(SinglePlayerForm);
    // SinglePlayerForm.classList.add("single-player");
    // SinglePlayerForm.innerHTML =`<form> <label for="title">Player Details</label>
    //   </br>
    //   <label for="id">Pup Id</label>
      
    //   <label for="name">Pup Name, playerList.name</label>
    //   </br>
    //   <label for="breed">Pup Breedplayer.breed </label>
    //   </br>
    //   <label for="status">Pup Status player.status </label>
    //   </br></br>
    //   <label for="image">Pup Status player.imageUrl </label>
    //   </br></br>
    //   <button class="close-button">Close</button></form>`;
 
    // const closeButton = SinglePlayerForm.querySelector(".close-button");
    // closeButton.addEventListener("click", () => {
    //   divSinglePlayerForm.remove();
     
    }
   catch (error) {
    console.error(error);
  }
};


      
const deletePlayer = async (id) => {
    try {  
     const response = await fetch (`${PLAYERS_API_URL}/${id}`, { 
        method: 'DELETE',
      
        
      })} catch (error) {
      console.error(error);
      }

 
  };

  
       

  
const init = async () => {
  const players = await fetchAllPlayers();
  renderPlayerList(players);
 
  // addNewPlayer();
  addModal();
  // renderNewPlayerForm();
  console.log(players);
  console.log(fetchSinglePlayer);
  console.log(fetchSinglePlayer);
  console.log(renderPlayerList);
  console.log(deletePlayer);
};

if (typeof window === "undefined") {
  module.exports = {
    fetchAllPlayers,
    fetchSinglePlayer,
    addNewPlayer,
    deletePlayer,
    renderPlayerList,
    // addModal,
    fetchSinglePlayer,
  };
} else {
  init();
}
