function cekKodam() {
    const userInput = document.getElementById('user-input').value;
    const resultDiv = document.getElementById('result');

    // Daftar Kodam Lucu
    const kodamList = [
        "Kodam Kucing Gaib",
        "Kodam Harimau Bersayap",
        "Kodam Singa Hati Lembut",
        "Kodam Naga Pelindung",
        "Kodam Kura-kura Bijaksana",
        "Kodam Semut Super",
        "Kodam Burung Tukang Gosip"
    ];

    // Cek nama diawali "rifal", "rival", "val", "fal", "valdi", "faldi"
    if (userInput.toLowerCase().startsWith("rifal") || 
        userInput.toLowerCase().startsWith("rival") || 
        userInput.toLowerCase().startsWith("val") || 
        userInput.toLowerCase().startsWith("fal") || 
        userInput.toLowerCase().startsWith("valdi") || 
        userInput.toLowerCase().startsWith("faldi")) {
        resultDiv.innerHTML = "<p>LO GA DIAJAK BAMBANGGGGG!</p>";
    } else {
        // Ambil kodam random
        const kodam = kodamList[Math.floor(Math.random() * kodamList.length)];
        // Tampilkan hasil
        resultDiv.innerHTML = `<p>${userInput}, kamu mendapatkan <strong>${kodam}</strong>!</p>`;
    }
}
