const search = document.getElementById("search").addEventListener("click", async (event) => {
    const username = document.getElementById("username").value;
    event.preventDefault();
    try {
        const response = await axios.get(`/api/admin/find/${username}`);
        const data = response.data.user;

        const table = document.getElementById("resultTable");
        table.querySelectorAll("tr:not(:first-child)").forEach(row => row.remove());

        const row = document.createElement("tr");

        const tdName = document.createElement("td");
        tdName.textContent = data.username;
        row.appendChild(tdName);

        const tdBadge = document.createElement("td");
        tdBadge.textContent = data.badgeNumber;
        row.appendChild(tdBadge)

        const tdScore = document.createElement("td");
        tdScore.textContent = data.score
        row.appendChild(tdScore);

        const tdTools = document.createElement("td");
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Reset Score";

        deleteBtn.onclick = async () => {
            await axios.delete(`/api/admin/delete/${data.username}`)
            tdScore.textContent = 0;
        }

        tdTools.appendChild(deleteBtn);
        row.appendChild(tdTools);

        table.appendChild(row);
    } catch (error) {
        console.log("Unexpected Error: ",error);
    }
})