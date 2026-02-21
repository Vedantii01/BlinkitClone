let generatedOTP = "";
let cart = [];
let currentProducts = [];

// ---------------- DATA (UNCHANGED) ----------------
const data = {
  fruits: {
    title: "Fruits & Vegetables",
    subs: {
      "Fresh Fruits": [
        { name: "Apple", price: 120, image: "images/fruits/apple.jpg" },
        { name: "Banana", price: 40, image: "images/fruits/bananas.jpg" },
        { name: "Orange", price: 60, image: "images/fruits/orange.webp" },
        { name: "Mango", price: 150, image: "images/fruits/mango.jpg" },
        { name: "Grapes", price: 90, image: "images/fruits/grape.jpg" },
        { name: "Papaya", price: 50, image: "images/fruits/papaya.webp" },
        { name: "Kiwi", price: 80, image: "images/fruits/kiwi.jpg" },
        { name: "Guava", price: 70, image: "images/fruits/guava.avif" },
        {
          name: "Pineapple",
          price: 100,
          image: "images/fruits/pineapple.jpg",
        },
        {
          name: "Strawberry",
          price: 180,
          image: "images/fruits/strawberry.webp",
        },
        {
          name: "Watermelon",
          price: 40,
          image: "images/fruits/watermelon.jpg",
        },
        { name: "Chikoo", price: 60, image: "images/fruits/chikoo.webp" },
      ],
      "Fresh Vegetables": [
        { name: "Potato", price: 30, image: "images/fruits/potato.jpg" },
        { name: "Tomato", price: 40, image: "images/fruits/cherry.webp" },
        { name: "Onion", price: 35, image: "images/fruits/potato.jpg" },
        { name: "Cabbage", price: 35, image: "images/fruits/red.webp" },
        { name: "Carrot", price: 45, image: "images/fruits/potato.jpg" },
        { name: "Brinjal", price: 45, image: "images/fruits/brinjal.jpg" },
        { name: "Cauliflower", price: 50, image: "images/fruits/cabbage.webp" },
        { name: "Beans", price: 60, image: "images/fruits/beans.jpeg" },
        { name: "Capsicum", price: 70, image: "images/fruits/bell.jpg" },
        { name: "Cucumber", price: 30, image: "images/fruits/zucchini.jpg" },
        { name: "Pumpkin", price: 40, image: "images/fruits/pumpkin.jpeg" },
        { name: "Bottle Gourd", price: 35, image: "images/fruits/beans.jpeg" },
      ],
      "Leafy Greens": [
        { name: "Spinach", price: 25, image: "images/fruits/spinach.jpg" },
        { name: "Coriander", price: 15, image: "images/fruits/kale.webp" },
        { name: "Mint", price: 15, image: "images/fruits/mint.webp" },
        {
          name: "Dill Leaves",
          price: 20,
          image: "images/fruits/dill_leaves.avif",
        },
        { name: "Spring Onion", price: 30, image: "images/fruits/spring.webp" },
        { name: "Lettuce", price: 40, image: "images/fruits/lettuce.webp" },
        { name: "Celery", price: 50, image: "images/fruits/celery.jpg" },
        { name: "Amaranth", price: 25, image: "images/fruits/amaranth.avif" },
        { name: "Fenugreek", price: 20, image: "images/fruits/spinach.jpg" },
        { name: "Parsley", price: 45, image: "images/fruits/celery.jpg" },
        {
          name: "Mustard Greens",
          price: 30,
          image: "images/fruits/mustard.jpg",
        },
        { name: "Kale", price: 60, image: "images/fruits/kale.webp" },
      ],
      Exotics: [
        { name: "Broccoli", price: 120, image: "images/fruits/boccoli.jpg" },
        { name: "Zucchini", price: 90, image: "images/fruits/zucchini.jpg" },
        { name: "Red Cabbage", price: 80, image: "images/fruits/red.webp" },
        { name: "Avocado", price: 160, image: "images/fruits/avocado.jpg" },
        { name: "Asparagus", price: 140, image: "images/fruits/asparagus.jpg" },
        {
          name: "Cherry Tomato",
          price: 100,
          image: "images/fruits/cherry.webp",
        },
        { name: "Baby Corn", price: 70, image: "images/fruits/baby.webp" },
        {
          name: "Iceberg Lettuce",
          price: 90,
          image: "images/fruits/lettuce.webp",
        },
        { name: "Leek", price: 110, image: "images/fruits/spring.webp" },
        {
          name: "Bell Pepper Yellow",
          price: 130,
          image: "images/fruits/bell.jpg",
        },
        {
          name: "Bell Pepper Red",
          price: 130,
          image: "images/fruits/bell.jpg",
        },
        { name: "Brussels Sprouts", price: 150, image: "images/fruits/sp.jpg" },
      ],
      Seasonal: [
        { name: "Jamun", price: 120, image: "images/fruits/jamun.webp" },
        { name: "Litchi", price: 140, image: "images/fruits/litchi.webp" },
        {
          name: "Custard Apple",
          price: 90,
          image: "images/fruits/custard.jpg",
        },
        { name: "Sweet Corn", price: 60, image: "images/fruits/baby.webp" },
        { name: "Green Peas", price: 70, image: "images/fruits/sp.jpg" },
        { name: "Tinda", price: 40, image: "images/fruits/tinda.jpg" },
        { name: "Raw Mango", price: 50, image: "images/fruits/mango.jpg" },
        { name: "Drumstick", price: 60, image: "images/fruits/drum.avif" },
        { name: "Jackfruit", price: 80, image: "images/fruits/jack.jpg" },
        { name: "Surti Papdi", price: 70, image: "images/fruits/surti.jpg" },
        { name: "Cluster Beans", price: 55, image: "images/fruits/beans.jpeg" },
        { name: "Snake Gourd", price: 45, image: "images/fruits/zucchini.jpg" },
      ],
    },
  },

  dairy: {
    title: "Dairy, Bread & Eggs",
    subs: {
      Milk: [
        { name: "Toned Milk", price: 60, image: "images/dairy/toned.webp" },
        {
          name: "Full Cream Milk",
          price: 70,
          image: "images/dairy/full.webp",
        },
        { name: "Cow Milk", price: 65, image: "images/dairy/cow.jpg" },
        { name: "Buffalo Milk", price: 75, image: "images/dairy/buffalo.webp" },
        { name: "Almond Milk", price: 120, image: "images/dairy/almond.webp" },
        { name: "Soy Milk", price: 90, image: "images/dairy/soy.webp" },
      ],
      Bread: [
        { name: "White Bread", price: 40, image: "images/dairy/bread.png" },
        {
          name: "Brown Bread",
          price: 45,
          image: "images/dairy/brownbread.png",
        },
        {
          name: "Multigrain Bread",
          price: 55,
          image: "images/dairy/multigrain.png",
        },
        { name: "Burger Buns", price: 50, image: "images/dairy/buns.png" },
        { name: "Pav", price: 35, image: "images/dairy/pav.png" },
        {
          name: "Garlic Bread",
          price: 80,
          image: "images/dairy/garlicbread.png",
        },
      ],
      Eggs: [
        { name: "Eggs (6 pcs)", price: 45, image: "images/dairy/eggs6.png" },
        { name: "Eggs (12 pcs)", price: 85, image: "images/dairy/eggs12.png" },
        { name: "Brown Eggs", price: 95, image: "images/dairy/browneggs.png" },
        {
          name: "Country Eggs",
          price: 110,
          image: "images/dairy/countryeggs.png",
        },
        {
          name: "Boiled Eggs",
          price: 60,
          image: "images/dairy/boiledeggs.png",
        },
        {
          name: "Organic Eggs",
          price: 130,
          image: "images/dairy/organiceggs.png",
        },
      ],
      Butter: [
        { name: "Salted Butter", price: 120, image: "images/dairy/butter.png" },
        {
          name: "Unsalted Butter",
          price: 125,
          image: "images/dairy/unsalted.png",
        },
        { name: "Cheese Slice", price: 140, image: "images/dairy/cheese.png" },
        {
          name: "Mozzarella",
          price: 180,
          image: "images/dairy/mozzarella.png",
        },
        { name: "Paneer", price: 95, image: "images/dairy/paneer.png" },
        { name: "Cream", price: 70, image: "images/dairy/cream.png" },
      ],
      Yogurt: [
        { name: "Curd Cup", price: 35, image: "images/dairy/curd.png" },
        { name: "Greek Yogurt", price: 90, image: "images/dairy/greek.png" },
        {
          name: "Flavored Yogurt",
          price: 50,
          image: "images/dairy/flavored.png",
        },
        { name: "Buttermilk", price: 25, image: "images/dairy/buttermilk.png" },
        { name: "Lassi", price: 40, image: "images/dairy/lassi.png" },
        {
          name: "Probiotic Curd",
          price: 80,
          image: "images/dairy/probiotic.png",
        },
      ],
    },
  },

  drinks: {
    title: "Cold Drinks & Juices",
    subs: {
      "Soft Drinks": [],
      Juices: [],
      "Energy Drinks": [],
      "Soda & Mixers": [],
      Water: [],
    },
  },

  snacks: {
    title: "Snacks & Munchies",
    subs: {
      Chips: [
        { name: "Potato Chips", price: 30, image: "images/snacks/potato.webp" },
        { name: "Nachos", price: 50, image: "images/snacks/nachos.webp" },
        { name: "Banana Chips", price: 45, image: "images/snacks/banana.jpg" },
        { name: "Corn Chips", price: 60, image: "images/snacks/corn.jpg" },
        {
          name: "Tortilla Chips",
          price: 70,
          image: "images/snacks/tortilla.webp",
        },
        { name: "Cheese Chips", price: 55, image: "images/snacks/cheese.jpg" },
      ],
      Biscuits: [
        { name: "Marie", price: 25, image: "images/snacks/marie.jpg" },
        { name: "Good Day", price: 30, image: "images/snacks/good.webp" },
        { name: "Hide & Seek", price: 35, image: "images/snacks/hide.webp" },
        { name: "Oreo", price: 40, image: "images/snacks/oreo.jpg" },
        { name: "Bourbon", price: 35, image: "images/snacks/bourbon.jpg" },
        { name: "Milk Bikis", price: 30, image: "images/snacks/milk.webp" },
      ],
      Chocolates: [
        { name: "Dairy Milk", price: 45, image: "images/snacks/dairy.jpg" },
        { name: "KitKat", price: 30, image: "images/snacks/kit.webp" },
        { name: "5 Star", price: 25, image: "images/snacks/star.webp" },
        { name: "Perk", price: 20, image: "images/snacks/perk.jpg" },
        { name: "Munch", price: 20, image: "images/snacks/munch.webp" },
        { name: "Ferrero", price: 120, image: "images/snacks/ferrero.jpg" },
      ],
      Namkeen: [
        { name: "Bhujia", price: 40, image: "images/snacks/bhujiya.jpg" },
        { name: "Chivda", price: 50, image: "images/snacks/chivda.webp" },
        { name: "Mixture", price: 45, image: "images/snacks/mixture.jpeg" },
        { name: "Sev", price: 35, image: "images/snacks/sev.webp" },
        { name: "Peanuts", price: 30, image: "images/snacks/peanuts.webp" },
        { name: "Murukku", price: 60, image: "images/snacks/murukku.jpg" },
      ],
      Popcorn: [
        {
          name: "Butter Popcorn",
          price: 40,
          image: "images/snacks/butter.jpg",
        },
        {
          name: "Cheese Popcorn",
          price: 50,
          image: "images/snacks/cheese2.webp",
        },
        {
          name: "Caramel Popcorn",
          price: 60,
          image: "images/snacks/caramel.webp",
        },
        {
          name: "Salted Popcorn",
          price: 35,
          image: "images/snacks/salted.jpg",
        },
        { name: "Spicy Popcorn", price: 45, image: "images/snacks/spicy.webp" },
        {
          name: "Classic Popcorn",
          price: 30,
          image: "images/snacks/caramel.webp",
        },
      ],
    },
  },

  breakfast: {
    title: "Breakfast & Instant Food",
    subs: {
      Cereals: [
        {
          name: "Cornflakes",
          price: 120,
          image: "images/breakfast/cornflakes.webp",
        },
        { name: "Chocos", price: 150, image: "images/breakfast/chocos.png" },
        { name: "Oats", price: 110, image: "images/breakfast/oats.jpg" },
        { name: "Muesli", price: 180, image: "images/breakfast/muesli.jpg" },
        {
          name: "Honey Loops",
          price: 160,
          image: "images/breakfast/honey.webp",
        },
        {
          name: "Wheat Flakes",
          price: 130,
          image: "images/breakfast/wheat.webp",
        },
      ],
      InstantMeals: [
        { name: "Poha Cup", price: 50, image: "images/breakfast/poha.png" },
        { name: "Upma Mix", price: 55, image: "images/breakfast/upma.png" },
        { name: "Idli Mix", price: 60, image: "images/breakfast/idli.png" },
        { name: "Dosa Mix", price: 65, image: "images/breakfast/dosa.png" },
        {
          name: "Vermicelli",
          price: 45,
          image: "images/breakfast/vermicelli.png",
        },
        { name: "Porridge", price: 70, image: "images/breakfast/porridge.png" },
      ],
      Noodles: [
        { name: "Maggi", price: 15, image: "images/breakfast/maggi.png" },
        { name: "Yippee", price: 20, image: "images/breakfast/yippee.png" },
        {
          name: "Top Ramen",
          price: 25,
          image: "images/breakfast/topramen.png",
        },
        {
          name: "Cup Noodles",
          price: 45,
          image: "images/breakfast/cupnoodles.png",
        },
        {
          name: "Veg Noodles",
          price: 30,
          image: "images/breakfast/vegnoodles.png",
        },
        {
          name: "Hakka Noodles",
          price: 35,
          image: "images/breakfast/hakka.png",
        },
      ],
      Pasta: [
        { name: "Penne Pasta", price: 90, image: "images/breakfast/penne.png" },
        { name: "Macaroni", price: 85, image: "images/breakfast/macaroni.png" },
        {
          name: "Spaghetti",
          price: 110,
          image: "images/breakfast/spaghetti.png",
        },
        { name: "Fusilli", price: 95, image: "images/breakfast/fusilli.png" },
        {
          name: "Instant Pasta",
          price: 50,
          image: "images/breakfast/instant_pasta.png",
        },
        {
          name: "Cheese Pasta",
          price: 60,
          image: "images/breakfast/cheese_pasta.png",
        },
      ],
      Oats: [
        {
          name: "Plain Oats",
          price: 120,
          image: "images/breakfast/plain_oats.png",
        },
        {
          name: "Masala Oats",
          price: 140,
          image: "images/breakfast/masala_oats.png",
        },
        {
          name: "Fruit Oats",
          price: 160,
          image: "images/breakfast/fruit_oats.png",
        },
        {
          name: "Instant Oats",
          price: 130,
          image: "images/breakfast/instant_oats.png",
        },
        {
          name: "Rolled Oats",
          price: 150,
          image: "images/breakfast/rolled.png",
        },
        {
          name: "Steel Cut Oats",
          price: 180,
          image: "images/breakfast/steelcut.png",
        },
      ],
    },
  },

  sweets: {
    title: "Sweet Tooth",
    subs: {
      Chocolates: [],
      "Ice Creams": [],
      "Indian Sweets": [],
      Cakes: [],
      Candies: [],
    },
  },

  bakery: {
    title: "Bakery & Biscuits",
    subs: {
      Biscuits: [
        { name: "Marie", price: 25, image: "images/snacks/marie.jpg" },
        { name: "Good Day", price: 30, image: "images/snacks/good.webp" },
        { name: "Hide & Seek", price: 35, image: "images/snacks/hide.webp" },
        { name: "Oreo", price: 40, image: "images/snacks/oreo.jpg" },
        { name: "Bourbon", price: 35, image: "images/snacks/bourbon.jpg" },
        { name: "Milk Bikis", price: 30, image: "images/snacks/milk.webp" },
      ],
      Cakes: [
        {
          name: "Chocolate Cake",
          price: 250,
          image: "images/bakery/chocolate_cake.png",
        },
        {
          name: "Vanilla Cake",
          price: 220,
          image: "images/bakery/vanilla_cake.png",
        },
        {
          name: "Black Forest",
          price: 300,
          image: "images/bakery/black_forest.png",
        },
        {
          name: "Red Velvet",
          price: 350,
          image: "images/bakery/red_velvet.png",
        },
        {
          name: "Pineapple Cake",
          price: 240,
          image: "images/bakery/pineapple.png",
        },
        {
          name: "Fruit Cake",
          price: 260,
          image: "images/bakery/fruit_cake.png",
        },
      ],
      Breads: [
        {
          name: "White Bread",
          price: 40,
          image: "images/bakery/white_bread.png",
        },
        {
          name: "Brown Bread",
          price: 45,
          image: "images/bakery/brown_bread.png",
        },
        {
          name: "Multigrain Bread",
          price: 55,
          image: "images/bakery/multigrain.png",
        },
        {
          name: "Garlic Bread",
          price: 80,
          image: "images/bakery/garlic_bread.png",
        },
        { name: "Burger Buns", price: 50, image: "images/bakery/buns.png" },
        { name: "Pav", price: 35, image: "images/bakery/pav.png" },
      ],
      Pastries: [
        {
          name: "Chocolate Pastry",
          price: 60,
          image: "images/bakery/choco_pastry.png",
        },
        {
          name: "Butterscotch Pastry",
          price: 65,
          image: "images/bakery/butterscotch.png",
        },
        {
          name: "Pineapple Pastry",
          price: 55,
          image: "images/bakery/pine_pastry.png",
        },
        {
          name: "Strawberry Pastry",
          price: 70,
          image: "images/bakery/strawberry.png",
        },
        {
          name: "Vanilla Pastry",
          price: 50,
          image: "images/bakery/vanilla_pastry.png",
        },
        {
          name: "Red Velvet Pastry",
          price: 80,
          image: "images/bakery/red_pastry.png",
        },
      ],
      Rusks: [
        { name: "Milk Rusk", price: 45, image: "images/bakery/milk_rusk.png" },
        { name: "Elaichi Rusk", price: 50, image: "images/bakery/elaichi.png" },
        {
          name: "Butter Rusk",
          price: 55,
          image: "images/bakery/butter_rusk.png",
        },
        {
          name: "Wheat Rusk",
          price: 60,
          image: "images/bakery/wheat_rusk.png",
        },
        { name: "Crispy Rusk", price: 40, image: "images/bakery/crispy.png" },
        { name: "Toast Rusk", price: 45, image: "images/bakery/toast.png" },
      ],
    },
  },

  staples: {
    title: "Atta, Rice & Dal",
    subs: {
      Atta: [],
      Rice: [],
      "Dal & Pulses": [],
      Flours: [],
      "Poha & Sooji": [],
    },
  },
  sauces: {
    title: "Sauces & Spreads",
    subs: {
      Ketchup: [],
      Mayonnaise: [],
      "Cooking Sauces": [],
      "Chutneys & Pickles": [],
      "Jams & Spreads": [],
    },
  },
  meat: {
    title: "Chicken, Meat & Fish",
    subs: {
      Chicken: [],
      Mutton: [],
      Fish: [],
      Seafood: [],
      "Cold Cuts": [],
    },
  },
  baby: {
    title: "Baby Care",
    subs: {
      Diapers: [],
      Wipes: [],
      "Baby Food": [],
      "Baby Bath": [],
      "Baby Accessories": [],
    },
  },
  pharma: {
    title: "Pharma & Wellness",
    subs: {
      "OTC Medicines": [],
      "Health Supplements": [],
      "Personal Hygiene": [],
      "Medical Devices": [],
      "First Aid": [],
    },
  },
  cleaning: {
    title: "Cleaning Essentials",
    subs: {
      "Floor Cleaners": [],
      "Dish Wash": [],
      "Laundry Care": [],
      "Toilet Cleaners": [],
      "Cleaning Tools": [],
    },
  },
  home: {
    title: "Home & Office",
    subs: {
      "Home Decor": [],
      "Kitchen Essentials": [],
      "Office Supplies": [],
      "Storage & Organizers": [],
      "Electrical Items": [],
    },
  },
  personal: {
    title: "Personal Care",
    subs: {
      "Skin Care": [],
      "Hair Care": [],
      "Oral Care": [],
      "Bath & Body": [],
      Grooming: [],
    },
  },
  pet: {
    title: "Pet Care",
    subs: {
      "Pet Food": [],
      "Pet Grooming": [],
      "Pet Health": [],
      "Pet Toys": [],
      "Pet Accessories": [],
    },
  },
  masala: {
    title: "Masala, Oil & More",
    subs: {
      Spices: [
        {
          name: "Turmeric Powder",
          price: 40,
          image: "images/masala/turmeric.webp",
        },
        {
          name: "Red Chilli Powder",
          price: 55,
          image: "images/masala/red.jpeg",
        },
        {
          name: "Coriander Powder",
          price: 50,
          image: "images/masala/coriander.jpg",
        },
        { name: "Garam Masala", price: 65, image: "images/masala/garam.webp" },
        { name: "Cumin Seeds", price: 45, image: "images/masala/cumin.webp" },
        {
          name: "Mustard Seeds",
          price: 35,
          image: "images/masala/mustard.jpg",
        },
      ],
      Oils: [
        {
          name: "Sunflower Oil",
          price: 140,
          image: "images/masala/sunflower.jpg",
        },
        {
          name: "Groundnut Oil",
          price: 160,
          image: "images/masala/ground.webp",
        },
        {
          name: "Mustard Oil",
          price: 150,
          image: "images/masala/mustard2.jpeg",
        },
        { name: "Olive Oil", price: 280, image: "images/masala/olive.webp" },
        {
          name: "Rice Bran Oil",
          price: 170,
          image: "images/masala/rice.webp",
        },
        {
          name: "Coconut Oil",
          price: 190,
          image: "images/masala/coconut.webp",
        },
      ],
      SaltSugar: [
        { name: "Iodized Salt", price: 20, image: "images/masala/salt.png" },
        { name: "Rock Salt", price: 30, image: "images/masala/rock_salt.png" },
        { name: "Sugar", price: 45, image: "images/masala/sugar.png" },
        {
          name: "Brown Sugar",
          price: 55,
          image: "images/masala/brown_sugar.png",
        },
        { name: "Jaggery", price: 60, image: "images/masala/jaggery.png" },
        {
          name: "Powdered Sugar",
          price: 40,
          image: "images/masala/powder_sugar.png",
        },
      ],
      ReadyMasala: [
        {
          name: "Pav Bhaji Masala",
          price: 60,
          image: "images/masala/pavbhaji.png",
        },
        { name: "Chole Masala", price: 65, image: "images/masala/chole.png" },
        { name: "Sambar Masala", price: 70, image: "images/masala/sambar.png" },
        {
          name: "Biryani Masala",
          price: 75,
          image: "images/masala/biryani.png",
        },
        { name: "Paneer Masala", price: 60, image: "images/masala/paneer.png" },
        {
          name: "Chicken Masala",
          price: 80,
          image: "images/masala/chicken.png",
        },
      ],
      Ghee: [
        { name: "Cow Ghee", price: 320, image: "images/masala/cow_ghee.png" },
        {
          name: "Buffalo Ghee",
          price: 350,
          image: "images/masala/buffalo_ghee.png",
        },
        {
          name: "Organic Ghee",
          price: 420,
          image: "images/masala/organic_ghee.png",
        },
        { name: "Desi Ghee", price: 380, image: "images/masala/desi.png" },
        { name: "Jar Ghee", price: 300, image: "images/masala/jar.png" },
        {
          name: "Premium Ghee",
          price: 450,
          image: "images/masala/premium.png",
        },
      ],
    },
  },
};

// ---------------- CATEGORY INIT ----------------
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".category").forEach((cat) => {
    cat.addEventListener("click", () => {
      document
        .querySelectorAll(".category")
        .forEach((c) => c.classList.remove("active"));
      cat.classList.add("active");
      const key = cat.dataset.key;
      if (data[key]) loadMainCategory(key);
    });
  });

  loadMainCategory("fruits");
  updateAccountUI();
});

// ---------------- LOAD MAIN CATEGORY ----------------
function loadMainCategory(key) {
  const category = data[key];
  document.getElementById("mainCategoryTitle").innerText = category.title;

  const subList = document.getElementById("subCategoryList");
  subList.innerHTML = "";

  Object.keys(category.subs).forEach((sub, i) => {
    const li = document.createElement("li");
    li.innerText = sub;
    if (i === 0) li.classList.add("active");
    li.onclick = () => {
      document
        .querySelectorAll(".sub-category li")
        .forEach((l) => l.classList.remove("active"));
      li.classList.add("active");
      currentProducts = category.subs[sub];
      loadProducts(currentProducts);
    };
    subList.appendChild(li);
  });

  currentProducts = category.subs[Object.keys(category.subs)[0]];
  loadProducts(currentProducts);
}

// ---------------- LOAD PRODUCTS ----------------
function loadProducts(products) {
  const box = document.getElementById("productList");
  box.innerHTML = "";

  products.forEach((p) => {
    const item = cart.find((i) => i.name === p.name);

    box.innerHTML += `
      <div class="product-card">
        <img src="${p.image}">
        <div class="product-name">${p.name}</div>
        <div class="price-add">
          <span>₹${p.price}</span>
          ${
            item
              ? qtyHTML(p.name, item.qty)
              : `<button class='add-btn' onclick='addToCart("${p.name}",${p.price},"${p.image}")'>ADD</button>`
          }
        </div>
      </div>`;
  });
}

function qtyHTML(name, qty) {
  return `<div class='qty-box'>
    <button onclick='changeQty("${name}",-1)'>−</button>
    <span>${qty}</span>
    <button onclick='changeQty("${name}",1)'>+</button>
  </div>`;
}

// ---------------- CART LOGIC ----------------
function addToCart(name, price, image) {
  const item = cart.find((i) => i.name === name);
  if (item) item.qty++;
  else cart.push({ name, price, image, qty: 1 });

  updateCartCount();
  loadProducts(currentProducts);
  loadCart();
}

function changeQty(name, delta) {
  const item = cart.find((i) => i.name === name);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter((i) => i.name !== name);

  updateCartCount();
  loadProducts(currentProducts);
  loadCart();
}

function updateCartCount() {
  document.getElementById("cartCount").innerText = cart.reduce(
    (s, i) => s + i.qty,
    0
  );
}

function loadCart() {
  const box = document.getElementById("cartItems");
  if (!box) return;
  box.innerHTML = "";

  let total = 0;
  let count = 0;

  cart.forEach((i) => {
    total += i.price * i.qty;
    count += i.qty;

    box.innerHTML += `
      <div class='cart-item'>
        <img src='${i.image}'>
        <div>
          <h5>${i.name}</h5>
          <p>₹${i.price}</p>
        </div>
        ${qtyHTML(i.name, i.qty)}
      </div>`;
  });

  document.getElementById("itemsTotal").innerText = `₹${total}`;
  document.getElementById("grandTotal").innerText = `₹${total + 2}`;
  document.getElementById("checkoutTotal").innerText = `₹${total + 2}`;
  document.getElementById(
    "cartItemCount"
  ).innerText = `Shipment of ${count} items`;
}

// ---------------- LOGIN ----------------
function sendOTP() {
  const m = document.getElementById("mobileNumber").value;
  if (m.length !== 10) return alert("Invalid number");
  generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
  console.log("OTP:", generatedOTP);
  document.getElementById("otpSection").classList.remove("hidden");
}

function verifyOTP() {
  if (document.getElementById("otpInput").value === generatedOTP) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem(
      "mobile",
      document.getElementById("mobileNumber").value
    );
    updateAccountUI();
    closeLogin();
  } else alert("Wrong OTP");
}

function updateAccountUI() {
  const m = localStorage.getItem("mobile");
  if (m) {
    loginBtn.classList.add("hidden");
    accountBtn.classList.remove("hidden");
    userMobile.innerText = m;
  }
}

function logout() {
  localStorage.clear();
  location.reload();
}
/* ================= ACCOUNT TOGGLE ================= */
function toggleAccount() {
  const menu = document.getElementById("accountMenu");
  if (!menu) return;

  menu.classList.toggle("hidden");
}

/* ================= CART OPEN / CLOSE ================= */
function openCart() {
  const cart = document.getElementById("cartPanel");
  const overlay = document.getElementById("cartOverlay");

  if (cart) cart.style.right = "0";
  if (overlay) overlay.style.display = "block";

  loadCart();
}

function closeCart() {
  const cart = document.getElementById("cartPanel");
  const overlay = document.getElementById("cartOverlay");

  if (cart) cart.style.right = "-420px";
  if (overlay) overlay.style.display = "none";
}
function openLocationModal() {
  document.getElementById("locationOverlay").classList.remove("hidden");
}

function closeLocationModal() {
  document.getElementById("locationOverlay").classList.add("hidden");
}

/* Detect using browser */
function detectLocation() {
  if (!navigator.geolocation) {
    alert("Geolocation not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(() => {
    document.getElementById("locationText").innerText =
      "Detected location nearby";
    closeLocationModal();
  });
}

/* Manual search */
function manualLocation(e) {
  if (e.key === "Enter") {
    const value = e.target.value.trim();
    if (value !== "") {
      document.getElementById("locationText").innerText = value;
      closeLocationModal();
    }
  }
}
