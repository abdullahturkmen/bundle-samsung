export const tweetList = (filter) => {
    const tweets = [
        {
            id: 1,
            author: "Emre Boz",
            tweetContent: "😍 Kısmetse Olur'un yeni sezonunu beğendin mi?",
            likeCount: 25,
            highlight: true
        },
        {
            id: 2,
            author: "Ayşe Yıldız",
            tweetContent: "🎉 Bu hafta sonu yapılacak etkinliklere katılmayı planlıyor musunuz?",
            likeCount: 30,
            highlight: false
        },
        {
            id: 3,
            author: "Mert Demir",
            tweetContent: "📚 Yeni okuduğum kitabı çok sevdim! Tavsiyeleriniz var mı?",
            likeCount: 45,
            highlight: false
        },
        {
            id: 4,
            author: "Elif Kaya",
            tweetContent: "🌞 Bugün hava çok güzel! Sahile giden var mı?",
            likeCount: 50,
            highlight: false
        },
        {
            id: 5,
            author: "Ali Can",
            tweetContent: "💻 Yeni bir laptop almak istiyorum. Öneriniz var mı?",
            likeCount: 10,
            highlight: false
        },
        {
            id: 6,
            author: "Zeynep Tekin",
            tweetContent: "🍕 En sevdiğiniz pizza nerede yapılıyor?",
            likeCount: 15,
            highlight: false
        },
        {
            id: 7,
            author: "Ahmet Yılmaz",
            tweetContent: "🎬 Son izlediğiniz film neydi? Tavsiye eder misiniz?",
            likeCount: 20,
            highlight: false
        },
        {
            id: 8,
            author: "Burcu Aslan",
            tweetContent: "🏃‍♂️ Bu sabah koşuya çıktım, çok iyi geldi!",
            likeCount: 18,
            highlight: false
        },
        {
            id: 9,
            author: "Cem Karaca",
            tweetContent: "🎶 Yeni çıkan albümleri dinlediniz mi? Favoriniz hangisi?",
            likeCount: 40,
            highlight: true
        },
        {
            id: 10,
            author: "Deniz Arslan",
            tweetContent: "☕️ En iyi kahveyi nerede bulabilirim?",
            likeCount: 25,
            highlight: false
        },
        {
            id: 11,
            author: "Ebru Kılıç",
            tweetContent: "📸 Bugün fotoğraf çekmek için harika bir gün!",
            likeCount: 22,
            highlight: false
        },
        {
            id: 12,
            author: "Fatih Çelik",
            tweetContent: "🌲 Doğada yürüyüş yapmak isteyen var mı?",
            likeCount: 33,
            highlight: false
        },
        {
            id: 13,
            author: "Gizem Şahin",
            tweetContent: "🍰 En sevdiğiniz tatlı hangisi?",
            likeCount: 27,
            highlight: false
        },
        {
            id: 14,
            author: "Hakan Demir",
            tweetContent: "📱 Yeni bir telefon aldım, çok memnunum!",
            likeCount: 36,
            highlight: false
        },
        {
            id: 15,
            author: "İrem Koç",
            tweetContent: "🏖️ Tatil için nereye gitmeyi planlıyorsunuz?",
            likeCount: 28,
            highlight: false
        },
        {
            id: 16,
            author: "Emir Sarı",
            tweetContent: "🍔 En sevdiğiniz hamburger nerede yapılıyor?",
            likeCount: 23,
            highlight: false
        },
        {
            id: 17,
            author: "Leyla Erdem",
            tweetContent: "🎮 En son oynadığınız oyun hangisi?",
            likeCount: 32,
            highlight: false
        },
        {
            id: 18,
            author: "Merve Kılıç",
            tweetContent: "🏡 Hafta sonu tatilinde ne yapmayı planlıyorsunuz?",
            likeCount: 12,
            highlight: false
        },
        {
            id: 19,
            author: "Ozan Arslan",
            tweetContent: "🎤 En son gittiğiniz konser hangisiydi?",
            likeCount: 27,
            highlight: false
        },
        {
            id: 20,
            author: "Selin Kaya",
            tweetContent: "🍲 En sevdiğiniz yemek nedir?",
            likeCount: 19,
            highlight: false
        },
        {
            id: 21,
            author: "Barış Özdemir",
            tweetContent: "🏀 Hangi basketbol takımını tutuyorsunuz?",
            likeCount: 34,
            highlight: false
        },
        {
            id: 22,
            author: "Esra Tekin",
            tweetContent: "📷 Fotoğraf çekmeyi sever misiniz?",
            likeCount: 15,
            highlight: false
        },
        {
            id: 23,
            author: "Murat Yıldız",
            tweetContent: "🚗 Araba kullanmayı seviyor musunuz?",
            likeCount: 21,
            highlight: true
        },
        {
            id: 24,
            author: "Gül Şahin",
            tweetContent: "🌸 Baharın gelişi sizi mutlu ediyor mu?",
            likeCount: 17,
            highlight: false
        },
        {
            id: 25,
            author: "Eren Aydın",
            tweetContent: "🍷 En sevdiğiniz içecek hangisi?",
            likeCount: 26,
            highlight: false
        },
        {
            id: 26,
            author: "Buse Arslan",
            tweetContent: "🏝️ Tatil planlarınız var mı?",
            likeCount: 14,
            highlight: false
        },
        {
            id: 27,
            author: "Kerem Demir",
            tweetContent: "📺 En sevdiğiniz TV programı nedir?",
            likeCount: 29,
            highlight: true
        },
        {
            id: 28,
            author: "Aslı Yıldız",
            tweetContent: "🎵 Hangi müzik türünü seversiniz?",
            likeCount: 22,
            highlight: true
        },
        {
            id: 29,
            author: "Arda Kaya",
            tweetContent: "📝 Yazı yazmayı sever misiniz?",
            likeCount: 18,
            highlight: true
        },
        {
            id: 30,
            author: "Canan Demir",
            tweetContent: "📚 Hangi tür kitapları okumayı seversiniz?",
            likeCount: 20,
            highlight: true
        },
        {
            id: 31,
            author: "Efe Kaya",
            tweetContent: "🏋️‍♂️ Spor yapmayı sever misiniz?",
            likeCount: 31,
            highlight: false
        },
        {
            id: 32,
            author: "Derya Yıldız",
            tweetContent: "🎂 En sevdiğiniz pasta hangisi?",
            likeCount: 24,
            highlight: true
        },
        {
            id: 33,
            author: "Seda Tekin",
            tweetContent: "🎨 Hangi sanatı yapmayı seversiniz?",
            likeCount: 19,
            highlight: false
        },
        {
            id: 34,
            author: "Deniz Özdemir",
            tweetContent: "🎢 En sevdiğiniz eğlence parkı hangisi?",
            likeCount: 16,
            highlight: false
        },
        {
            id: 35,
            author: "Melis Arslan",
            tweetContent: "🐶 Evcil hayvanınız var mı?",
            likeCount: 27,
            highlight: false
        }
    ];

    const tweetList = document.getElementById('tweet-list');
    tweetList.innerHTML = '';

    let indexNum = 0;
    tweets.forEach((tweet, index) => {
        if (filter && !tweet.highlight) return;
        let liClass = "w-full md:w-1/2 p-0 flex items-center justify-center relative "

        if (indexNum % 2 === 0) {
            liClass = `${liClass} left-items`;
        }
        else {
            liClass = `${liClass} right-items`;
        }

        const inner = `<li class="${liClass}">
        <div class="inset-shadow bg-white p-7 rounded-3xl shadow w-full md:w-2/3 border-2 border-black font-poppins m-2 md:m-8 lg:m-14">
        <div class="tweet-text text-lg mb-6">${tweet.tweetContent}</div>
        <div class="innerDiv1 flex justify-between text-xs">
        <div class="innerDiv3 flex sm:flex-col lg:flex-row">
        <div class="author-name border-r border-gray-400 pr-2 mr-2">${tweet.author}</div>
        <div class="like-count flex">${tweet.likeCount}</div>
        </div>
        <div class="innerDiv4 flex sm:flex-col lg:flex-row">
        <div class="share-btn flex justify-start sm:justify-end lg:justify-start">
        <a class="flex" href="https://x.com/intent/tweet?text=${encodeURIComponent(tweet.tweetContent)}" target="_blank">Paylaş</a>
        </div>
        <div class="like-btn flex ml-4">
        <a class="flex" href="https://x.com/intent/tweet?text=${encodeURIComponent(tweet.tweetContent)}" target="_blank">Beğen</a>
        </div>
        </div>
        </div>
        </div>
        </li>`;

        tweetList.innerHTML += inner

        indexNum++
    });

}