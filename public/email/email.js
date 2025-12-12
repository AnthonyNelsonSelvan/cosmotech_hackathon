

const checkAnswerAndUpdateScore = async (ans, answered, id) => {
    localStorage.setItem("username","nelson")
    let user = localStorage.getItem("username");
    try {
        if (ans === answered) {
            await axios.post("/api/score/points/increment", { username: user, points: 5 });
        } else {
            await axios.post("/api/score/points/increment", { username: user, points: -5 });
        }
        await axios.post("/api/email/save/responded", { username: user, id: id });
        window.location.reload()
    } catch (error) {
        console.log("Error Checking answers: ", error);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        let user = localStorage.getItem("username");
        const emailContainer = document.querySelector(".email-container");
        const response = await axios.get(`/api/email/pending/${user}`);
        const emails = response.data.emails;
        emails.map((email) => {
            const emailBox = document.createElement("div");
            emailBox.className = "email-box";

            const subjectDiv = document.createElement("div");
            subjectDiv.className = "email-subject";
            subjectDiv.textContent = email.subject;
            emailBox.appendChild(subjectDiv);

            const emailIdDiv = document.createElement("div");
            emailIdDiv.className = "email-id";
            emailIdDiv.textContent = email.email_id;
            emailBox.appendChild(emailIdDiv);

            const contentDiv = document.createElement("div");
            contentDiv.className = "email-content";
            contentDiv.textContent = email.content;
            emailBox.appendChild(contentDiv);

            const alienButton = document.createElement("button");
            alienButton.className = "btn";
            alienButton.textContent = "Alien";
            alienButton.style.margin = "5px";
            alienButton.onclick = () => checkAnswerAndUpdateScore(email.type, "alien", email.id);
            emailBox.appendChild(alienButton);

            const humanButton = document.createElement("button");
            humanButton.className = "btn";
            humanButton.textContent = "Human";
            humanButton.style.margin = "5px"
            humanButton.style.marginTop = "30px"
            humanButton.onclick = () => checkAnswerAndUpdateScore(email.type, "human", email.id)
            emailBox.appendChild(humanButton);

            emailContainer.appendChild(emailBox);
        })
    } catch (error) {
        console.log("Error While fetching pending emails: ", error);
    }
})
