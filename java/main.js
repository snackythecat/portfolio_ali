document.addEventListener("DOMContentLoaded", function () {
    const titles = ["Welcome to my world!", "Besuch mich auf Instagram!", "Mein Löwe, mein Bär, mein Programmierer.", "Interesse? Kontaktiere mich!", "Titel 5"];
    let currentIndex = 0;

    function updateTitle() {
        const titleElement = document.getElementById("mainTitle");

        // Fügen Sie eine Klasse für den Fade-Effekt hinzu
        titleElement.classList.add("fade-out");

        // Verzögern Sie die Aktualisierung des Titels, um den Fade-Out-Effekt zu ermöglichen
        setTimeout(function () {
            titleElement.textContent = titles[currentIndex];
            currentIndex = (currentIndex + 1) % titles.length;

            // Entfernen Sie die Klasse nach dem Aktualisieren des Titels, um den Fade-In-Effekt zu ermöglichen
            titleElement.classList.remove("fade-out");
        }, 500); // Die Verzögerung sollte der Dauer des Fade-Out-Effekts entsprechen
    }

    setInterval(updateTitle, 15000);
    updateTitle(); // Initialen Titel setzen
});
