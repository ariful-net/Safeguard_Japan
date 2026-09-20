const translations = {
    en: {
        alert: "JMA Alert: Moderate Seismic Activity detected near Kansai region.",
        statusTitle: "Report Your Safety Status"
    },
    jp: {
        alert: "気象庁情報：関西地方で緩やかな地震活動が検出されました。",
        statusTitle: "安否状況を報告する"
    },
    bn: {
        alert: "জেএমএ সতর্কতা: কানসাই অঞ্চলের কাছে মৃদু ভূকম্পন অনুভূত হয়েছে।",
        statusTitle: "আপনার নিরাপত্তা রিপোর্ট করুন"
    }
};

function changeLanguage() {
    const lang = document.getElementById('langSelect').value;
    if(translations[lang]) {
        document.getElementById('alertMsg').innerText = translations[lang].alert;
        document.getElementById('statusTitle').innerText = translations[lang].statusTitle;
    }
}

function sendQuickSOS() {
    alert("SOS Signal Sent with your Current GPS Location!");
}

function updateSafetyStatus(status) {
    alert("Safety Status Updated To: " + status);
}