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

    // Ambil kodam random
    const kodam = kodamList[Math.floor(Math.random() * kodamList.length)];

    // Tampilkan hasil
    resultDiv.innerHTML = `<p>${userInput}, kamu mendapatkan <strong>${kodam}</strong>!</p>`;
}
