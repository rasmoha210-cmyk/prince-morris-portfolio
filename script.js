
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Contact form - backend connection comes next
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const status = document.getElementById("formStatus");

    status.textContent = "The contact backend is not connected yet.";

});

// Dynamic typing animation

const typingText = document.getElementById("typing-text");

const roles = [
    "Software Developer",
    "Web Developer",
    "Database Enthusiast",
    "Technology Innovator",
    "Digital Solutions Creator"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    typingText.textContent = currentRole.substring(
        0,
        characterIndex
    );

    if (!deleting) {
        characterIndex++;

        if (characterIndex > currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1300);
            return;
        }
    } else {
        characterIndex--;

        if (characterIndex < 0) {
            deleting = false;
            characterIndex = 0;

            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 45 : 90);
}

typeEffect();


// Scroll reveal animation

const revealElements = document.querySelectorAll(
    ".section, .gsyncd-section, .service-card, .project-card, .hero-image"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});

const aiToggle = document.getElementById("aiToggle");
const aiWindow = document.getElementById("aiWindow");
const aiClose = document.getElementById("aiClose");
const aiForm = document.getElementById("aiForm");
const aiInput = document.getElementById("aiInput");
const aiMessages = document.getElementById("aiMessages");

// Open and close the assistant
aiToggle.addEventListener("click", () => {
    aiWindow.classList.toggle("open");
});

aiClose.addEventListener("click", () => {
    aiWindow.classList.remove("open");
});

// Display a message in the chat
function addAIMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("ai-message", sender);
    messageElement.textContent = message;

    aiMessages.appendChild(messageElement);
    aiMessages.scrollTop = aiMessages.scrollHeight;
}

// Temporary portfolio knowledge

function getAIResponse(question) {
    const q = question.toLowerCase();

    // Personal profile
    if (
        q.includes("who is prince") ||
        q.includes("about prince") ||
        q.includes("who are you")
    ) {
        return "Prince Morris is a technology enthusiast and aspiring software developer interested in creating digital solutions that solve real-world problems. He explores web development, software engineering, databases and business technology.";
    }

    // Professional interests
    if (q.includes("interest") || q.includes("passion")) {
        return "Prince is interested in software development, artificial intelligence, database management, web technologies and building useful digital platforms.";
    }

    // Technical skills
    if (q.includes("skill") || q.includes("programming") || q.includes("language")) {
        return "Prince works with HTML, CSS and JavaScript for frontend development. He is also learning Python, SQL and FastAPI for backend and database development.";
    }

    // Services
   if (
    q.includes("service") ||
    q.includes("offer") ||
    q.includes("what does prince do") ||
    q.includes("what does he do")
) {
        return "Prince's areas of interest include website development, software solutions, database design, backend development and business technology solutions. His capabilities continue to grow as he develops his skills.";
    }

    // ENROM Workspace
    if (q.includes("enrom workspace") || q.includes("enrom business")) {
        return "ENROM Workspace is Prince's business management platform concept. Its vision includes project management, employee management, communication, attendance tracking and business analytics.";
    }

    // ENROM School
    if (q.includes("enrom school") || q.includes("school project")) {
        return "ENROM School is Prince's educational software project. Its vision is to support digital learning through online classes, learning resources and downloadable materials for offline access.";
    }

    // SnapMovie
    if (q.includes("snapmovie")) {
        return "SnapMovie is Prince's movie discovery website concept. It is designed to help users identify movies using screenshots, uploaded video clips and TikTok links.";
    }

    // Database knowledge
    if (q.includes("database") || q.includes("sql")) {
        return "Prince has been developing his database knowledge, particularly SQL, database design and SQLite. He is also exploring how databases connect to web applications.";
    }

    // Python and backend
    if (q.includes("python") || q.includes("backend") || q.includes("fastapi")) {
        return "Prince is learning Python backend development and exploring FastAPI to build APIs that connect frontend applications to backend systems.";
    }

    // Gsyncd
    if (q.includes("gsyncd")) {
        return "Prince has explored Gsyncd Limited and its software solutions, particularly in the school management software space.";
    }

    // Goals
    if (q.includes("goal") || q.includes("future") || q.includes("vision")) {
        return "Prince aims to grow as a software developer, build useful technology products and contribute to solving practical problems through innovation.";
    }

    // Contact
    if (q.includes("contact") || q.includes("reach")) {
        return "You can reach Prince through the WhatsApp and Instagram buttons available on this portfolio.";
    }

    return "I don't have that specific information about Prince yet. You can ask me about his background, technical skills, services, interests or projects.";
}


// Handle visitor questions
aiForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const question = aiInput.value.trim();
    if (!question) return;

    addAIMessage(question, "user");
    aiInput.value = "";

    const response = getAIResponse(question);

    setTimeout(() => {
        addAIMessage(response, "bot");
    }, 400);
});

// Suggested questions
document.querySelectorAll(".ai-suggestions button").forEach(button => {
    button.addEventListener("click", () => {
        const question = button.dataset.question;

        addAIMessage(question, "user");

        setTimeout(() => {
            addAIMessage(getAIResponse(question), "bot");
        }, 400);
    });
});
