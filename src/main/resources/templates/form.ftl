<link rel="stylesheet" href="src/main/resources/styles/form.css">

<div id="employeeForm" class="modal">
    <div class="modal-content">
        <h2>Add New Employee</h2>
        <form onsubmit="handleFormSubmit(event)">
            <!-- First Name -->
            <label>First Name</label>
            <input type="text" name="firstName" required>

            <!-- Last Name -->
            <label>Last Name</label>
            <input type="text" name="lastName" required>

            <!-- Email + Department Row -->
            <div class="row">
                <div class="half">
                    <label>Email</label>
                    <input type="email" name="email" required>
                </div>
                <div class="half">
                    <label>Department</label>
                    <select name="department" required>
                        <option value="" disabled selected>-- Select Department --</option>
                        <option>Software Development</option>
                        <option>Quality Assurance</option>
                        <option>IT Infrastructure</option>
                        <option>Product Management</option>
                        <option>UI/UX Design</option>
                        <option>Information Security</option>
                        <option>Technical Support</option>
                        <option>DevOps / Cloud Engineering</option>
                        <option>Data Analytics / BI</option>
                        <option>Human Resources</option>
                    </select>
                </div>
            </div>

            <!-- Role -->
            <label>Role</label>
            <select name="role" required>
                <option value="" disabled selected>-- Select Role --</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Full Stack Developer</option>
                <option>DevOps Engineer</option>
                <option>QA/Test Engineer</option>
                <option>UI/UX Designer</option>
                <option>Database Administrator</option>
                <option>Security Analyst</option>
                <option>Product Manager</option>
                <option>Technical Support Engineer</option>
            </select>

            <!-- Buttons -->
            <div class="form-buttons">
                <button type="button" class="cancel-btn" onclick="closeForm()">Cancel</button>
                <button type="submit" class="submit-btn">Add</button>      
            </div>
        </form>
    </div>
</div>
