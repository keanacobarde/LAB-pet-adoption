const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "http://www.theouthousers.com/images/jck//ThanosCopter/news/grumpasaur.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://images.readwrite.com/wp-content/uploads/2018/03/t-rex-dino-quiz-e1490854556549.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://www.nation.co.ke/image/view/-/4078922/highRes/1742693/-/maxw/600/-/1453yvh/-/DINO.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/12/enhanced/webdr15/anigif_enhanced-29802-1446485228-10.gif?crop=250:165;0,0&downsize=715"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "http://funnyanimalphoto.com/wp-content/uploads/2013/08/cat_caught_mouse_thegatewaypundit.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "http://funbk.s3.amazonaws.com/wp-content/uploads/2016/06/funny-cat-video-which-will-make-you-laugh-louder.jpg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "http://lsae2.iypcdn.com/static//modules/uploads/photos/language1/dino-live-22.jpg?119"
    }
  ];



//Creating Utility Functions - renderToDom and cardsOnDom
const renderToDom = (divId, html) => {
  document.querySelector(divId).innerHTML = html;
}

const cardsOnDom = (array) => {
  let domString = ''; 
  for (const pet of array) {
    domString += `<div class="card border-success mb-3" style="max-width:18rem;">
    <div class="card-header bg-transparent border-success"> ${pet.name} </div>
    <div class="card-body text-success">
    <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="card-footer bg-info-subtle border-success">${pet.type}
    </div>
    <button type="button" class="btn btn-primary" id=delete-btn-pets-${pet.id}> Delete Pet </button>
  </div>`
  }
renderToDom("#app_pets", domString); 
return domString; 
}

//Creating Button HTML 
const startButton = `<button type="button" class="btn btn-success btn-sm" id="cats">Start App</button>` 
const filterButtons = `<button type="button" class="btn btn-info btn-sm" id="cats">Cats</button><button type="button" class="btn btn-success btn-sm" id="dogs">Dogs</button> <button type="button" class="btn btn-warning btn-sm" id="dinos">Dinos</button> <button type="button" class="btn btn-danger btn-sm" id="showAll">Show All</button><button type="button" class="btn btn-info btn-sm" id="showForm">Show Form</button>`

//Creating Event Listener Functions
//Filter Pets Function 
const filterPets = (petType) => {
  const filteredPetArray = pets.filter((pet) => pet.type == petType);
  cardsOnDom(filteredPetArray); 
  }

//Creating eventListener function
//Filter for Cats 
const eventListenerFunc = () => {
    document
    .querySelector("#cats")
    .addEventListener('click', () => {
    filterPets("cat")})
//Filter for Dogs
  document
    .querySelector("#dogs")
    .addEventListener('click', () => {
      filterPets("dog")})
//Filter for Dinos 
  document
    .querySelector("#dinos")
    .addEventListener('click', () => {
      filterPets("dino")})
  //Showing All 
  document
    .querySelector("#showAll")
    .addEventListener('click', () => {
      renderToDom("#app_pets", cardsOnDom(pets)); 
    })
  //Showing Form 
  document
  .querySelector("#showForm")
  .addEventListener('click', (e) => {
    console.log(e); 
    petForm();  
  })
  //Creating Pets
  document
    .querySelector("#app_form")
    .addEventListener(("submit"), createPet);
  //Deleting Pets
  document
    .querySelector("#app_pets")
    .addEventListener('click', (e) => {
      if (e.target.id.includes("delete-btn-pets")){
        let petString; 
        petString = e.target.id;
        let petStringId; 
        petStringId = parseInt(petString[petString.length - 1]);
        let index; 
        index = petStringId - 1; 
        // console.log(pets[index]);
        pets.splice(index, 1);
        cardsOnDom(pets); 
    }}) 
  }
  
  //Creating a Form and Pushing Items to Array 
  const petForm = () => {
  let domString = ''; 
  domString = `<form>
  <div class="mb-3">
    <label for="PetName" class="form-label">Pet Name</label>
    <input type="Name" class="form-control" id="PetName" aria-describedby="PetName>
  </div>
  <div class="mb-3">
    <label for="ImageURL" class="form-label">Image URL</label>
    <input type="image link" class="form-control" id="ImageURL">
  </div>
  <div class="mb-3">
    <label for="Pet Description" class="form-label">Pet Description</label>
    <input type="description" class="form-control" id="PetDescription">
  </div>
  <div class="mb-3">
    <label for="PetType" class="form-label">Pet Type</label>
    <input type="PetType" class="form-control" id="PetType">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>`
  renderToDom("#app_form", domString); 
  }
  
  //Creating Object for Pet 
  const createPet = (e) => {
    e.preventDefault(); 
    const petObj = { 
      id: pets.length + 1,
      name: document.querySelector("#PetName").value,
      ImageURL: document.querySelector("#ImageURL").value, 
      PetDescription: document.querySelector("#PetDescription").value, 
      PetType: document.querySelector("#PetType").value 
    }
  pushingPets(petObj); 
  } 
  
  //Pushing Pets to Array from Form
  const pushingPets = (input) => {
    pets.push (
      {
        name: input.name, 
        imageURL: input.ImageURL,
        petDescription: input.PetDescription,
        type: input.PetType
      }
    )
  return document.querySelector("#app_pets").innerHTML += 
  `<div class="card border-success mb-3" style="max-width:18rem;">
      <div class="card-header bg-transparent border-success"> ${input.name} </div>
      <div class="card-body text-success">
      <img src=${input.ImageUrl} class="card-img-top" alt=${input.name}>
        <p class="card-text">${input.PetDescription}</p>
      </div>
      <div class="card-footer bg-info-subtle border-success">${input.PetType}
      </div>
    </div>`
  }

//Creating Start Button
renderToDom("#app_pets", startButton); 
//Creating eventListener to render entire page 
document
  .querySelector("#app_pets")
  .addEventListener('click', () => {
    renderToDom(".app_btns", filterButtons);
    renderToDom("#app_pets", cardsOnDom(pets));
    eventListenerFunc();  
  }) 




//
// LEGACY FUNCTIONALITY 
//

//Rendering Buttons 
// const targetBtns = document.querySelector(".app_btns");
// targetBtns.innerHTML = `<button type="button" class="btn btn-info btn-sm" id="cats">Cats</button>
// <button type="button" class="btn btn-success btn-sm" id="dogs">Dogs</button> <button type="button" class="btn btn-warning btn-sm" id="dinos">Dinos</button> <button type="button" class="btn btn-danger btn-sm" id="showAll">Show All</button><button type="button" class="btn btn-info btn-sm" id="showForm">Show Form</button>`

//Rending the start page
// renderToDom("#app_pets", cardsOnDom(pets)); 



//Event Listeners - Choosing Specific Pets and Showing All Pets 
