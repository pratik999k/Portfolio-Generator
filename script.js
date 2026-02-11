document.getElementById("portfolioForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const about = document.getElementById("about").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value.split(",");
    const projects = document.getElementById("projects").value;
    const experience = document.getElementById("experience").value;
    const email = document.getElementById("email").value;

    // Set portfolio values
    document.getElementById("pName").innerText = name;
    document.getElementById("pRole").innerText = role;
    document.getElementById("pAbout").innerText = about;

    // ✅ THIS WAS THE MISSING / BROKEN PART
    document.getElementById("pEducation").innerText = education;

    document.getElementById("pProjects").innerText = projects;
    document.getElementById("pExperience").innerText =
        experience === "" ? "Fresher" : experience;
    document.getElementById("pEmail").innerText = email;
    document.getElementById("footerName").innerText = name;

    // Skills blocks
    const skillsContainer = document.getElementById("pSkills");
    skillsContainer.innerHTML = "";
    skills.forEach(skill => {
        const div = document.createElement("div");
        div.className = "skill";
        div.innerText = skill.trim();
        skillsContainer.appendChild(div);
    });

    // Switch views
    document.getElementById("inputSection").style.display = "none";
    document.getElementById("portfolio").style.display = "block";
});