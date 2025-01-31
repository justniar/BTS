import React, { useState } from "react";
import { AppContainer, OptionButton, OptionList } from "../styled";

const storyData = {
  "awal": {
    "text": "Kamu terbangun di tengah hutan yang gelap. Di depanmu ada dua jalan: satu menuju ke bukit, satu lagi menuju ke lembah.",
    "options": [
      { "text": "Pergi ke bukit", "next": "bukit" },
      { "text": "Pergi ke lembah", "next": "lembah" }
    ]
  },
  "bukit": {
    "text": "Setelah mendaki bukit, kamu melihat sebuah menara tua di kejauhan. Kamu bisa mendekati menara atau mencari jalan lain.",
    "options": [
      { "text": "Mendekati menara", "next": "menara" },
      { "text": "Mencari jalan lain", "next": "jalanLain" }
    ]
  },
  "lembah": {
    "text": "Di lembah, kamu menemukan sebuah gua gelap. Ada juga sungai yang mengalir deras di dekatnya. Apa yang akan kamu lakukan?",
    "options": [
      { "text": "Masuk ke gua", "next": "gua" },
      { "text": "Menyusuri sungai", "next": "sungai" }
    ]
  },
  "menara": {
    "text": "Di dalam menara, kamu menemukan sebuah buku tua yang penuh dengan peta dan rahasia. Kamu bisa membaca buku itu atau membawa buku itu keluar.",
    "options": [
      { "text": "Membaca buku", "next": "bacaBuku" },
      { "text": "Membawa buku keluar", "next": "bawaBuku" }
    ]
  },
  "jalanLain": {
    "text": "Kamu menemukan perkemahan yang ditinggalkan. Ada sisa-sisa makanan dan pedang berkarat. Kamu bisa mengambil pedang atau melanjutkan perjalanan.",
    "options": [
      { "text": "Mengambil pedang", "next": "ambilPedang" },
      { "text": "Melanjutkan perjalanan", "next": "lanjutPerjalanan" }
    ]
  },
  "gua": {
    "text": "Di dalam gua, kamu menemukan seekor naga yang sedang tidur di atas tumpukan emas. Kamu bisa mencoba mencuri emas atau melarikan diri.",
    "options": [
      { "text": "Mencuri emas", "next": "curiEmas" },
      { "text": "Melarikan diri", "next": "lariDariGua" }
    ]
  },
  "sungai": {
    "text": "Saat menyusuri sungai, kamu menemukan perahu kecil. Kamu bisa menyeberang sungai dengan perahu atau melanjutkan berjalan di tepi sungai.",
    "options": [
      { "text": "Menyeberang sungai", "next": "seberangSungai" },
      { "text": "Melanjutkan berjalan", "next": "jalanTepiSungai" }
    ]
  },
  "bacaBuku": {
    "text": "Kamu membaca buku itu dan menemukan rahasia menuju kota harta karun. Selamat, petualanganmu berlanjut!",
    "options": [{ "text": "Mulai lagi", "next": "awal" }]
  },
  "bawaBuku": {
    "text": "Saat membawa buku keluar, kamu disergap oleh bandit. Petualanganmu berakhir di sini.",
    "options": [{ "text": "Mulai lagi", "next": "awal" }]
  },
  "ambilPedang": {
    "text": "Dengan pedang di tangan, kamu merasa lebih percaya diri untuk melanjutkan perjalanan. Kamu siap menghadapi apapun!",
    "options": [{ "text": "Mulai lagi", "next": "awal" }]
  },
  "lanjutPerjalanan": {
    "text": "Saat melanjutkan perjalanan, kamu tersesat di hutan. Petualanganmu berakhir di sini.",
    "options": [{ "text": "Mulai lagi", "next": "awal" }]
  },
  "curiEmas": {
    "text": "Saat mencoba mencuri emas, naga itu terbangun. Petualanganmu berakhir di sini.",
    "options": [{ "text": "Mulai lagi", "next": "awal" }]
  },
  "lariDariGua": {
    "text": "Kamu berhasil melarikan diri dan menemukan jalan keluar dari gua. Petualanganmu berlanjut!",
    "options": [{ "text": "Mulai lagi", "next": "awal" }]
  },
  "seberangSungai": {
    "text": "Kamu menyeberang sungai dan menemukan desa yang damai. Selamat, kamu selamat!",
    "options": [{ "text": "Mulai lagi", "next": "awal" }]
  },
  "jalanTepiSungai": {
    "text": "Saat berjalan di tepi sungai, kamu terpeleset dan jatuh ke air. Petualanganmu berakhir di sini.",
    "options": [{ "text": "Mulai lagi", "next": "awal" }]
  }
}


const StoryGame = () => {
  const [currentStep, setCurrentStep] = useState("awal");

  const handleOptionClick = (nextStep) => {
    setCurrentStep(nextStep);
  };

  const currentStory = storyData[currentStep];

  if (!currentStory) {
    return <div>Loading...</div>;
  }

  return (
    <AppContainer style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Pilih Petualanganmu</h1>
      <p>{currentStory.text}</p>
      <OptionList>
        {currentStory.options.map((option, index) => (
          <OptionButton
            key={index}
            onClick={() => handleOptionClick(option.next)}
            style={{
              display: "block",
              margin: "10px 0",
              padding: "10px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {option.text}
          </OptionButton>
        ))}
      </OptionList>
    </AppContainer>
  );
};

export default StoryGame;
