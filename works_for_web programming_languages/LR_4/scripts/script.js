/* ≣≣≣CHAPTER #1≣≣≣ */
// task #1
let book = {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    isRead: true,
    markAsRead() {this.isRead = true},
    bookInfo() {
        console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Прочитана: ${this.isRead ? "Так" : "Ні"}`)
    }
};

book.isRead = !book.isRead;
book.bookInfo();

// task #2
let library = [
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997, isRead: true, markAsRead() {this.isRead = true}},
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, isRead: false, markAsRead() {this.isRead = true}},
    { title: "1984", author: "George Orwell", year: 1949, isRead: true, markAsRead() {this.isRead = true}}
]

function displayLibrary() {
    library.forEach(book => {
        console.log(`Назва: ${book.title}, Автор: ${book.author}, Рік видання: ${book.year}, Прочитана: ${book.isRead ? "Так" : "Ні"}`);
    });
}

library.push({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: false, markAsRead() {this.isRead = true}});
displayLibrary();

// task #3
library.sort((a, b) => a.year - b.year);
console.log("Відсортовані книги за роком видання:", library);

let unreadBooks = library.filter(book => !book.isRead);
console.log("Непрочитані книги:", unreadBooks);

let tolkienBook = library.find(book => book.author === "J.R.R. Tolkien");
console.log("Книга Толкіна:", tolkienBook);

// task #4
function addBookToLibrary() {
    let title = prompt("Введіть назву книги:");
    let author = prompt("Введіть автора книги:");
    let year = +prompt("Введіть рік видання книги:")
    let isRead = confirm("Чи прочитана книга?");
    let markAsRead = function mark() {this.isRead = true};
    library.push({ title, author, year, isRead, markAsRead});
    displayLibrary();
}
addBookToLibrary();

/* ≣≣≣CHAPTER #2≣≣≣ */
console.log("≣≣≣CHAPTER #2≣≣≣")
library[0].markAsRead();
library[1].markAsRead();
displayLibrary();

function calculateAverageYear() {
    return library.reduce((acc, curr) => acc + curr.year, 0) / library.length;
}
console.log("Середній рік видання всіх книг у бібліотеці: ", calculateAverageYear());

/* ≣≣≣CHAPTER #3≣≣≣ */
const addButton = document.getElementById("addButton");
const displayInfoButton = document.getElementById("displayInfoButton");
const findButton = document.getElementById("findButton");
const sortButton = document.getElementById("sortButton");
const filterButton = document.getElementById("filterButton");
const output = document.getElementById("output");

let recipe = {
    name: "Борщ український",
    author: "Оксана Левицька",
    listOfIngredients: ["буряк", "капуста", "картопля", "морква", "цибуля", "м'ясо", "томатна паста"],
    cookingTime: 90,
    isReady: true,
};

let recipes = [
    {
        name: "Карбонара класична",
        author: "Марко Россі",
        listOfIngredients: ["спагеті", "панчетта", "яйця", "пармезан", "чорний перець"],
        cookingTime: 25,
        isReady: false
    },
    {
        name: "Вареники з вишнями",
        author: "Яків Гук",
        listOfIngredients: ["борошно", "вишні", "цукор", "сіль", "вода"],
        cookingTime: 40,
        isReady: true
    },
    {
        name: "Цезар з куркою",
        author: "Ірина Петренко",
        listOfIngredients: ["куряче філе", "салат романо", "сир пармезан", "сухарики", "соус цезар"],
        cookingTime: 30,
        isReady: false
    }
];

function displayRecipes() {
    if (output.firstChild) while (output.firstChild) output.removeChild(output.firstChild)
    recipes.forEach(recipe => {
        const element = document.createElement('div');
        element.textContent = `Назва рецепту: ${recipe.name}; автора ${recipe.author}; список інгредієнтів: ${recipe.listOfIngredients.join(", ")}; 
        час приготування: ${recipe.cookingTime}; приготовлено - ${recipe.isReady ? "так" : "ні"}.`;
        output.appendChild(element);
    })
}

displayInfoButton.addEventListener("click", displayRecipes);

function addRecipe() {
    this.name = prompt("Введіть назву рецепту!");
    this.author = prompt("Введіть автора рецепту!");
    this.listOfIngredients = prompt("Введіть інгредієнти рецепту (перелічувати через кому)!").split(", ");
    this.cookingTime = prompt("Введіть час приготування (хв.)!");
    this.isReady = confirm("Приготовано?");
    alert("Рецепт додано!");
}

addButton.addEventListener("click", () => {
    recipes.push(new addRecipe());
})

sortButton.addEventListener("click", () => {
    recipes.sort((a, b) => a.cookingTime - b.cookingTime);
    displayRecipes();
})

function findRecipeByName() {
    if (output.firstChild) while (output.firstChild) output.removeChild(output.firstChild);
    const element = document.createElement('div');
    let search = prompt("Введіть назву рецепту для її пошуку");
    let found = recipes.find(recipe => recipe.name.toLowerCase() === search.toLowerCase());
    element.textContent = `Назва рецепту: ${found.name}; автора ${found.author}; список інгредієнтів: ${recipe.listOfIngredients.join(", ")}; 
    час приготування: ${found.cookingTime}; приготовлено - ${found.isReady ? "так" : "ні"}.`;
    output.appendChild(element);
}

findButton.addEventListener("click", findRecipeByName);

function filterByCooking() {
    if (output.firstChild) while (output.firstChild) output.removeChild(output.firstChild);
    let search = confirm("Вибрати приготовані рецепти натисніть 'Ок', якщо - ні, тоді - 'Скасувати'");
    let newListOfRecipes = recipes.filter(recipe => recipe.isReady === search);
    newListOfRecipes.forEach(recipe => {
        const element = document.createElement('div');
        element.textContent = `Назва рецепту: ${recipe.name}; автора ${recipe.author}; список інгредієнтів: ${recipe.listOfIngredients.join(", ")}; 
        час приготування: ${recipe.cookingTime}; приготовлено - ${recipe.isReady ? "так" : "ні"}.`;
        output.appendChild(element);
    })
}

filterButton.addEventListener("click", filterByCooking);