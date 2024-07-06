function handlesearch() {
    loadingAnimationToggle(true);
    const searchElement = document.getElementById('search-input-field');
    const searchInputValue = searchElement.value;
    console.log(searchInputValue);
    loadPhone(searchInputValue);
}

function loadingAnimationToggle(isloading){
    const loadingAnimation = document.getElementById('loader-animation');
    if(isloading){
        loadingAnimation.classList.remove('hidden');
    }
    else{
        loadingAnimation.classList.add('hidden');
    }
}

const loadPhone = async(searchText) => { 
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    console.log("Server Response", res);
    const serverData = await res.json();
    displayPhone (serverData.data);

};

const displayPhone = (data) => {
    console.log(data);
    const cardContainer = document.getElementById('card-section');
    cardContainer.innerHTML = "";
    data.forEach(phone => {
        const productCard = document.createElement('div');
        productCard.classList.add("card");
        productCard.innerHTML = `
        <div class="card-image">
                    <img src=${phone.image} alt="phone image"/>
                </div>
                <h3 class="card-title">${phone.phone_name}</h3>
                <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloribus?</p>
                <div class="card-price">
                    <span>$</span>
                    <span id="card-item-price">990</span>
                </div>
                <div class="card-button">
                    <button class="btn">Show Details</button>
                </div>
        `;
        cardContainer.appendChild(productCard);
    });
    loadingAnimationToggle(false);
};