let currentSort = "";

function applySort(data) {
    if (currentSort === "firstName") {
        return data.sort((a, b) => a.firstName.localeCompare(b.firstName));
    } else if (currentSort === "department") {
        return data.sort((a, b) => a.department.localeCompare(b.department));
    }
    return data;
}

document.getElementById("sort").addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderCards(); // Defined in pagination.js
});
