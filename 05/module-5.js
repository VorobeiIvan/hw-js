// 5. Модуль 5 - Ключове слово this. Прототипи та класи
// _______________________________________________________________________________
// _______________________________________________________________________________

console.log('%cTask1', 'color: green; font-weight: bold;');
// Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.

// Метод checkPizza об'єкта pizzaPalace використовує this.
// Метод order об'єкта pizzaPalace використовує this
// Виклик pizzaPalace.order("Smoked") повертає рядок "Order accepted, preparing «Smoked» pizza"
// Виклик pizzaPalace.order("Four meats") повертає рядок "Order accepted, preparing «Four meats» pizza"
// Виклик pizzaPalace.order("Big Mike") повертає рядок "Sorry, there is no pizza named «Big Mike»"
// Виклик pizzaPalace.order("Viennese") повертає рядок "Sorry, there is no pizza named «Viennese»"
// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     // Change code below this line
//     checkPizza(pizzaName) {
//       return pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//       const isPizzaAvailable = checkPizza(pizzaName);

//       if (!isPizzaAvailable) {
//         return `Sorry, there is no pizza named «${pizzaName}»`;
//       }

//       return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
//     // Change code above this line
//   };

console.log('%cTask2', 'color: green; font-weight: bold;');

// Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі. Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

// Після оголошення об'єкта ми додали виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// Оголошена змінна customer
// Значення змінної customer - це об'єкт з властивостями і методами
// Виклик customer.getDiscount() повертає поточне значення властивості discount
// Виклик customer.setDiscount(0.15) оновлює значення властивості discount
// Виклик customer.getBalance() повертає поточне значення властивості balance.
// Виклик customer.getOrders() повертає поточне значення властивості orders
// Виклик customer.addOrder(5000, "Steak") додає "Steak" в масив значень властивості orders і оновлює баланс
// Метод getBalance об'єкта customer використовує this
// Метод getDiscount об'єкта customer використовує this
// Метод setDiscount об'єкта customer використовує this
// Метод getOrders об'єкта customer використовує this
// Метод addOrder об'єкта customer використовує this
// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Change code below this line
//   getBalance() {
//     return balance;
//   },
//   getDiscount() {
//     return discount;
//   },
//   setDiscount(value) {
//     discount = value;
//   },
//   getOrders() {
//     return orders;
//   },
//   addOrder(cost, order) {
//     balance -= cost - cost * discount;
//     orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

console.log('%cTask3', 'color: green; font-weight: bold;');
// Тестувальники знайшли баги в коді сервісу зберігання історії замовлень їжі. Тобі необхідно виправити їх, правильно розставивши this в методах об'єкта historyService, щоб методи почали працювати правильно.

// Оголошена змінна historyService
// Значення змінної historyService - це об'єкт з вихідними властивостями та методами
// Виклик historyService.getOrdersLog() повертає рядок з переліком даних всіх замовлень з властивості orders
// Виклик historyService.getEmails() повертає масив всіх унікальних поштових адрес з властивості orders
// Виклик historyService.getOrdersByEmail("solomon@topmail.net") повертає [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
// Виклик historyService.getOrdersByEmail("artemis@coldmail.net") повертає [{ email: "artemis@coldmail.net", dish: "Pizza" }]
// Метод getOrdersLog об'єкта historyService використовує this
// Метод getEmails об'єкта historyService використовує this
// Метод getOrdersByEmail об'єкта historyService використовує this
// const historyService = {
//     orders: [
//       { email: "jacob@hotmail.com", dish: "Burrito" },
//       { email: "solomon@topmail.net", dish: "Burger" },
//       { email: "artemis@coldmail.net", dish: "Pizza" },
//       { email: "solomon@topmail.net", dish: "Apple pie" },
//       { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
//     // Change code below this line
//     getOrdersLog() {
//       return orders
//         .map(order => `email: ${order.email} dish: ${order.dish}`)
//         .join(" - ");
//     },
//     getEmails() {
//       const emails = orders.map(order => order.email);
//       const uniqueEmails = new Set(emails);
//       return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//       return orders.filter(order => order.email === email);
//     },
//     // Change code above this line
//   };

console.log('%cTask4', 'color: green; font-weight: bold;');
// Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.

// Оголошена змінна parent
// Значення змінної parent - це об'єкт
// Виклик parent.hasOwnProperty("surname") повертає true
// Виклик parent.hasOwnProperty("heritage") повертає true
// Оголошена змінна child
// Значення змінної child - це об'єкт
// Виклик child.hasOwnProperty("name") повертає true
// Звернення до child.name повертає "Jason"
// Виклик child.hasOwnProperty("age") повертає true
// Звернення до child.age повертає 27
// Виклик child.hasOwnProperty("surname") повертає false
// Звернення до child.surname повертає "Moore"
// Виклик child.hasOwnProperty("heritage") повертає false
// Звернення до child.heritage повертає "Irish"
// Виклик parent.isPrototypeOf(child) повертає true
// Використовується метод Object.create()
// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
//   };
//   // Change code below this line

//   const child = {};

//   // Change code above this line
//   child.name = "Jason";
//   child.age = 27;

console.log('%cTask5', 'color: green; font-weight: bold;');

// Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child.

// Оголошена змінна ancestor
// Значення змінної ancestor - це об'єкт.
// Оголошена змінна parent
// Значення змінної parent - це об'єкт.
// Оголошена змінна child
// Значення змінної child - це об'єкт.
// Виклик ancestor.isPrototypeOf("parent") повертає true
// Виклик parent.isPrototypeOf("child") повертає true
// Виклик ancestor.hasOwnProperty("surname") повертає true
// Звернення до ancestor.surname повертає "Dawson"
// Виклик parent.hasOwnProperty("surname") повертає true
// Звернення до parent.surname повертає "Moore"
// Виклик child.hasOwnProperty("surname") повертає false
// Звернення до child.surname повертає "Moore"
// Виклик ancestor.hasOwnProperty("heritage") повертає true
// Звернення до ancestor.heritage повертає "Irish"
// Виклик parent.hasOwnProperty("heritage") повертає false
// Звернення до parent.heritage повертає "Irish"
// Виклик child.hasOwnProperty("heritage") повертає false
// Звернення до child.heritage повертає "Irish"
// Використовується метод Object.create()
// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
//   };
//   // Change code below this line

//   const parent = {};
//   parent.name = "Stacey";
//   parent.surname = "Moore";
//   parent.age = 54;

//   const child = {};
//   child.name = "Jason";
//   child.age = 27;

//   // Change code above this line
console.log('%cTask6', 'color: green; font-weight: bold;');
// Використовуючи ключове слово class, оголоси клас Car з порожнім тілом.

// Оголошений клас Car
// Результат виклику new Car() - це порожній об'єкт

console.log('%cTask7', 'color: green; font-weight: bold;');
// Додай класу Car метод constructor, який приймає три параметри:

// brand - марка автомобіля.
// model - модель автомобіля.
// price - ціна автомобіля.
// Клас Car повинен створювати об'єкт з однойменними властивостями brand, model і price, значеннями яких повинні бути передані аргументи під час його виклику з оператором new.

// Оголошений клас Car
// Клас Car має метод constructor
// В результаті виклику new Car("Audi", "Q3", 36000) утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
// В результаті виклику new Car("BMW", "X5", 58900) утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
// В результаті виклику new Car("Nissan","Murano", 31700) утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }
// class Car {
//     // Change code below this line

//     // Change code above this line
//   }

console.log('%cTask8', 'color: green; font-weight: bold;');
// Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand, model і price. Деструктуризуй об'єкт в сигнатурі (підписі) конструктора.

// Оголошений клас Car
// Клас Car має метод constructor
// В результаті виклику new Car({ brand: "Audi", model: "Q3", price: 36000 }) утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
// В результаті виклику new Car({ brand: "BMW", model: "X5", price: 58900 }) утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
// В результаті виклику new Car({ brand: "Nissan", model: "Murano", price: 31700 }) утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }

// class Car {
//     // Change code below this line
//     constructor(brand, model, price) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//     // Change code above this line
//   }
console.log('%cTask9', 'color: green; font-weight: bold;');
// Додай класу Car два методи.

// getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
// changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на newPrice.
// В класі Car оголошений метод getPrice
// Метод getPrice повертає значення властивості price екземпляра класу, який його викликає
// В класі Car оголошений метод changePrice
// Метод changePrice змінює значення властивості price екземпляра класу, який його викликає
// class Car {
//     constructor({ brand, model, price }) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//     // Change code below this line

//     // Change code above this line
//   }

console.log('%cTask10', 'color: green; font-weight: bold;');

// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. Клас очікує тільки один аргумент - початковий масив товарів, який записується у властивість items об'єкта, що створюється.

// Оголоси наступні методи класу:

// getItems() - повертає масив поточних товарів у властивості items об'єкта, який викликає цей метод.
// addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості items об'єкта, який викликає цей метод.
// removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів у властивості items об'єкта, який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// Оголошений клас Storage
// В класі Storage оголошений метод getItems
// В класі Storage оголошений метод addItem
// В класі Storage оголошений метод removeItem
// Метод getItems повертає значення властивості items екземпляра класу, який його викликає
// Метод addItem змінює властивість items екземпляра класу, який його викликає
// Метод removeItem змінює властивість items екземпляра класу, який його викликає
// В результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення змінної storage - це об'єкт
// Об'єкт storage містить властивість items
// Перший виклик storage.getItems(), відразу після інціалізаціі екземпляра, повертає масив ["Nanitoids", "Prolonger", "Antigravitator"]
// Другий виклик, storage.getItems(), після виклику storage.addItem("Droid"), повертає масив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Третій виклик storage.getItems(), після виклику storage.removeItem("Prolonger"), повертає масив ["Nanitoids", "Antigravitator", "Droid"]

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
console.log('%cTask11', 'color: green; font-weight: bold;');

// Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок, який записується у властивість value об'єкта, що створюється.

// Оголоси наступні методи класу:

// getValue() - повертає поточне значення властивості value.
// padEnd(str) - отримує параметр str (рядок) і додає його в кінець значення властивості value об'єкта, який викликає цей метод.
// padStart(str) - отримує параметр str (рядок) і додає його на початок значення властивості value об'єкта, який викликає цей метод.
// padBoth(str) - отримує параметр str (рядок) і додає його на початок і в кінець значення властивості value об'єкта, який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// Оголошений клас StringBuilder
// В класі StringBuilder оголошений метод getValue
// Метод getValue повертає значення властивості value екземпляра класу, який його викликає
// В класі StringBuilder оголошений метод padEnd
// Метод padEnd змінює властивість value екземпляра класу, який його викликає
// В класі StringBuilder оголошений метод padStart
// Метод padStart змінює властивість value екземпляра класу, який його викликає
// В класі StringBuilder оголошений метод padBoth
// Метод padBoth змінює властивість value екземпляра класу, який його викликає
// В результаті виклику new StringBuilder(".") значення змінної builder - це об'єкт
// Об'єкт builder містить властивість value
// Перший виклик builder.getValue(), відразу після ініціалізації екземпляра, повертає рядок .
// Другий виклик builder.getValue(), після виклику builder.padStart("^"), повертає рядок ^.
// Третій виклик builder.getValue(), після виклику builder.padEnd("^"), повертає рядок ^.^
// Четвертий виклик builder.getValue(), після виклику builder.padBoth("="), повертає рядок =^.^=

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

console.log('%cTask12', 'color: green; font-weight: bold;');

// Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною, і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.

// getBrand() - повертає значення приватної властивості brand.
// changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.
// Оголошений клас Car
// Властивість brand в класі Car оголошена приватною
// Конструктор класу приймає об'єкт з властивостями brand, model і price
// В результаті виклику new Car({ brand: "Audi", model: "Q3", price: 36000 }) утвориться об'єкт { model: "Q3", price: 36000 }
// В результаті виклику new Car({ brand: "bmw", model: "X5", price: 58900 }) утвориться об'єкт { model: "X5", price: 58900 }
// В результаті виклику new Car({ brand: "Nissan", model: "Murano", price: 31700 }) утвориться об'єкт { model: "Murano", price: 31700 }
// В екземпляра відсутня публічна властивість brand
// Метод getBrand() повертає значення приватної властивості brand.
// Метод changeBrand("Honda") змінює значення приватної властивості brand на "Honda"
// class Car {
//     // Change code below this line

//     constructor({ brand, model, price }) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }

//     // Change code above this line
//   }

console.log('%cTask13', 'color: green; font-weight: bold;');

// Виконай рефакторинг класу Storage, зробивши властивість items приватною.

// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// Оголошений клас Storage
// Об'єкт storage не містить властивості items
// В класі Storage оголошений метод getItems
// В класі Storage оголошений метод addItem
// В класі Storage оголошений метод removeItem
// Властивість items в класі Storage оголошена приватною
// Конструктор класу приймає властивість items
// В результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення змінної storage - це об'єкт
// Перший виклик storage.getItems(), відразу після ініціалізації екземпляра, повертає масив ["Nanitoids", "Prolonger", "Antigravitator"]
// Другий виклик, storage.getItems(), після виклику storage.addItem("Droid"), повертає масив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Третій виклик storage.getItems(), після виклику storage.removeItem("Prolonger"), повертає масив ["Nanitoids", "Antigravitator", "Droid"]

// class Storage {
//     // Change code below this line

//     constructor(items) {
//       this.items = items;
//     }

//     getItems() {
//       return this.items;
//     }

//     addItem(newItem) {
//       this.items.push(newItem);
//     }

//     removeItem(itemToRemove) {
//       this.items = this.items.filter(item => item !== itemToRemove);
//     }
//   }

//   // Change code above this line
//   const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//   storage.addItem("Droid");
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//   storage.removeItem("Prolonger");
//   console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

console.log('%cTask14', 'color: green; font-weight: bold;');

// Виконай рефакторинг класу StringBuilder, зробивши властивість value приватною.

// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// Оголошений клас StringBuilder

// Властивість value в класі StringBuilder оголошена приватною

// В класі StringBuilder оголошений метод getValue

// В класі StringBuilder оголошений метод padEnd

// В класі StringBuilder оголошений метод padStart

// В класі StringBuilder оголошений метод padBoth

// В результаті виклику new StringBuilder('.') значення змінної builder - це об'єкт

// Об'єкт builder не містить властивості value

// Перший виклик builder.getValue(), відразу після ініціалізації екземпляра, повертає рядок .

// Другий виклик builder.getValue(), після виклику builder.padStart("^"), повертає рядок ^.

// Третій виклик builder.getValue(), після виклику builder.padEnd("^"), повертає рядок ^.^

// Четвертий виклик builder.getValue(), після виклику builder.padBoth("="), повертає рядок =^.^=
// class StringBuilder {
//     // Change code below this line

//     constructor(initialValue) {
//       this.value = initialValue;
//     }

//     getValue() {
//       return this.value;
//     }

//     padEnd(str) {
//       this.value += str;
//     }

//     padStart(str) {
//       this.value = str + this.value;
//     }

//     padBoth(str) {
//       this.padStart(str);
//       this.padEnd(str);
//     }
//   }

//   // Change code above this line
//   const builder = new StringBuilder(".");
//   console.log(builder.getValue()); // "."
//   builder.padStart("^");
//   console.log(builder.getValue()); // "^."
//   builder.padEnd("^");
//   console.log(builder.getValue()); // "^.^"
//   builder.padBoth("=");
//   console.log(builder.getValue()); // "=^.^="

console.log('%cTask15', 'color: green; font-weight: bold;');

// Виконай рефакторинг класу Car. Зроби властивості model і price приватними, а також #brand. Стандартизуй публічний інтерфейс класу, замінивши вже оголошені методи на гетери та сетери brand, model і price, для взаємодії з приватними властивостями.

// Оголошений клас Car
// В класі Car оголошена приватна властивість brand
// В класі Car оголошена приватна властивість model
// В класі Car оголошена приватна властивість price
// Конструктор класу приймає об'єкт з властивостями brand, model і price
// В класі Car оголошений гетер brand
// В класі Car оголошений сетер brand
// В класі Car оголошений гетер model
// В класі Car оголошений сетер model
// В класі Car оголошений гетер price
// В класі Car оголошений сетер price
// class Car {
//     // Change code below this line
//     #brand;

//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.model = model;
//       this.price = price;
//     }

//     getBrand() {
//       return this.#brand;
//     }

//     changeBrand(newBrand) {
//       this.#brand = newBrand;
//     }

//     getModel() {
//       return this.model;
//     }

//     updateModel(newModel) {
//       this.model = newModel;
//     }

//     getPrice() {
//       return this.price;
//     }

//     setPrice(newPrice) {
//       this.price = newPrice;
//     }
//     // Change code above this line
//   }
console.log('%cTask16', 'color: green; font-weight: bold;');

// Виконай рефакторинг класу Car. Додай публічну статичну властивість MAX_PRICE зі значенням 50000 - максимально допустима ціна автомобіля.

// Додай сетеру price перевірку значення параметра newPrice, що передається. Якщо воно більше за MAX_PRICE, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.

// Оголошений клас Car
// Клас Car містить статичну властивість MAX_PRICE
// Значення статичної властивості MAX_PRICE - це число 50000
// Екземпляр не містить властивості MAX_PRICE
// В класі Car оголошений гетер price
// В класі Car оголошений сетер price
// Виклик сетера price в екземпляра класу, зі значенням аргументу меншим за значення MAX_PRICE, змінює властивість #price
// Виклик сетера price в екземпляра класу, зі значенням аргументу більшим за значення MAX_PRICE, не змінює властивість #price
// class Car {
//     // Change code below this line
//     #price;

//     constructor({ price }) {
//       this.#price = price;
//     }

//     get price() {
//       return this.#price;
//     }

//     set price(newPrice) {
//       this.#price = newPrice;
//     }
//     // Change code above this line
//   }

//   const audi = new Car({ price: 35000 });
//   console.log(audi.price); // 35000

//   audi.price = 49000;
//   console.log(audi.price); // 49000

//   audi.price = 51000;
//   console.log(audi.price); // 49000
console.log('%cTask17', 'color: green; font-weight: bold;');

// Додай класу Car публічний статичний метод checkPrice (price), що приймає ціну автомобіля. Метод повинен порівняти значення параметра price і приватної статичного властивості MAX_PRICE.

// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
// В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
// Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, щоб показати, як буде використовуватися метод checkPrice(price).

// Оголошений клас Car
// Клас Car містить статичний метод checkPrice(price)
// Виклик Car.checkPrice(36000) повертає рядок "Success! Price is within acceptable limits"
// Виклик Car.checkPrice(18000) повертає рядок "Success! Price is within acceptable limits"
// Виклик Car.checkPrice(64000) повертає рядок "Error! Price exceeds the maximum"
// Виклик Car.checkPrice(57000) повертає рядок "Error! Price exceeds the maximum"
// class Car {
//     static #MAX_PRICE = 50000;
//     // Change code below this line

//     // Change code above this line
//     constructor({ price }) {
//       this.price = price;
//     }
//   }

//   const audi = new Car({ price: 36000 });
//   const bmw = new Car({ price: 64000 });

//   console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
//   console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

console.log('%cTask18', 'color: green; font-weight: bold;');

// У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.

// Оголоси клас Admin, який наслідує від класу User
// Додай класу Admin публічну статичну властивість AccessLevel (рівень доступу), значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}
// Оголошений клас Admin
// Клас Admin наслідує від класу User
// Клас Admin містить публічну статичну властивість AccessLevel
// Звернення до Admin.AccessLevel.BASIC повертає рядок "basic"
// Звернення до Admin.AccessLevel.SUPERUSER повертає рядок "superuser"
// class User {
//     constructor(email) {
//       this.email = email;
//     }

//     get email() {
//       return this.email;
//     }

//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   // Change code below this line

console.log('%cTask19', 'color: green; font-weight: bold;');

// Додай класу Admin метод constructor, який приймає один параметр - об'єкт налаштувань з двома властивостями email і accessLevel. Додай класу Admin публічну властивість accessLevel, значення якої буде передаватися під час виклику конструктора.

// Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію екземпляра під оголошенням класу.

// Оголошений клас Admin
// Клас Admin наслідує від класу User
// Клас Admin містить публічну статичну властивість AccessLevel
// Клас Admin містить метод constructor з параметром у вигляді об'єкта {email, accessLevel}
// В класі Admin в конструкторі для властивості email використовується звернення до конструктора батьківського класу
// Звернення до Admin.AccessLevel.BASIC повертає рядок "basic"
// Звернення до Admin.AccessLevel.SUPERUSER повертає рядок "superuser"
// class User {
//     email;

//     constructor(email) {
//       this.email = email;
//     }

//     get email() {
//       return this.email;
//     }

//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }

//   class Admin extends User {
//     // Change code below this line

//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };

//     // Change code above this line
//   }

//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });

//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"

console.log('%cTask20', 'color: green; font-weight: bold;');

// Додай класу Admin наступні властивості і методи.

// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список. Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і повертати true або false.
// Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// Оголошений клас Admin
// Клас Admin наслідує від класу User
// Клас Admin містить публічну властивість blacklistedEmails
// Клас Admin містить публічний метод blacklist
// Клас Admin містить публічний метод isBlacklisted
// Після виклику mango.blacklist("poly@mail.com") значення властивості blacklistedEmails - це масив ["poly@mail.com"]
// Виклик mango.isBlacklisted("mango@mail.com") повертає false
// Виклик mango.isBlacklisted("poly@mail.com") повертає true
// class User {
//     email;

//     constructor(email) {
//       this.email = email;
//     }

//     get email() {
//       return this.email;
//     }

//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
//     // Change code below this line

//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };

//     constructor({ email, accessLevel }) {
//       super(email);
//       this.accessLevel = accessLevel;
//     }

//     // Change code above this line
//   }

//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });

//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"

//   mango.blacklist("poly@mail.com");
//   console.log(mango.blacklistedEmails); // ["poly@mail.com"]
//   console.log(mango.isBlacklisted("mango@mail.com")); // false
//   console.log(mango.isBlacklisted("poly@mail.com")); // true
