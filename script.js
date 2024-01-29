document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    showSlide(currentSlide);
    const openModalBtn = document.getElementById("openModalBtn");
    openModalBtn.addEventListener("click", function () {
        document.getElementById("myModal").style.display = "block";
    });
    const closeModalBtn = document.getElementById("closeModalBtn");
    closeModalBtn.addEventListener("click", function () {
        document.getElementById("myModal").style.display = "none";
    });
    const biodataForm = document.getElementById("biodataForm");
    biodataForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const nama = document.getElementById("nama").value;
        const umur = document.getElementById("umur").value;
        alert(`Biodata: Nama - ${nama}, Umur - ${umur}`);
        document.getElementById("myModal").style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Inisialisasi slide dan indeks saat ini
    let currentSlide = 0;
    showSlide(currentSlide);

    // Event listener untuk tombol sebelumnya
    const prevBtn = document.createElement("div");
    prevBtn.className = "prev";
    prevBtn.textContent = "\u2190";
    document.body.appendChild(prevBtn);
    prevBtn.addEventListener("click", function () {
        showSlide(--currentSlide);
    });

    // Event listener untuk tombol selanjutnya
    const nextBtn = document.createElement("div");
    nextBtn.className = "next";
    nextBtn.textContent = "\u2192";
    document.body.appendChild(nextBtn);
    nextBtn.addEventListener("click", function () {
        showSlide(++currentSlide);
    });
});

// Fungsi untuk menampilkan slide berdasarkan indeks
function showSlide(index) {
    const slides = document.getElementsByClassName("slide");

    // Atur indeks agar melingkar
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    // Sembunyikan semua slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Tampilkan slide dengan indeks tertentu
    slides[index].style.display = "block";
}