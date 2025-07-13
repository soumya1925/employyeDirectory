let showCount = 10;

function renderCards(data = employeeData) {
    let dataToRender = [...data];

    dataToRender = applySort(dataToRender); // Sort
    const limitedData = dataToRender.slice(0, showCount); // Pagination

    const container = document.querySelector(".card-container");
    container.innerHTML = "";

    limitedData.forEach((emp, index) => {
        const card = document.createElement("div");
        card.classList.add("employee-card");
        card.innerHTML = `
            <h3>${emp.firstName} ${emp.lastName}</h3>
            <p><strong>Email:</strong> ${emp.email}</p>
            <p><strong>Department:</strong> ${emp.department}</p>
            <p><strong>Role:</strong> ${emp.role}</p>
            <div class="card-buttons">
                <button onclick="editCard(${index})">Edit</button>
                <button onclick="deleteCard(${index})">Delete</button>
            </div>
        `;
        container.appendChild(card);
    });
}