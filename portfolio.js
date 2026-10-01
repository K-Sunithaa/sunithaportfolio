function showExperience(event) {
    event.preventDefault();

    const experience = document.getElementById("experience");

    if (experience.style.display === "none" || experience.style.display === "") {
        experience.style.display = "block";

        experience.scrollIntoView({
            behavior: "smooth"
        });
    } else {
        experience.style.display = "none";
    }
}

function showEducation(event) {
    event.preventDefault();

    const education = document.getElementById("education");

    if (education.style.display === "none" || education.style.display === "") {
        education.style.display = "block";

        education.scrollIntoView({
            behavior: "smooth"
        });
    } else {
        education.style.display = "none";
    }
}

function showCertifications(event) {
    event.preventDefault();

    const certifications = document.getElementById("certifications");

    if (certifications.style.display === "none" || certifications.style.display === "") {
        certifications.style.display = "block";

        certifications.scrollIntoView({
            behavior: "smooth"
        });
    } else {
        certifications.style.display = "none";
    }
}

const title = document.querySelector(".title");
const profile = document.querySelector(".profile");
const buttons = document.querySelector(".buttons");

const text = "Graduate Engineer Trainee | Software Developer";

title.textContent = "";

// Hide image and buttons initially
profile.style.opacity = "0";
profile.style.transform = "translateY(20px)";

buttons.style.opacity = "0";
buttons.style.transform = "translateY(20px)";

let index = 0;

function typeText() {
    if (index < text.length) {
        title.textContent += text.charAt(index);
        index++;

        setTimeout(typeText, 70);
    } else {

        // Image appears slowly
        profile.style.transition =
            "opacity 2s ease, transform 2s ease";

        profile.style.opacity = "1";
        profile.style.transform = "translateY(0)";

        // Buttons appear after image
        setTimeout(() => {
            buttons.style.transition =
                "opacity 1.5s ease, transform 1.5s ease";

            buttons.style.opacity = "1";
            buttons.style.transform = "translateY(0)";
        }, 2200);
    }
}

typeText();

typeText();