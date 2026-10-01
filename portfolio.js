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