// 2. Модуль 2 - Масиви. Функції
// _______________________________________________________________________________
// _______________________________________________________________________________

// Запиши умову в інструкції if таким чином, щоб функція працювала правильно.

// Оголошена функція checkAge(age).
// У виразі перевірки віку використаний оператор >=
// Виклик checkAge(20) повертає "You are an adult"
// Виклик checkAge(8) повертає "You are a minor"
// Виклик checkAge(14) повертає "You are a minor"
// Виклик checkAge(38) повертає "You are an adult"
// В тілі функції є тільки одна інструкція if
// В тілі функції відсутні інструкції else або else if
// function checkAge(age) {
//     if () { // Change this line
//       return "You are an adult";
//     }

//     return "You are a minor";
//   }

console.log('Task1');

// Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.

// Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:

// видали змінну message
// видали else
// код повинен працювати так само, як і до оптимізації
// Оголошена функція checkPassword(password)
// Виклик checkPassword("mangohackzor") повертає "Access denied, wrong password!"
// Виклик checkPassword("polyhax") повертає "Access denied, wrong password!"
// Виклик checkPassword("jqueryismyjam") повертає "Welcome!"

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line

//     let message;

//     if (password === ADMIN_PASSWORD) {
//       message = "Welcome!";
//     } else {
//       message = "Access denied, wrong password!";
//     }

//     return message;
//     // Change code above this line
//   }

console.log('Task2');

// Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».

// Оголошена функція checkStorage(available, ordered)
// Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(100, 130) повертає "Your order is too large, not enough goods in stock!"
// Виклик checkStorage(70, 0) повертає "Your order is empty!"
// Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(200, 250) повертає "Your order is too large, not enough goods in stock!"
// Виклик checkStorage(150, 0) повертає "Your order is empty!"

// function checkStorage(available, ordered) {
//     // Change code below this line
//     let message;

//     if (ordered === 0) {
//       message = "Your order is empty!";
//     } else if (ordered > available) {
//       message = "Your order is too large, not enough goods in stock!";
//     } else {
//       message = "The order is accepted, our manager will contact you";
//     }

//     return message;
//     // Change code above this line
//   }
console.log('Task3');

//   Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".

// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]

console.log('Task4');

//   Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.

// Ім'я змінної	Значення змінної
// firstElement	перший елемент масиву
// secondElement	другий елемент масиву
// lastElement	останній елемент масиву
// Оголошена змінна firstElement
// Значення змінної firstElement - це рядок "apple"
// Оголошена змінна secondElement
// Значення змінної secondElement - це рядок "plum"
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "orange"
// const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line

console.log('Task5');

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".

// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "peach", "pear", "banana"]

console.log('Task6');

// Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.

// Оголошена змінна fruitsArrayLength
// Значення змінної fruitsArrayLength - це число 4

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

console.log('Task7');

// Оголоси дві зміні:

// Ім'я змінної	Очікуване значення
// lastElementIndex	Індекс останнього елемента масиву fruits через довжина_масиву - 1
// lastElement	Значення останнього елемента масиву
// Оголошена змінна lastElementIndex
// Значення змінної lastElementIndex - це число 3
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "banana"

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

console.log('Task8');

// Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

// Оголошена функція getExtremeElements(array)
// Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
// Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
// Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]

// function getExtremeElements(array) {
//     // Change code below this line

//     // Change code above this line
//   }

console.log('Task9');

//   Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат поділу рядка message за роздільником delimiter - масив рядків.

// Оголошена функція splitMessage(message, delimiter)
// Виклик splitMessage("Mango hurries to the train", " ") повертає ["Mango", "hurries", "to", "the", "train"]
// Виклик splitMessage("Mango", "") повертає ["M", "a", "n", "g", "o"]
// Виклик splitMessage("best_for_week", "_") повертає ["best", "for", "week"]

//   function splitMessage(message, delimiter) {
//     let words;
//     // Change code below this line

//     // Change code above this line
//     return words;
//   }

console.log('Task10');

//   Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).

// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// Оголошена функція calculateEngravingPrice(message, pricePerWord)
// Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50
// Виклик calculateEngravingPrice("JavaScript is in my blood", 20) повертає 100
// Виклик calculateEngravingPrice("Web-development is creative work", 40) повертає 160
// Виклик calculateEngravingPrice("Web-development is creative work", 20) повертає 80

//   function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line

//     // Change code above this line
//  }

console.log('Task11');

//  Доповни код функції makeStringFromArray(array, delimiter) таким чином, щоб вона повертала у змінній string результат з'єднання елементів масиву array з роздільником delimiter - рядок.

// Оголошена функція makeStringFromArray(array, delimiter)
// Виклик makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") повертає "Mango hurries to the train"
// Виклик makeStringFromArray(["M", "a", "n", "g", "o"], "")) повертає "Mango"
// Виклик makeStringFromArray(["top", "picks", "for", "you"], "_") повертає "top_picks_for_you"

//  function makeStringFromArray(array, delimiter) {
//     let string;
//     // Change code below this line

//     // Change code above this line
//     return string;
//   }

console.log('Task12');

//  Термін slug - це людино-зрозумілий унікальний ідентифікатор, який використовується у веб-розробці для створення читабельних URL-адрес.

// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug з назви статті. В результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-begginers.

// Увага
// Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире
// Оголошена функція slugify(title)
// Виклик slugify("Arrays for begginers") повертає "arrays-for-begginers"
// Виклик slugify("English for developer") повертає "english-for-developer"
// Виклик slugify("Ten secrets of JavaScript") повертає "ten-secrets-of-javascript"
// Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks"

//  function slugify(title) {
//     // Change code below this line

//     // Change code above this line
//   }

console.log('Task13');

//  Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

//  firstTwoEls - масив із перших двох елементів
//  nonExtremeEls - масив з усіх елементів, крім першого та останнього
//  lastThreeEls - масив із трьох останніх елементів
//  Оголошена змінна fruits
//  Значення змінної fruits - це масив ["apple", "plum", "pear", "orange", "banana"]
//  Оголошена змінна firstTwoEls
//  Значення змінної firstTwoEls - це масив ["apple", "plum"]
//  Оголошена змінна nonExtremeEls
//  Значення змінної nonExtremeEls - це масив ["plum", "pear", "orange"]
//  Оголошена змінна lastThreeEls
//  Значення змінної lastThreeEls - це масив ["pear", "orange", "banana"]
//  Змінній lastThreeEls присвоєна копія частини масиву fruits після застосування методу slice з правильними аргументами

//  const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = ;
// const nonExtremeEls = ;
// const lastThreeEls = ;

console.log('Task14');

//  Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.

//  Оголошена змінна oldClients
//  Значення змінної oldClients - це масив ["Mango", "Ajax", "Poly", "Kiwi"]
//  Оголошена змінна newClients
//  Значення змінної newClients - це масив ["Peach", "Houston"]
//  Оголошена змінна allClients
//  Значення змінної allClients - це масив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
//  Змінній allClients присвоєний масив після застосування методу concat з правильними аргументами

//  const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
//  const newClients = ['Peach', 'Houston'];

//  const allClients = ; // Change this line

console.log('Task15');

//  Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.

// Оголошена функція makeArray(firstArray, secondArray, maxLength)
// Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly", "Ajax"]
// Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає ["Mango", "Poly", "Houston", "Ajax"]
// Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає ["Mango", "Ajax", "Chelsea"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає ["Earth", "Jupiter"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає []
// Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив
//  function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

//     // Change code above this line
//   }

console.log('Task16');

//  Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.

// Оголошена змінна start
// Значення змінної start - це число 3
// Оголошена змінна end
// Значення змінної end - це число 7
// Оголошена змінна i - лічильник циклу
// Початкове значення змінної i дорівнює 3
// Умова циклу приводиться до true доти, доки i менше або дорівнює 7
// На кожній ітерації значення змінної i збільшується на одиницю
// Виведення у консоль змінної i покаже числа 3, 4, 5, 6, 7

//  const start = 3;
// const end = 7;

// for (let i = ; i <= ; i += ) { // Change this line
//   console.log(i);
// }

console.log('Task17');

//  Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// Оголошена функція calculateTotal(number)
// Виклик функції calculateTotal(1) повертає 1
// Виклик функції calculateTotal(3) повертає 6
// Виклик функції calculateTotal(7) повертає 28
// Виклик функції calculateTotal(18) повертає 171
// Виклик функції calculateTotal(24) повертає 300
// Виклик функції calculateTotal() з випадковим числом повертає правильне значення
//  function calculateTotal(number) {
//     // Change code below this line

//      // Change code above this line
//    }

console.log('Task18');

//  Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

//  Оголошена змінна fruits
//  Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]
//  Оголошена змінна i - лічильник циклу
//  Початкове значення змінної i дорівнює 0
//  Умова циклу приводиться до true доти, доки i менше за 4
//  На кожній ітерації значення змінної i збільшується на одиницю
//  В тілі циклу for оголошується змінна const fruit і цій змінній присвоюється значення - елемент масиву
//  В тілі циклу for використовується виведення у консоль змінної fruit

//  const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = ;) { // Change this line
//   const fruit = fruits[]; // Change this line
//   console.log(fruit);
// }

console.log('Task19');

//  Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice() з випадковим масивом повертає правильне значення
//  function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line

//     // Change code above this line
//     return total;
//   }

console.log('Task20');
//  Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// Оголошена функція findLongestWord(string)
// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// Виклик функції findLongestWord("Google do a roll") повертає Google
// Виклик функції findLongestWord("May the force be with you") повертає force
// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

//  function findLongestWord(string) {
//     // Change code below this line

//     // Change code above this line
//   }

console.log('Task21');

//  Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

// Оголошена функція createArrayOfNumbers(min, max)
// Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
// Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
// Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// В циклі for використовувався метод push

//  function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line

//     // Change code above this line
//     return numbers;
//   }

console.log('Task22');

//  Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).

// Оголошена функція filterArray(numbers, value)
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
// В циклі for використовувався метод push

//  function filterArray(numbers, value) {
//     // Change code below this line

//    // Change code above this line
//  }

console.log('Task23');

// Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.

// Доповни код функції таким чином, що якщо:

// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.
// Оголошена функція checkFruit(fruit)
// Виклик checkFruit("plum") повертає true
// Виклик checkFruit("mandarin") повертає false
// Виклик checkFruit("pear") повертає true
// Виклик checkFruit("Pear") повертає false
// Виклик checkFruit("apple") повертає true
// Виклик функції checkFruit() з випадковим словом повертає правильне значення boolean
// У функції використовувався метод includes

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   return; // Change this line
// }

console.log('Task24');

// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// Оголошена функція getCommonElements(array1, array2)
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив
// В циклі for використовувалися методи includes і push
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   // Change code above this line
// }

console.log('Task25');

// Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice([]) повертає 0
// Виклик функції calculateTotalPrice() з випадковим масивом чисел повертає правильну суму

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
  
//     for (let i = 0; i < order.length; i += 1) {
//       total += order[i];
//     }
  
//     // Change code above this line
//     return total;
//   }

console.log('Task26');

// Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

// Оголошена функція filterArray(numbers, value)
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
// Функція filterArray() використовує цикл for..of

// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];
  
//     for (let i = 0; i < numbers.length; i += 1) {
//       const number = numbers[i];
  
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }
  
//     return filteredNumbers;
//     // Change code above this line
//   }
  
  

console.log('Task27');

// Доповни вираз остачі від ділення таким чином, щоб код проходив тести.

// Оголошена змінна a
// Значення змінної a - це число 0
// Оголошена змінна b
// Значення змінної b - це число 1
// Оголошена змінна c
// Значення змінної c - це число 3
// Оголошена змінна d
// Значення змінної d - це число 5
// Оголошена змінна e
// Значення змінної e - це число 2

// // Change code below this line
// const a = 3 % ;
// const b = 4 % ;
// const c = 11 % ;
// const d = 12 % ;
// const e = 8 % ;

console.log('Task28');


// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).

// Оголошена функція getEvenNumbers(start, end)
// Виклик функції getEvenNumbers(2, 5) повертає [2, 4]
// Виклик функції getEvenNumbers(3, 11) повертає [4, 6, 8, 10]
// Виклик функції getEvenNumbers(6, 12) повертає [6, 8, 10, 12]
// Виклик функції getEvenNumbers(8, 8) повертає [8]
// Виклик функції getEvenNumbers(7, 7) повертає []
// Виклик функції getEvenNumbers() з випадковими start і end повертає правильний масив
// function getEvenNumbers(start, end) {
//     // Change code below this line
 
 
 
//      // Change code above this line
//    }

console.log('Task29');

// Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.

// Оголошена змінна start зі значенням 6
// Оголошена змінна end зі значенням 27
// Оголошена змінна number без ініціалізації
// Підсумкове значення змінної number дорівнює 10
// В циклі for використовується break для виходу до завершення усіх ітерацій циклу
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//   }
// }

console.log('Task30');


// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:

// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number
// Оголошена функція findNumber(start, end, divisor)
// Виклик findNumber(2, 6, 5) повертає 5
// Виклик findNumber(8, 17, 3) повертає 9
// Виклик findNumber(6, 9, 4) повертає 8
// Виклик findNumber(16, 35, 7) повертає 21
// Виклик findNumber() з випадковим набором чисел повертає правильний результат
// В циклі for не повинен використовуватися break для виходу до завершення всіх ітерацій циклу

// function findNumber(start, end, divisor) {
//     // Change code below this line
//     let number;
  
//     for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//         number = i;
//         break;
//       }
//     }
  
//     return number;
//     // Change code above this line
//   }
  

console.log('Task31');

// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// Оголошена функція includes(array, value)
// Виклик includes([1, 2, 3, 4, 5], 3) повертає true
// Виклик includes([1, 2, 3, 4, 5], 17) повертає false
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") повертає true
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") повертає false
// Виклик includes(["apple", "plum", "pear", "orange"], "plum") повертає true
// Виклик includes(["apple", "plum", "pear", "orange"], "kiwi") повертає false
// Виклик includes() для випадкового масиву з випадковим value повертає правильний boolean
// У функції includes використовується for, return, але не метод масиву includes

// function includes(array, value) {
//     // Change code below this line
  
//     // Change code above this line
//   }
  
console.log('Task32');
