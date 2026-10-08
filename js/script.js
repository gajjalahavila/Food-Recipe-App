document.addEventListener("DOMContentLoaded", function () {

    const recipeGrid = document.getElementById("recipeGrid");

    const searchInput = document.getElementById("searchInput");

    const searchBtn = document.getElementById("searchBtn");

    const categoryButtons =
        document.querySelectorAll(".category-btn");

    const noResults =
        document.getElementById("noResults");

    const welcomeUser =
        document.getElementById("welcomeUser");

    const loginLink =
        document.getElementById("loginLink");

    const logoutBtn =
        document.getElementById("logoutBtn");


    let currentCategory = "All";


    // =====================================
    // DISPLAY USER
    // =====================================

    const currentUser =
        localStorage.getItem("currentUser");

    if (currentUser) {

        welcomeUser.textContent =
            "Hi, " + currentUser;

        loginLink.style.display = "none";

        logoutBtn.style.display = "inline-block";
    }


    // =====================================
    // LOGOUT
    // =====================================

    if (logoutBtn) {

        logoutBtn.addEventListener("click", function () {

            localStorage.removeItem("currentUser");

            window.location.href = "index.html";

        });

    }


    // =====================================
    // DISPLAY RECIPES
    // =====================================

    function displayRecipes(recipeList) {

        recipeGrid.innerHTML = "";


        if (recipeList.length === 0) {

            noResults.style.display = "block";

            return;

        }


        noResults.style.display = "none";


        recipeList.forEach(function (recipe) {

            const card =
                document.createElement("div");

            card.className = "recipe-card";


            card.innerHTML = `

                <img
                    src="${recipe.image}"
                    alt="${recipe.name}"
                    onerror="this.src='https://via.placeholder.com/600x400?text=Recipe+Image'"
                >

                <div class="recipe-card-content">

                    <span class="tag">
                        ${recipe.category}
                    </span>

                    <h3>
                        ${recipe.name}
                    </h3>

                    <p class="recipe-meta">
                        ⏱️ ${recipe.time}
                        &nbsp; • &nbsp;
                        🍴 ${recipe.type}
                    </p>

                    <button
                        class="view-btn"
                        onclick="viewRecipe(${recipe.id})">

                        View Recipe

                    </button>

                </div>
            `;


            recipeGrid.appendChild(card);

        });

    }


    // =====================================
    // FILTER RECIPES
    // =====================================

    function filterRecipes() {

        const searchText =
            searchInput.value
                .toLowerCase()
                .trim();


        let filtered =
            recipes.filter(function (recipe) {

                const matchesCategory =
                    currentCategory === "All" ||
                    recipe.category === currentCategory;


                const matchesSearch =
                    recipe.name
                        .toLowerCase()
                        .includes(searchText) ||

                    recipe.type
                        .toLowerCase()
                        .includes(searchText) ||

                    recipe.category
                        .toLowerCase()
                        .includes(searchText);


                return matchesCategory &&
                       matchesSearch;

            });


        displayRecipes(filtered);

    }


    // =====================================
    // CATEGORY BUTTONS
    // =====================================

    categoryButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            categoryButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            currentCategory =
                button.dataset.category;


            filterRecipes();

        });

    });


    // =====================================
    // SEARCH
    // =====================================

    searchInput.addEventListener(
        "input",
        filterRecipes
    );


    searchBtn.addEventListener(
        "click",
        filterRecipes
    );


    // =====================================
    // FIRST LOAD
    // =====================================

    displayRecipes(recipes);

});


// =========================================
// VIEW RECIPE
// =========================================

function viewRecipe(id) {

    const recipe =
        recipes.find(function (item) {

            return item.id === id;

        });


    if (!recipe) {
        return;
    }


    localStorage.setItem(
        "selectedRecipe",
        JSON.stringify(recipe)
    );


    window.location.href =
        "recipe.html";
}