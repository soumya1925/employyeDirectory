function toggleFilter() {
    const sidebar = document.getElementById("filterSidebar");
    sidebar.classList.toggle("open");
}

// Search by name or email
document.getElementById("searchInput").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll(".employee-card");

    cards.forEach(card => {
        const name = card.querySelector("h3").textContent.toLowerCase();
        const email = card.querySelector("p:nth-child(2)").textContent.toLowerCase();

        if (name.includes(query) || email.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

function applyFilters() {
    const name = document.getElementById("filterFirstName").value.toLowerCase();
    const department = document.getElementById("filterDepartment").value.toLowerCase();
    const role = document.getElementById("filterRole").value.toLowerCase();

    const cards = document.querySelectorAll(".employee-card");

    cards.forEach(card => {
        const cardName = card.querySelector("h3").textContent.toLowerCase();
        const cardDepartment = card.querySelector("p:nth-child(3)").textContent.toLowerCase();
        const cardRole = card.querySelector("p:nth-child(4)").textContent.toLowerCase();

        const matchName = !name || cardName.includes(name);
        const matchDept = !department || cardDepartment.includes(department);
        const matchRole = !role || cardRole.includes(role);

        if (matchName && matchDept && matchRole) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function clearFilters() {
    document.getElementById("filterFirstName").value = "";
    document.getElementById("filterDepartment").value = "";
    document.getElementById("filterRole").value = "";
    applyFilters();
}

// Sort function
function sortCards() {
    const sortBy = document.getElementById("sortSelect").value;
    const container = document.querySelector(".card-container");
    const cards = Array.from(container.querySelectorAll(".employee-card"));

    cards.sort((a, b) => {
        let aVal = "", bVal = "";

        if (sortBy === "firstName") {
            aVal = a.querySelector("h3").textContent.split(" ")[0].toLowerCase();
            bVal = b.querySelector("h3").textContent.split(" ")[0].toLowerCase();
        } else if (sortBy === "department") {
            aVal = a.querySelector("p:nth-child(3)").textContent.toLowerCase();
            bVal = b.querySelector("p:nth-child(3)").textContent.toLowerCase();
        }

        return aVal.localeCompare(bVal);
    });

    cards.forEach(card => container.appendChild(card));
}
