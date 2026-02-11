const form = document.getElementById("portfolioForm");
const loader = document.getElementById("loader");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    loader.style.display = "flex";

    setTimeout(() => {

        // ===== Get Values =====
        const name = document.getElementById("name").value;
        const role = document.getElementById("role").value;
        const about = document.getElementById("about").value;
        const education = document.getElementById("education").value;
        const skillsInput = document.getElementById("skills").value;
        const projectsInput = document.getElementById("projects").value;
        const experience = document.getElementById("experience").value;
        const email = document.getElementById("email").value;
        const imageFile = document.getElementById("profilePic").files[0];

        // ===== Set Text Fields =====
        document.getElementById("pName").innerText = name;
        document.getElementById("pRole").innerText = role;
        document.getElementById("pAbout").innerText = about;
        document.getElementById("pEducation").innerText = education;
        document.getElementById("pExperience").innerText =
            experience === "" ? "Fresher" : experience;
        document.getElementById("pEmail").innerText = email;

        // ===== Profile Image =====
        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function () {
                document.getElementById("pImage").src = reader.result;
            };
            reader.readAsDataURL(imageFile);
        }

        // ===== Skills =====
        const skillsContainer = document.getElementById("pSkills");
        skillsContainer.innerHTML = "";

        skillsInput.split(",").forEach(skill => {
            const [skillName, percent] = skill.split(":");

            const skillDiv = document.createElement("div");
            skillDiv.classList.add("skill-bar");

            skillDiv.innerHTML = `
                <p>${skillName.trim()}</p>
                <div class="skill-progress"></div>
            `;

            skillsContainer.appendChild(skillDiv);

            setTimeout(() => {
                skillDiv.querySelector(".skill-progress").style.width =
                    (percent || 80) + "%";
            }, 200);
        });

        // ===== Projects =====
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

        // ===== Switch View =====
        loader.style.display = "none";
        document.getElementById("inputSection").style.display = "none";
        document.getElementById("portfolio").style.display = "block";

    }, 1000);
});

// ===== Theme Toggle =====
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// ===== Contact Form =====
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
});
