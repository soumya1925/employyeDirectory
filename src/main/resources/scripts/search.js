document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();

        const filteredData = employeeData.filter(emp => 
            emp.firstName.toLowerCase().includes(query) ||
            emp.department.toLowerCase().includes(query)
        );

        renderCards(filteredData); // Custom renderCards with filtered data
    });
});
