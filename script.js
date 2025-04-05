document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('splash-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('splash-screen').style.display = 'none';
            document.getElementById('landing-page').classList.remove('hidden');
            initializeInventory();
            loadRegisteredUsers();
        }, 1000);
    }, 3000);
});

function showPage(pageId) {
    let allContainers = document.querySelectorAll(".container");
    allContainers.forEach(container => container.classList.add("hidden"));
    document.getElementById(pageId).classList.remove("hidden");
}

function startVoice() {
    if ('webkitSpeechRecognition' in window || 'speechRecognition' in window) {
        const recognition = new (window.webkitSpeechRecognition || window.SpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onresult = (event) => {
            const speechResult = event.results[0][0].transcript.toLowerCase();
            console.log('Voice Input:', speechResult);
            processVoiceCommand(speechResult);
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            alert('Speech recognition failed. Please try again.');
        };

        recognition.start();
    } else {
        alert('Speech recognition is not supported in your browser.');
    }
}

let registeredUsers = [];

function loadRegisteredUsers() {
    const users = localStorage.getItem('registeredUsers');
    if (users) {
        registeredUsers = JSON.parse(users);
    }
}

function saveRegisteredUsers() {
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
}

function processVoiceCommand(command) {
    if (command.includes('register')) {
        showPage('register-page');
        speak('Register page opened. Please provide your details.');
    } else if (command.includes('login')) {
        showPage('login-page');
        speak('Login page opened. Please say your name to login. Say: Login with [name]');
    } else if (command.includes('grocery')) {
        showPage('amazon-page');
        speak('Amazon Fresh page opened. You can add items to your cart.');
    } else if (command.includes('food')) {
        showPage('zomato-page');
        speak('Zomato page opened. You can order food.');
    } else if (command.startsWith('login with')) {
        const name = command.split('login with ')[1];
        loginUser(name);
    } else if (command.startsWith('name')) {
        document.getElementById('register-name').value = command.split('name ')[1];
    } else if (command.startsWith('phone')) {
        document.getElementById('register-phone').value = command.split('phone ')[1];
    } else if (command.startsWith('address')) {
        document.getElementById('register-address').value = command.split('address ')[1];
    } else if (command.startsWith('add')) {
        const item = command.split('add ')[1];
        addItemToCart(item);
    } else if (command.includes('checkout')) {
        checkout(document.querySelector('.container:not(.hidden)').id);
    } else if (command.includes("checkout amazon")) {
        checkout("amazon-page");
    } else if (command.includes("checkout zomato")) {
        checkout("zomato-page");
    } else {
        speak('Command not recognized. Please try again.');
    }
}

function loginUser(name) {
    const user = registeredUsers.find(u => u.name.toLowerCase() === name.toLowerCase());
    if (user) {
        document.getElementById('login-response').textContent = `Logged in as ${user.name}`;
        showPage('shopping-page');
        speak(`Welcome, ${user.name}! You can now start shopping.`);
    } else {
        speak('User not found. Please register first.');
    }
}

function manualRegister() {
    const name = document.getElementById('register-name').value;
    const phone = document.getElementById('register-phone').value;
    const address = document.getElementById('register-address').value;
    const card = document.getElementById('register-card').value;

    const newUser = { name, phone, address, card };
    registeredUsers.push(newUser);
    saveRegisteredUsers();

    document.getElementById('register-response').textContent = `Registered: ${name}, ${phone}, ${address}, ${card}`;
    showPage('shopping-page');
    speak('Registration successful. You can now start shopping.');
}

let amazonInventory = [];
let zomatoInventory = [];

function initializeInventory() {
    amazonInventory = [
        { name: 'Apples', price: 2.50, quantity: 10 }, { name: 'Bananas', price: 1.50, quantity: 10 },
        { name: 'Milk', price: 3.00, quantity: 10 }, { name: 'Bread', price: 2.00, quantity: 10 },
        { name: 'Eggs', price: 4.00, quantity: 10 }, { name: 'Cheese', price: 5.50, quantity: 10 },
        { name: 'Yogurt', price: 2.20, quantity: 10 }, { name: 'Pasta', price: 1.80, quantity: 10 },
        { name: 'Rice', price: 3.50, quantity: 10 }, { name: 'Chicken', price: 8.00, quantity: 10 }
    ];

    zomatoInventory = [
        { name: 'Pizza', price: 12.00, quantity : 10 }, { name: 'Burger', price: 8.50 , quantity : 10},
        { name: 'Sushi', price: 15.00, quantity : 10 }, { name: 'Salad', price: 7.00, quantity : 10 },
        { name: 'Pasta', price: 10.00, quantity : 10 }, { name: 'Noodles', price: 9.00, quantity : 10 },
        { name: 'Soup', price: 6.50, quantity : 10 }, { name: 'Tacos', price: 11.00, quantity : 10 },
        { name: 'Curry', price: 13.50, quantity : 10 }, { name: 'Dessert', price: 5.00, quantity : 10 }
    ];

    populateItems('amazon-items', amazonInventory);
    populateItems('zomato-items', zomatoInventory);
}

function populateItems(listId, items) {
    const list = document.getElementById(listId);
    list.innerHTML = '';
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}${item.quantity ? ` (Qty: ${item.quantity})` : ''}`;
        list.appendChild(listItem);
    });
}

let cart = [];

function addItemToCart(itemName) {
    const pageId = document.querySelector('.container:not(.hidden)').id;
    const inventory = pageId === 'amazon-page' ? amazonInventory : zomatoInventory;

    itemName = itemName.toLowerCase().trim();
    const item = inventory.find(i => i.name.toLowerCase().trim() === itemName);

    if (item && item.quantity > 0) {
        cart.push(item);
        item.quantity--;
        updateCartDisplay(pageId, false);
        if (pageId === "amazon-page"){
            populateItems('amazon-items', amazonInventory);
        } else {
            populateItems('zomato-items', zomatoInventory);
        }
        speak(`${item.name} added to cart for $${item.price.toFixed(2)}.`);
    } else if (item && item.quantity <= 0) {
        speak(`Sorry, ${item.name} is out of stock.`);
    } else {
        speak('Item not found.');
    }
}

function manualAddToCart(pageId) {
    const itemName = document.getElementById(`${pageId}-manual-item`).value;
    const quantity = parseInt(document.getElementById(`${pageId}-manual-quantity`).value);

    if (itemName && quantity > 0) {
        const inventory = pageId === 'amazon-page' ? amazonInventory : zomatoInventory;
        const item = inventory.find(i => i.name.toLowerCase() === itemName.toLowerCase());

        if (item && item.quantity >= quantity) {
            for (let i = 0; i < quantity; i++) {
                cart.push(item);
                item.quantity--;
            }
            updateCartDisplay(pageId, false);
            if (pageId === "amazon-page"){
                populateItems('amazon-items', amazonInventory);
            } else {
                populateItems('zomato-items', zomatoInventory);
            }
            speak(`${quantity} ${item.name} added to cart for $${item.price.toFixed(2)} each.`);
        } else if (item && item.quantity < quantity) {
            speak(`Sorry, only ${item.quantity} ${item.name} available.`);
        } else {
            speak('Item not found.');
        }
    } else {
        alert('Please enter a valid item name and quantity.');
    }
}

function updateCartDisplay(pageId, speakCart = true) {
    const cartId = pageId.includes('amazon') ? 'amazon-cart' : 'zomato-cart';
    const cartList = document.getElementById(cartId);
    cartList.innerHTML = '';
    let total = 0;
    const itemQuantities = {};
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(cartItem);
        total += item.price;
        itemQuantities[item.name] = (itemQuantities[item.name] || 0) + 1;
    });
    document.getElementById(pageId.replace('-page', '-total')).textContent = total.toFixed(2);

    if (speakCart) {
        let cartVoice = "Your cart contains: ";
        for (const itemName in itemQuantities) {
            cartVoice += `${itemQuantities[itemName]} ${itemName}, `;
        }
        speak(cartVoice);
    }
}

function checkout(cartPageId) {
    showPage('order-confirmation-page');
    const orderItems = document.getElementById('order-items');
    orderItems.innerHTML = '';
    cart.forEach(item => {
        const orderItem = document.createElement('li');
        orderItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        orderItems.appendChild(orderItem);
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('order-total').textContent = total.toFixed(2);
    const deliveryTime = 30;
    document.getElementById('delivery-time').textContent = deliveryTime;
    speak(`Thank you! Your order has been placed. It will be delivered in ${deliveryTime} minutes. Your total is $${total.toFixed(2)}.`);
    cart = [];
    amazonInventory.forEach(item => item.quantity = 10);
    zomatoInventory.forEach(item => item.quantity = 10);
    populateItems('amazon-items', amazonInventory);
    populateItems('zomato-items', zomatoInventory);
}

function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Speech synthesis is not supported in your browser.');
    }
}