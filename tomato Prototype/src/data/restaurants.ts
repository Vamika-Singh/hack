export const restaurants = [
  {
    id: '1',
    name: 'The Spice Garden',
    cuisine: ['Indian', 'Chinese'],
    rating: 4.5,
    deliveryTime: '30-35 min',
    priceForTwo: 500,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    featured: true,
    menu: [
      {
        id: 'sg1',
        name: 'Butter Chicken',
        description: 'Creamy, rich curry with tender chicken pieces',
        price: 320,
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398',
        category: 'Main Course',
        veg: false,
        spicyLevel: 'medium',
        bestSeller: true
      },
      {
        id: 'sg2',
        name: 'Paneer Tikka',
        description: 'Grilled cottage cheese with spices',
        price: 280,
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0',
        category: 'Starters',
        veg: true,
        spicyLevel: 'mild',
        bestSeller: true
      },
      {
        id: 'sg3',
        name: 'Dal Makhani',
        description: 'Creamy black lentils slow-cooked overnight',
        price: 250,
        image: 'https://images.unsplash.com/photo-1626500155537-99daec8b2222',
        category: 'Main Course',
        veg: true,
        spicyLevel: 'mild',
        bestSeller: false
      },
      {
        id: 'sg4',
        name: 'Chicken Biryani',
        description: 'Fragrant basmati rice cooked with tender chicken and aromatic spices',
        price: 350,
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8',
        category: 'Main Course',
        veg: false,
        spicyLevel: 'hot',
        bestSeller: true
      },
      {
        id: 'sg5',
        name: 'Chilli Chicken',
        description: 'Indo-Chinese style spicy chicken with bell peppers',
        price: 290,
        image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e',
        category: 'Starters',
        veg: false,
        spicyLevel: 'hot',
        bestSeller: false
      },
      {
        id: 'sg6',
        name: 'Veg Manchurian',
        description: 'Deep-fried vegetable balls in a spicy, tangy sauce',
        price: 220,
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19',
        category: 'Starters',
        veg: true,
        spicyLevel: 'medium',
        bestSeller: true
      }
    ]
  },
  {
    id: '2',
    name: 'Pizza Paradise',
    cuisine: ['Italian', 'Fast Food'],
    rating: 4.3,
    deliveryTime: '25-30 min',
    priceForTwo: 600,
    image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498',
    featured: true,
    menu: [
      {
        id: 'pp1',
        name: 'Margherita Pizza',
        description: 'Classic pizza with tomato sauce and mozzarella',
        price: 299,
        image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca',
        category: 'Pizza',
        veg: true,
        bestSeller: true
      },
      {
        id: 'pp2',
        name: 'Pepperoni Pizza',
        description: 'Spicy pepperoni with extra cheese',
        price: 399,
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e',
        category: 'Pizza',
        veg: false,
        bestSeller: true
      },
      {
        id: 'pp3',
        name: 'BBQ Chicken Pizza',
        description: 'Grilled chicken with BBQ sauce and red onions',
        price: 449,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
        category: 'Pizza',
        veg: false,
        bestSeller: false
      },
      {
        id: 'pp4',
        name: 'Garlic Breadsticks',
        description: 'Freshly baked breadsticks with garlic butter',
        price: 169,
        image: 'https://images.unsplash.com/photo-1619531040576-f9416740661f',
        category: 'Sides',
        veg: true,
        bestSeller: true
      },
      {
        id: 'pp5',
        name: 'Supreme Pizza',
        description: 'Loaded with vegetables, meat, and extra cheese',
        price: 499,
        image: 'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7',
        category: 'Pizza',
        veg: false,
        bestSeller: true
      },
      {
        id: 'pp6',
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center',
        price: 129,
        image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51',
        category: 'Desserts',
        veg: true,
        bestSeller: false
      },
      {
        id: 'pp7',
        name: 'Mediterranean Pizza',
        description: 'Olives, feta, sun-dried tomatoes, and fresh herbs',
        price: 429,
        image: 'https://images.unsplash.com/photo-1576458088443-04a19bb13da6',
        category: 'Pizza',
        veg: true,
        bestSeller: true
      },
      {
        id: 'pp8',
        name: 'Iced Coffee',
        description: 'Cold brewed coffee with cream',
        price: 149,
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735',
        category: 'Beverages',
        veg: true,
        bestSeller: false
      }
    ]
  },
  {
    id: '3',
    name: 'Burger Boulevard',
    cuisine: ['American', 'Fast Food'],
    rating: 4.2,
    deliveryTime: '20-25 min',
    priceForTwo: 400,
    image: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa',
    featured: false,
    menu: [
      {
        id: 'bb1',
        name: 'Classic Cheeseburger',
        description: 'Juicy beef patty with cheddar cheese',
        price: 199,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
        category: 'Burgers',
        veg: false,
        bestSeller: true
      },
      {
        id: 'bb2',
        name: 'Veggie Supreme',
        description: 'Plant-based patty with fresh vegetables',
        price: 179,
        image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2',
        category: 'Burgers',
        veg: true,
        bestSeller: false
      },
      {
        id: 'bb3',
        name: 'Crispy Chicken Burger',
        description: 'Crispy fried chicken with special sauce',
        price: 189,
        image: 'https://images.unsplash.com/photo-1615297928064-24977384d0da',
        category: 'Burgers',
        veg: false,
        bestSeller: true
      },
      {
        id: 'bb4',
        name: 'French Fries',
        description: 'Crispy golden fries with seasoning',
        price: 99,
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877',
        category: 'Sides',
        veg: true,
        bestSeller: true
      },
      {
        id: 'bb5',
        name: 'Chicken Wings',
        description: 'Spicy buffalo wings with blue cheese dip',
        price: 249,
        image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f',
        category: 'Sides',
        veg: false,
        bestSeller: true
      },
      {
        id: 'bb6',
        name: 'Chocolate Milkshake',
        description: 'Rich and creamy chocolate shake',
        price: 149,
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699',
        category: 'Beverages',
        veg: true,
        bestSeller: false
      }
    ]
  },
  {
    id: '4',
    name: 'Asian Wok',
    cuisine: ['Chinese', 'Thai', 'Asian'],
    rating: 4.4,
    deliveryTime: '35-40 min',
    priceForTwo: 550,
    image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c',
    featured: true,
    menu: [
      {
        id: 'aw1',
        name: 'Dim Sum Platter',
        description: 'Assorted steamed dumplings with dipping sauce',
        price: 299,
        image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf',
        category: 'Starters',
        veg: false,
        bestSeller: true
      },
      {
        id: 'aw2',
        name: 'Pad Thai',
        description: 'Thai style stir-fried rice noodles with vegetables',
        price: 259,
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e',
        category: 'Main Course',
        veg: true,
        bestSeller: true
      },
      {
        id: 'aw3',
        name: 'Kung Pao Chicken',
        description: 'Spicy diced chicken with peanuts and vegetables',
        price: 289,
        image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e',
        category: 'Main Course',
        veg: false,
        bestSeller: false
      },
      {
        id: 'aw4',
        name: 'Green Curry',
        description: 'Thai green curry with coconut milk and vegetables',
        price: 279,
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd',
        category: 'Main Course',
        veg: true,
        bestSeller: true
      },
      {
        id: 'aw5',
        name: 'Bubble Tea',
        description: 'Classic milk tea with tapioca pearls',
        price: 159,
        image: 'https://images.unsplash.com/photo-1558857563-c0c3a62fd0b7',
        category: 'Beverages',
        veg: true,
        bestSeller: true
      }
    ]
  },
  {
    id: '5',
    name: 'Sweet Tooth',
    cuisine: ['Desserts', 'Beverages'],
    rating: 4.6,
    deliveryTime: '25-30 min',
    priceForTwo: 300,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814',
    featured: true,
    menu: [
      {
        id: 'st1',
        name: 'Classic Tiramisu',
        description: 'Coffee-flavored Italian dessert with mascarpone',
        price: 199,
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
        category: 'Desserts',
        veg: true,
        bestSeller: true
      },
      {
        id: 'st2',
        name: 'Red Velvet Cake',
        description: 'Layered red velvet cake with cream cheese frosting',
        price: 149,
        image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f',
        category: 'Desserts',
        veg: true,
        bestSeller: true
      },
      {
        id: 'st3',
        name: 'Mango Smoothie',
        description: 'Fresh mango blended with yogurt and honey',
        price: 129,
        image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4',
        category: 'Beverages',
        veg: true,
        bestSeller: false
      },
      {
        id: 'st4',
        name: 'Belgian Waffles',
        description: 'Crispy waffles with maple syrup and fresh berries',
        price: 179,
        image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929',
        category: 'Desserts',
        veg: true,
        bestSeller: true
      },
      {
        id: 'st5',
        name: 'Matcha Green Tea',
        description: 'Premium Japanese matcha green tea, hot or iced',
        price: 159,
        image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002',
        category: 'Beverages',
        veg: true,
        bestSeller: true
      },
      {
        id: 'st6',
        name: 'Fruit Parfait',
        description: 'Layers of yogurt, granola, and fresh fruits',
        price: 189,
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777',
        category: 'Healthy',
        veg: true,
        bestSeller: false
      }
    ]
  },
  {
    id: '6',
    name: 'Health Hub',
    cuisine: ['Healthy', 'Salads', 'Bowls'],
    rating: 4.5,
    deliveryTime: '25-30 min',
    priceForTwo: 450,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
    featured: false,
    menu: [
      {
        id: 'hh1',
        name: 'Quinoa Buddha Bowl',
        description: 'Quinoa, roasted vegetables, avocado, and tahini dressing',
        price: 279,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
        category: 'Healthy',
        veg: true,
        bestSeller: true
      },
      {
        id: 'hh2',
        name: 'Greek Salad',
        description: 'Fresh vegetables, olives, feta cheese with olive oil dressing',
        price: 229,
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
        category: 'Salads',
        veg: true,
        bestSeller: false
      },
      {
        id: 'hh3',
        name: 'Grilled Chicken Salad',
        description: 'Grilled chicken breast with mixed greens and balsamic dressing',
        price: 259,
        image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af',
        category: 'Salads',
        veg: false,
        bestSeller: true
      },
      {
        id: 'hh4',
        name: 'Protein Smoothie',
        description: 'Banana, protein powder, almond milk, and peanut butter',
        price: 169,
        image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888',
        category: 'Beverages',
        veg: true,
        bestSeller: false
      },
      {
        id: 'hh5',
        name: 'Acai Bowl',
        description: 'Acai blend topped with granola, fruits, and honey',
        price: 249,
        image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733',
        category: 'Healthy',
        veg: true,
        bestSeller: true
      }
    ]
  }
];