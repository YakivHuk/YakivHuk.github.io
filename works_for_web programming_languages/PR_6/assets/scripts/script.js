document.addEventListener("DOMContentLoaded", () => {

    const CART_KEY = "cart";
    let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

    function saveCart() {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }

    function closeModal() {
        document.querySelector(".overlay")?.remove();
        document.querySelector(".module-window")?.remove();
    }

    function showModal(content) {
        closeModal();

        const overlay = document.createElement("div");
        overlay.className = "overlay";

        const modal = document.createElement("div");
        modal.className = "module-window";
        modal.innerHTML = content;

        overlay.addEventListener("click", closeModal);

        document.body.append(overlay, modal);
    }

    const cartButton = document.getElementById("cartButton");

    if (cartButton) {

        const counter = document.getElementById("quantityOfGoods");
        const addButtons = document.querySelectorAll(".add-to-card");

        function updateCounter() {
            counter.textContent = cart.length;
        }

        updateCounter();

        cartButton.addEventListener("click", () => {
            if (cart.length === 0) {
                showModal(`<p>Корзина пуста!</p><button class="btn" id="ok">OK</button>`);

                document.getElementById("ok")
                    .addEventListener("click", closeModal);
            } else {
                location.href = "basket.html";
            }
        });

        addButtons.forEach(btn => {
            btn.addEventListener("click", () => {

                showModal(`
                    <label>Вкажіть кількість:</label>
                    <input type="number" id="count" min="1" value="1">
                    <button class="btn" id="add">Додати</button>
                `);

                document.getElementById("add")
                    .addEventListener("click", () => {

                        const count = +document.getElementById("count").value;
                        const id = btn.dataset.id;

                        const existing = cart.find(item => item.id === id);

                        if (existing) {
                            existing.quantity += count;
                        } else {
                            cart.push({
                                id,
                                name: btn.dataset.name,
                                price: +btn.dataset.price,
                                quantity: count
                            });
                        }

                        saveCart();
                        updateCounter();

                        showModal(`
                            <p>Товар додано!</p>
                            <div class="btns">
                                <button class="btn" id="go">Перейти у корзину</button>
                                <button class="btn" id="back">Повернутись до покупок</button>
                            </div>
                        `);

                        document.getElementById("back")
                            .addEventListener("click", closeModal);

                        document.getElementById("go")
                            .addEventListener("click", () => location.href = "basket.html");
                    });
            });
        });
    }

    const cartTableBody = document.querySelector(".cart tbody");

    if (cartTableBody) {

        cartTableBody.innerHTML = `
            <tr>
                <td>№</td>
                <td>Назва товару</td>
                <td>Ціна за од.</td>
                <td>К-сть:</td>
                <td>Сума:</td>
                <td></td>
            </tr>
        `;
        let totalSum = 0;
        if (cart.length == 0) {
            cartTableBody.innerHTML += `
                <tr>
                    <td colspan="6">Корзина пуста</td>
                </tr>
            `
        }

        cart.forEach((item, index) => {

            const sum = item.price * item.quantity;
            totalSum += sum;

            cartTableBody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td>${item.price} грн</td>
                    <td>${item.quantity}</td>
                    <td>${sum} грн</td>
                    <td class="remove" data-id="${item.id}">(видалити)</td>
                </tr>
            `;
        });

        if (cart.length > 0) {
            cartTableBody.innerHTML += `
                <tr>
                    <td colspan="4"><strong>Разом до сплати</strong></td>
                    <td colspan="2"><strong>${totalSum} грн</strong></td>
                </tr>
            `;
        }

        document.querySelectorAll(".remove").forEach(btn => {
            btn.addEventListener("click", () => {
                cart = cart.filter(item => item.id !== btn.dataset.id);
                saveCart();
                location.reload();
            });
        });
    }
});