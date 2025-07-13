<link rel="stylesheet" href="src/main/resources/styles/sub-header.css">

<script src="src/main/resources/scripts/form.js"></script>
<script src="src/main/resources/scripts/sort.js" defer></script>
<script src="src/main/resources/scripts/pagination.js" defer></script>

<div class="sub-header">
    <div class="controls">
        <label for="sort">Sort:</label>
        <select id="sort" name="sort">
            <option value="" disabled selected>-- Select --</option>
            <option value="firstName">First Name</option>
            <option value="department">Department</option>
        </select>

        <label for="show">Show:</label>
        <select id="show" name="show">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
        </select>
    </div>

    <button class="add-employee-button" onclick="openForm()">Add Employee</button>
    <#include "form.ftl">
</div>
