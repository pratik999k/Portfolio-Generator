const form = document.getElementById("portfolioForm");
const loader = document.getElementById("loader");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    loader.style.display = "flex"; // Show spinner

    setTimeout(() => {

        // ===== Get input values =====
        const name = document.getElementById("name").value;
        const role = document.getElementById("role").value;
        const about = document.getElementById("about").value;
        const education = document.getElementById("education").value;
        const skillsInput = document.getElementById("skills").value;
        const projectsInput = document.getElementById("projects").value;
        const experience = document.getElementById("experience").value;
        const email = document.getElementById("email").value;

        // ===== Set basic fields =====
        document.getElementById("pName").innerText = name;
        document.getElementById("pRole").innerText = role;
        document.getElementById("pAbout").innerText = about;
        document.getElementById("pEducation").innerText = education;
        document.getElementById("pExperience").innerText =
            experience === "" ? "Fresher" : experience;
        document.getElementById("pEmail").innerText = email;
        document.getElementById("footerName").innerText = name;

        // ===== SKILLS WITH ANIMATION =====
        const skillsContainer = document.getElementById("pSkills");
        skillsContainer.innerHTML = "";

        skillsInput.split(",").forEach(skill => {
            const [skillName, percent] = skill.split(":");

            const skillDiv = document.createElement("div");
            skillDiv.classList.add("skill-bar");

            skillDiv.innerHTML = `
                <p>${skillName.trim()}</p>
                <div class="skill-progress" style="width:0%"></div>
            `;

            skillsContainer.appendChild(skillDiv);

            setTimeout(() => {
                skillDiv.querySelector(".skill-progress").style.width =
                    (percent || 80) + "%";
            }, 200);
        });

        // ===== PROJECT CARDS =====
        const projectContainer = document.getElementById("pProjects");
        projectContainer.innerHTML = "";

        projectsInput.split(",").forEach(project => {
            const [title, desc] = project.split("-");

            const card = document.createElement("div");
            card.classList.add("project-card");

            card.innerHTML = `
                <h3>${title ? title.trim() : "Project"}</h3>
                <p>${desc ? desc.trim() : ""}</p>
            `;

            projectContainer.appendChild(card);
        });

        // ===== SAVE TO LOCAL STORAGE =====
        const data = {
            name, role, about, education,
            skills: skillsInput,
            projects: projectsInput,
            experience, email
        };

        localStorage.setItem("portfolioData", JSON.stringify(data));

        // ===== Switch Views =====
        loader.style.display = "none";
        document.getElementById("inputSection").style.display = "none";
        document.getElementById("portfolio").style.display = "block";

    }, 1000); // 1 second loading
});


// ===== Auto Load Saved Portfolio =====
window.addEventListener("load", function () {
    const saved = localStorage.getItem("portfolioData");
    if (!saved) return;

    const data = JSON.parse(saved);

    document.getElementById("pName").innerText = data.name;
    document.getElementById("pRole").innerText = data.role;
    document.getElementById("pAbout").innerText = data.about;
    document.getElementById("pEducation").innerText = data.education;
    document.getElementById("pExperience").innerText = data.experience;
    document.getElementById("pEmail").innerText = data.email;
});
