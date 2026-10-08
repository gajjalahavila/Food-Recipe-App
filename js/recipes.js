const recipes = [

    // =====================================================
    // 8 NON-VEG RECIPES
    // =====================================================

    {
        id: 1,
        name: "Chicken 65",
        category: "Non-Veg",
        type: "Chicken",
        time: "35 min",

        image: "images/chicken65.jpg",

        ingredients: [
            "Chicken",
            "Corn flour",
            "Rice flour",
            "Ginger-garlic paste",
            "Red chilli powder",
            "Yogurt",
            "Curry leaves",
            "Lemon juice"
        ],

        steps: [
            "Cut the chicken into small pieces.",
            "Mix chicken with yogurt and spices.",
            "Add corn flour and rice flour.",
            "Marinate for 30 minutes.",
            "Deep fry until golden and crispy.",
            "Add curry leaves and serve hot."
        ]
    },


    {
        id: 2,
        name: "Butter Chicken",
        category: "Non-Veg",
        type: "Chicken",
        time: "50 min",

        image: "images/butter-chicken.jpg",

        ingredients: [
            "Chicken",
            "Butter",
            "Tomato",
            "Cream",
            "Onion",
            "Ginger-garlic paste",
            "Garam masala",
            "Kasuri methi"
        ],

        steps: [
            "Marinate chicken with yogurt and spices.",
            "Cook chicken until lightly charred.",
            "Prepare tomato and onion gravy.",
            "Add butter and spices.",
            "Add cooked chicken.",
            "Add cream and kasuri methi.",
            "Simmer and serve hot."
        ]
    },


    {
        id: 3,
        name: "Mutton Biryani",
        category: "Non-Veg",
        type: "Mutton",
        time: "75 min",

        image: "images/mutton-biryani.jpg",

        ingredients: [
            "Mutton",
            "Basmati rice",
            "Onion",
            "Tomato",
            "Yogurt",
            "Ginger-garlic paste",
            "Biryani spices",
            "Mint and coriander"
        ],

        steps: [
            "Wash and soak basmati rice.",
            "Marinate mutton with yogurt and spices.",
            "Cook mutton until tender.",
            "Add partially cooked rice.",
            "Add mint and coriander.",
            "Cover and cook on low heat.",
            "Serve hot."
        ]
    },


    {
        id: 4,
        name: "Chicken Curry",
        category: "Non-Veg",
        type: "Chicken",
        time: "45 min",

        image: "images/chicken-curry.jpg",

        ingredients: [
            "Chicken",
            "Onion",
            "Tomato",
            "Ginger-garlic paste",
            "Turmeric",
            "Red chilli powder",
            "Garam masala",
            "Coriander leaves"
        ],

        steps: [
            "Heat oil in a pan.",
            "Saute onions until golden.",
            "Add ginger-garlic paste.",
            "Add tomatoes and spices.",
            "Add chicken pieces.",
            "Add water and cook until chicken is tender.",
            "Garnish with coriander."
        ]
    },


    {
        id: 5,
        name: "Chicken Manchurian",
        category: "Non-Veg",
        type: "Chicken",
        time: "40 min",

        image: "images/chicken-manchurian.jpg",

        ingredients: [
            "Chicken",
            "Corn flour",
            "Capsicum",
            "Onion",
            "Garlic",
            "Soy sauce",
            "Chilli sauce",
            "Spring onion"
        ],

        steps: [
            "Coat chicken pieces with corn flour.",
            "Fry chicken until crispy.",
            "Saute garlic, onion and capsicum.",
            "Add soy sauce and chilli sauce.",
            "Add fried chicken.",
            "Toss everything together.",
            "Garnish with spring onion."
        ]
    },


    {
        id: 6,
        name: "Fish Fry",
        category: "Non-Veg",
        type: "Fish",
        time: "30 min",

        image: "images/fish-fry.jpg",

        ingredients: [
            "Fish fillets",
            "Red chilli powder",
            "Turmeric",
            "Ginger-garlic paste",
            "Lemon juice",
            "Rice flour",
            "Salt",
            "Oil"
        ],

        steps: [
            "Clean the fish pieces.",
            "Mix spices, lemon juice and ginger-garlic paste.",
            "Coat the fish with the marinade.",
            "Rest for 20 minutes.",
            "Coat lightly with rice flour.",
            "Shallow fry until golden.",
            "Serve hot with lemon."
        ]
    },


    {
        id: 7,
        name: "Chicken Fried Rice",
        category: "Non-Veg",
        type: "Chicken",
        time: "30 min",

        image: "images/chicken-fried-rice.jpg",

        ingredients: [
            "Cooked rice",
            "Chicken",
            "Carrot",
            "Capsicum",
            "Spring onion",
            "Soy sauce",
            "Garlic",
            "Pepper"
        ],

        steps: [
            "Cook chicken pieces until done.",
            "Saute garlic and vegetables.",
            "Add cooked chicken.",
            "Add cooked rice.",
            "Add soy sauce and pepper.",
            "Toss everything on high heat.",
            "Garnish with spring onion."
        ]
    },


    {
        id: 8,
        name: "Mutton Curry",
        category: "Non-Veg",
        type: "Mutton",
        time: "70 min",

        image: "images/mutton-curry.jpg",

        ingredients: [
            "Mutton",
            "Onion",
            "Tomato",
            "Ginger-garlic paste",
            "Turmeric",
            "Chilli powder",
            "Garam masala",
            "Coriander leaves"
        ],

        steps: [
            "Heat oil and saute onions.",
            "Add ginger-garlic paste.",
            "Add tomatoes and spices.",
            "Add mutton pieces.",
            "Add water and cook until tender.",
            "Add garam masala.",
            "Garnish with coriander."
        ]
    },


    // =====================================================
    // 7 VEGETARIAN RECIPES
    // =====================================================

    {
        id: 9,
        name: "Veg Biryani",
        category: "Vegetarian",
        type: "Veg",
        time: "50 min",

        image: "images/veg-biryani.jpg",

        ingredients: [
            "Basmati rice",
            "Carrot",
            "Beans",
            "Peas",
            "Potato",
            "Onion",
            "Biryani spices",
            "Mint"
        ],

        steps: [
            "Wash and soak rice.",
            "Saute onions and vegetables.",
            "Add biryani spices.",
            "Add partially cooked rice.",
            "Add mint and coriander.",
            "Cover and cook on low heat.",
            "Serve hot with raita."
        ]
    },


    {
        id: 10,
        name: "Palak Paneer",
        category: "Vegetarian",
        type: "Veg",
        time: "40 min",

        image: "images/palak-paneer.jpg",

        ingredients: [
            "Paneer",
            "Spinach",
            "Onion",
            "Tomato",
            "Ginger",
            "Garlic",
            "Garam masala",
            "Cream"
        ],

        steps: [
            "Blanch spinach and blend it.",
            "Saute onion, ginger and garlic.",
            "Add tomato and spices.",
            "Add spinach puree.",
            "Add paneer cubes.",
            "Add a little cream.",
            "Simmer and serve."
        ]
    },


    {
        id: 11,
        name: "Chole Masala",
        category: "Vegetarian",
        type: "Veg",
        time: "45 min",

        image: "images/chole-masala.jpg",

        ingredients: [
            "Chickpeas",
            "Onion",
            "Tomato",
            "Ginger-garlic paste",
            "Chole masala",
            "Turmeric",
            "Red chilli powder",
            "Coriander"
        ],

        steps: [
            "Soak chickpeas overnight.",
            "Pressure cook chickpeas until soft.",
            "Saute onions and ginger-garlic paste.",
            "Add tomatoes and spices.",
            "Add cooked chickpeas.",
            "Simmer for 15 minutes.",
            "Garnish with coriander."
        ]
    },


    {
        id: 12,
        name: "Veg Manchurian",
        category: "Vegetarian",
        type: "Veg",
        time: "40 min",

        image: "images/veg-manchurian.jpg",

        ingredients: [
            "Cabbage",
            "Carrot",
            "Capsicum",
            "Corn flour",
            "Garlic",
            "Soy sauce",
            "Chilli sauce",
            "Spring onion"
        ],

        steps: [
            "Mix chopped vegetables with corn flour.",
            "Make small balls.",
            "Deep fry until golden.",
            "Saute garlic and capsicum.",
            "Add soy sauce and chilli sauce.",
            "Add fried balls.",
            "Garnish with spring onion."
        ]
    },


    {
        id: 13,
        name: "Aloo Gobi",
        category: "Vegetarian",
        type: "Veg",
        time: "35 min",

        image: "images/aloo-gobi.jpg",

        ingredients: [
            "Potato",
            "Cauliflower",
            "Onion",
            "Tomato",
            "Turmeric",
            "Chilli powder",
            "Garam masala",
            "Coriander"
        ],

        steps: [
            "Cut potato and cauliflower.",
            "Heat oil and saute onion.",
            "Add tomato and spices.",
            "Add potato and cauliflower.",
            "Cover and cook until tender.",
            "Add garam masala.",
            "Garnish with coriander."
        ]
    },


    {
        id: 14,
        name: "Rajma Masala",
        category: "Vegetarian",
        type: "Veg",
        time: "50 min",

        image: "images/rajma-masala.jpg",

        ingredients: [
            "Kidney beans",
            "Onion",
            "Tomato",
            "Ginger-garlic paste",
            "Turmeric",
            "Chilli powder",
            "Garam masala",
            "Coriander"
        ],

        steps: [
            "Soak kidney beans overnight.",
            "Pressure cook until soft.",
            "Saute onion and ginger-garlic paste.",
            "Add tomato and spices.",
            "Add cooked kidney beans.",
            "Simmer until the gravy thickens.",
            "Garnish with coriander."
        ]
    },


    {
        id: 15,
        name: "Veg Pulao",
        category: "Vegetarian",
        type: "Veg",
        time: "35 min",

        image: "images/veg-pulao.jpg",

        ingredients: [
            "Basmati rice",
            "Carrot",
            "Beans",
            "Peas",
            "Onion",
            "Green chilli",
            "Whole spices",
            "Mint"
        ],

        steps: [
            "Wash and soak rice.",
            "Saute whole spices and onion.",
            "Add vegetables.",
            "Add soaked rice.",
            "Add water and salt.",
            "Cook until rice is fluffy.",
            "Garnish with mint."
        ]
    },


    // =====================================================
    // 3 DESSERTS
    // =====================================================

    {
        id: 16,
        name: "Rasmalai",
        category: "Dessert",
        type: "Dessert",
        time: "45 min",

        image: "images/rasmalai.jpg",

        ingredients: [
            "Milk",
            "Paneer",
            "Sugar",
            "Cardamom",
            "Saffron",
            "Pistachios",
            "Almonds"
        ],

        steps: [
            "Prepare soft paneer dough.",
            "Make small flat balls.",
            "Cook them in sugar syrup.",
            "Boil milk with sugar and cardamom.",
            "Add saffron and dry fruits.",
            "Place paneer balls in the milk.",
            "Chill and serve."
        ]
    },


    {
        id: 17,
        name: "Gajar Halwa",
        category: "Dessert",
        type: "Dessert",
        time: "50 min",

        image: "images/gajar-halwa.jpg",

        ingredients: [
            "Carrots",
            "Milk",
            "Sugar",
            "Ghee",
            "Cardamom",
            "Cashews",
            "Almonds"
        ],

        steps: [
            "Grate fresh carrots.",
            "Cook carrots with milk.",
            "Add sugar and continue cooking.",
            "Add ghee and cardamom.",
            "Cook until thick.",
            "Add roasted dry fruits.",
            "Serve warm."
        ]
    },


    {
        id: 18,
        name: "Jalebi",
        category: "Dessert",
        type: "Dessert",
        time: "40 min",

        image: "images/jalebi.jpg",

        ingredients: [
            "All-purpose flour",
            "Corn flour",
            "Yogurt",
            "Sugar",
            "Water",
            "Cardamom",
            "Saffron",
            "Oil"
        ],

        steps: [
            "Prepare a smooth jalebi batter.",
            "Let the batter rest.",
            "Prepare sugar syrup with cardamom.",
            "Heat oil in a pan.",
            "Pipe the batter into spiral shapes.",
            "Fry until crisp and golden.",
            "Soak in warm sugar syrup.",
            "Serve fresh."
        ]
    }

];