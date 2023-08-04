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
    playerList.innerHTML = `<h2>${player.name}</h2><p>${player.id}</p><p>${player.status}</p><p>${player.breed}</p><img class="player-img" src=${player.imageUrl}></><br /><button id="${player.name}_viewDetails" class="details-button">View Details</button><button class="delete-button">Delete Player</button>`;
    document
      .getElementById(`${player.name}_viewDetails`)
      .addEventListener("click", async () => {
      console.log(`clicked ${player.name} view ".details-button"`);
  
        try {

        await renderSinglePlayerById(player.id);
        console.log("Hello World!")
  
        } catch (error) {
console.error(error)

        }
        
  })
})
};

const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(PLAYERS_API_URL);

    const result = await response.json();

    const playerId = await result.data.players.id;

    console.log(result);

    console.log(result.data.players.id);

    return result.data.players.id;

    // TODO
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err);
  }
};

// const addNewPlayer = async (newPup) => {
//   try {
   
//     const response = await fetch (PLAYERS_API_URL+addModal?.divModalContent {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(),
//     })
    
  
//   } catch (error) {
//     console.log(error);
//   }
// };

// function newPlayerForm (newPlayer) {
// const newPlayerForm = document.getElementById("new-player-form")

// const newPlayerForm.addEventListener("click", async (event) => {

//     const name = document.getElementById("name").value;
//     const id = document.getElementById("id").value;
//     const status = document.getElementById("status").value;
//     const breed = document.getElementById("breed").value;
//     const image = document.getElementById("url").value;



// const addModal = async () => {

// const addPlayerButton = document.createElement("button");
// const myModal = document.createElement("div");
// const newPlayerDiv = document.createElement("div");
// const divModalContent = document.createElement("div");
// const close = document.createElement("span");

//   try {
    
//     let addPlayerButton = document.getElementById(".addPlayerButton");
//     let myModal = document.getElementById("myModal");
//     let main = document.getElementById("main"); 
//     let playerContainer = document.getElementById("div");
//     let newPlayerDiv = document.getElementById("newPlayerDiv");
//     let divModalContent = document.getElementById("divModalContent");
//     let close = document.getElementById("close");
    
    

  
//     onload = function () {

//     myModal.appendChild(close);
//     divModalContent.appendChild(close);
//     newPlayerDiv.appendChild(close);
//     myModal.appendChild(addPlayerButton);
   
    
//     playerContainer.appendChild(addPlayerButton);
//     playerContainer.appendChild(myModal);
//     myModal.appendChild(newPlayerDiv);
//     myModal.appendChild(divModalContent);
//     newPlayerDiv.appendChild(divModalContent);
    
//       let addPlayerButton = document.querySelector("showModal(addPlayerButton)");
//       let main = document.getElementById("main")
//       main.appendChild(addPlayerButton)
//       main.appendChild(myModal) 
//       main.appendChild(playerContainer);
//       document
//           .addEventListener("click", function () {
            
//             myModal.showModal(addPlayerButton);
//         console.log(`clicked ${addPlayerButton} show myModal`);
            
        


//       let myModal = document.querySelector("myModal");
      
//       addPlayerButton.innerHTML = `${'<button onclick="document.getElementById("myModal").style.display="block" class="my-btn w3-dark-grey" style="font-size:17px;padding:12px 35px">Add Player</button>'}`;
   
     
//         divModalContent.innerHTML = `${'<form><label for="title">Add New Player</label></br><label for="id">PlayerId</label></br><input type="number" name="id" id="id" /><label for="name">Name</label></br><input type="text" name="name" id="name" /><label for="breed">Breed</label></br><input type="text" name="breed"" id="breed" /><label for="status">Status</label></br><input type="text" name="status" id="status" /><label for="url">Image</label></br><input type="url" name="url" id="url" /></br></form>'}`;



//       });
      
      
//       let close = document.querySelector(".close");
      
//       close.innerHTML = `<span>&times;</span>`;

//       close.addEventListener("click", function () {
//         myModal.closeModal(close);
//       });
//     };


//     const result = await addNewPlayer();

//   } catch(error) {
//     console.error(error, "For pup's sake, where is our new player?! 🐶");
//   }
// };

const renderSinglePlayerById = async (id) => {
  try {
    const response = await fetch(`${PLAYERSBYID_API_URL}/${id}`);
    const singlePlayerById = await response.json(id)?.data;

    console.log(response)
    const main = document.getElementById("main");
    const divSinglePlayerForm = document.createElement("div");
    main.appendChild(divSinglePlayerForm);
    const SinglePlayerForm = document.createElement("form");

    divSinglePlayerForm.appendChild(SinglePlayerForm);
    SinglePlayerForm.classList.add("single-player");
    SinglePlayerForm.innerHTML =`<form> <label for="title">Player Details</label>
      </br>
      <label for="id">Pup Id</label>
      
      <label for="name">Pup Name${player.name}</label>
      </br>
      <label for="breed">Pup Breed${player.breed}</label>
      </br>
      <label for="status">Pup Status${player.status}</label>
      </br></br>
      <label for="image">Pup Status${player.imageUrl}</label>
      </br></br>
      <button class="close-button">Close</button></form>`;
 
    const closeButton = SinglePlayerForm.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
      divSinglePlayerForm.remove();
     
    });
  } catch (error) {
    console.error(error);
  }
};


      
const deletePlayer = async (id) => {
  const deleteButton = document.querySelector(".delete-button");
  deleteButton.addEventListener("click", async (event) => {
    try {
      const response = await fetch(`${PLAYERS_API_URL}`)({
        method: DELETE,
      });

      const deletePlayer = await response.json(id);

      const remainingPlayers = await fetchAllPlayers()
          render(remainingPlayers)

      console.log(remainingPlayers(id));
    } catch (e) {
      console.error(e);
    }


 
  });
};

  
// const deleteButton = newPlayerForm.querySelector(".delete-button");
//       deleteButton.addEventListener("click", async (event) => {

//       try {
//         const id = await deletePlayer(event.target.dataset.id);
//         await deleteButton(id);
//         const remainingPlayers = await renderAllPlayers();
//         renderPlayers(remainingPlayers);
//         newPlayerForm.appendChild(deleteButton)

//       } catch (err) {
//         console.error(err);
//       }
//     })

const init = async () => {
  const players = await fetchAllPlayers();
  renderPlayerList(players);
  // addNewPlayer();
  // addModal();
  // renderNewPlayerForm();
  console.log(players);
  console.log(fetchSinglePlayer);
  console.log(renderSinglePlayerById);
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
    renderSinglePlayerById,
  };
} else {
  init();
}
