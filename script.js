const inputNumber = document.querySelector("#inputNumber");
const generateButton = document.querySelector("#generateButton");
const tableOutput = document.querySelector("#tableOutput");

generateButton.addEventListener("click", function (){
    const number = Number(inputNumber.value);

    tableOutput.innerHTML = "";

    for(let i = 1; i <= 10; i++){
        const result = number * i;

        const line = document.createElement("p");

        line.textContent = `${number} X ${i} = ${result}`;

        tableOutput.appendChild(line);
    }
})