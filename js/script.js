document.addEventListener("DOMContentLoaded", function () {
    fetch('config.json')
        .then(response => response.json())
        .then(config => {
            document.title = config.site.title;
            document.querySelector("main").style.backgroundImage = `url(${config.site.backgroundImage})`;
            document.documentElement.style.setProperty('--theme-color', config.site.themeColor);

            const logo = document.getElementById("logo");
            const serverTitle = document.getElementById("server-title");
            if (logo) logo.src = config.site.logo;
            if (serverTitle) serverTitle.textContent = config.site.title;
            const buttons = document.querySelectorAll(".buttons button");
            if (buttons.length > 0) {
                buttons[0].onclick = () => window.location.href = "index.html"; 
                if (buttons.length > 1) buttons[1].onclick = () => window.location.href = config.links.forum;
                if (buttons.length > 2) buttons[2].onclick = () => window.location.href = config.links.store;
                if (buttons.length > 3) buttons[3].onclick = () => window.location.href = config.links.discord;
                if (buttons.length > 4) buttons[4].onclick = () => window.location.href = config.links.telegram;
            }
            const skrahsLink = document.getElementById("skrahs-link");
            if (skrahsLink) skrahsLink.href = config.links.skrahs;

            const staffTitle = document.getElementById("staff-title");
            const staffContainer = document.getElementById("staff-list");
            const homeButton = document.getElementById("home-button");

            if (homeButton) {
                homeButton.addEventListener('click', () => {
                    window.location.href = 'index.html'; 
                });
            }

            if (staffTitle && staffContainer) {
                staffTitle.textContent = config.staffPage.title || "Staff";

                Object.keys(config.staffPage.ranks).forEach(rank => {
                    config.staffPage.ranks[rank].forEach(member => {
                        const memberDiv = document.createElement("div");
                        memberDiv.className = "staff-member";
                        memberDiv.innerHTML = `
                            <img src="https://minotar.net/helm/${encodeURIComponent(member.Nick)}/100" alt="${member.Nick}">
                            <h3 style="color: ${member.color};">${rank}: ${member.Nick}</h3>
                        `;
                        staffContainer.appendChild(memberDiv);
                    });
                });
            }
        })
        .catch(error => console.error('Error loading config:', error));
});
