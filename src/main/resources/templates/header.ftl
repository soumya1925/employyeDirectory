<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Employee Directory</title>
    <link rel="stylesheet" href="src/main/resources/styles/header.css">
    <script src="src/main/resources/scripts/filter.js" defer></script> 
    <script src="src/main/resources/scripts/search.js" defer></script>
    
</head>
<body>

    <div class="navbar">
        <h1>Employee Directory</h1>
        
        <#include "search.ftl">
        <button onclick="toggleFilter()">Filter</button>
    </div>
    <#include "filter.ftl">
    <#include "sub-header.ftl">
    <#include "card-container.ftl">
    <#include "footer.ftl">
</body>
</html>

