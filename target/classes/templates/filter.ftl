
<link rel="stylesheet" href="src/main/resources/styles/filter.css">
<div id="filterSidebar" class="filter-sidebar">
    <span class="close-filter" onclick="toggleFilter()">&times;</span>
    <h3>Filter Employees</h3>
    <label>First Name</label>
    <input type="text" id="filterFirstName">

    <label>Department</label>
    <input type="text" id="filterDepartment">

    <label>Role</label>
    <input type="text" id="filterRole">

    <button onclick="applyFilters()">Apply</button>
    <button onclick="clearFilters()">Reset</button>
</div>