const container = document.getElementById("container");
const captchaOutput = document.getElementById("captcha");
const textbox = document.getElementById("textbox");
const output = document.getElementById("output");

const numbers = [
    {
        spanBlocks: [
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "10"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "10"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "20"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "20"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "30"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "30"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "40"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "40"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "40"
            }
        ],
        value: 0
    },
    {
        spanBlocks: [
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "10"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "10"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "20"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "30"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "40"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "40"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "40"
            }
        ],
        value: 1
    },
    {
        spanBlocks: [
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "10"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "20"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "30"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "40"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "40"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "40"
            }
        ],
        value: 2
    },
    {
        spanBlocks: [
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "10"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "20"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "30"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "40"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "40"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "40"
            }
        ],
        value: 3
    },
    {
        spanBlocks: [
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "10"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "10"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "20"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "20"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "20"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "30"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "40"
            }
        ],
        value: 4
    },
    {
        spanBlocks: [
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "10"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "20"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "20"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "30"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "40"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "40"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "40"
            }
        ],
        value: 5
    },
    {
        spanBlocks: [
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "10"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "20"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "20"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "20"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "30"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "30"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "40"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "40"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "40"
            }
        ],
        value: 6
    },
    {
        spanBlocks: [
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "10"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "20"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "30"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "40"
            }
        ],
        value: 7
    },
    {
        spanBlocks: [
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "10"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "10"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "20"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "20"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "20"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "30"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "30"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "40"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "40"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "40"
            }
        ],
        value: 8
    },
    {
        spanBlocks: [
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "0"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "10"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "10"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "20"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "20"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "20"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "20",
                positionY: "30"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "0",
                positionY: "40"
            },
            {
                element: "span",
                style: "display: block; position: absolute; width: 10px; height: 10px; background-color: red;",
                positionX: "10",
                positionY: "40"
            }
        ],
        value: 9
    }
];

function captcha(digitOfNumbers) {
    let randomNumbers = "";
    for(i = 0; i < digitOfNumbers; i++) {
        const randomNumber = Math.floor(Math.random() * 10);
        randomNumbers += randomNumber;
        const foundNumber = numbers.find(number => number.value === randomNumber);
        foundNumber.spanBlocks.forEach(span => {
            const spanElement = document.createElement(span.element);
            spanElement.style.cssText = span.style;
            spanElement.style.top = span.positionY + "px";
            spanElement.style.left = +span.positionX + 40 * i + "px";
            captchaOutput.append(spanElement);
        });
    }
    return randomNumbers;
}

let digitOfNumbers = 5;
let rightAnswer = captcha(digitOfNumbers);

document.addEventListener("DOMContentLoaded", () => {
    if (digitOfNumbers > 5) {
        container.style.width = 194 + (digitOfNumbers - 5) * 40 + "px";
    } else {
        container.style.width = "194px";
    }
})

textbox.addEventListener("change", () => {
    if (textbox.value === rightAnswer) {
        output.textContent = "Перевірку пройдено!";
        output.style.color = "green";
    } else {
        output.textContent = "Помилка!";
        output.style.color = "red";
    }
})