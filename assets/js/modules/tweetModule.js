export const tweetList = () => {
    const tweets = [
        {
            id: 1,
            author: "Emre Boz",
            tweetContent: "😍 Kısmetse Olur'un yeni sezonunu beğendin mi?",
            likeCount: 25
        },
        {
            id: 2,
            author: "Ayşe Yıldız",
            tweetContent: "🎉 Bu hafta sonu yapılacak etkinliklere katılmayı planlıyor musunuz?",
            likeCount: 30
        },
        {
            id: 3,
            author: "Mert Demir",
            tweetContent: "📚 Yeni okuduğum kitabı çok sevdim! Tavsiyeleriniz var mı?",
            likeCount: 45
        },
        {
            id: 4,
            author: "Elif Kaya",
            tweetContent: "🌞 Bugün hava çok güzel! Sahile giden var mı?",
            likeCount: 50
        },
        {
            id: 5,
            author: "Ali Can",
            tweetContent: "💻 Yeni bir laptop almak istiyorum. Öneriniz var mı?",
            likeCount: 10
        },
        {
            id: 6,
            author: "Zeynep Tekin",
            tweetContent: "🍕 En sevdiğiniz pizza nerede yapılıyor?",
            likeCount: 15
        },
        {
            id: 7,
            author: "Ahmet Yılmaz",
            tweetContent: "🎬 Son izlediğiniz film neydi? Tavsiye eder misiniz?Son izlediğiniz film neydi?",
            likeCount: 20
        },
        {
            id: 8,
            author: "Burcu Aslan",
            tweetContent: "🏃‍♂️ Bu sabah koşuya çıktım, çok iyi geldi!",
            likeCount: 18
        },
        {
            id: 9,
            author: "Cem Karaca",
            tweetContent: "🎶 Yeni çıkan albümleri dinlediniz mi? Favoriniz hangisi?",
            likeCount: 40
        },
        {
            id: 10,
            author: "Deniz Arslan",
            tweetContent: "☕️ En iyi kahveyi nerede bulabilirim?",
            likeCount: 25
        },
        {
            id: 11,
            author: "Ebru Kılıç",
            tweetContent: "📸 Bugün fotoğraf çekmek için harika bir gün!",
            likeCount: 22
        },
        {
            id: 12,
            author: "Fatih Çelik",
            tweetContent: "🌲 Doğada yürüyüş yapmak isteyen var mı?",
            likeCount: 33
        },
        {
            id: 13,
            author: "Gizem Şahin",
            tweetContent: "🍰 En sevdiğiniz tatlı hangisi?",
            likeCount: 27
        },
        {
            id: 14,
            author: "Hakan Demir",
            tweetContent: "📱 Yeni bir telefon aldım, çok memnunum!",
            likeCount: 36
        },
        {
            id: 15,
            author: "İrem Koç",
            tweetContent: "🏖️ Tatil için nereye gitmeyi planlıyorsunuz?",
            likeCount: 28
        },
        {
            id: 1,
            author: "Emre Boz",
            tweetContent: "😍 Kısmetse Olur'un yeni sezonunu beğendin mi?",
            likeCount: 25
        },
        {
            id: 2,
            author: "Ayşe Yıldız",
            tweetContent: "🎉 Bu hafta sonu yapılacak etkinliklere katılmayı planlıyor musunuz?",
            likeCount: 30
        },
        {
            id: 3,
            author: "Mert Demir",
            tweetContent: "📚 Yeni okuduğum kitabı çok sevdim! Tavsiyeleriniz var mı?",
            likeCount: 45
        },
        {
            id: 4,
            author: "Elif Kaya",
            tweetContent: "🌞 Bugün hava çok güzel! Sahile giden var mı?",
            likeCount: 50
        },
        {
            id: 5,
            author: "Ali Can",
            tweetContent: "💻 Yeni bir laptop almak istiyorum. Öneriniz var mı?",
            likeCount: 10
        },
        {
            id: 6,
            author: "Zeynep Tekin",
            tweetContent: "🍕 En sevdiğiniz pizza nerede yapılıyor?",
            likeCount: 15
        },
        {
            id: 7,
            author: "Ahmet Yılmaz",
            tweetContent: "🎬 Son izlediğiniz film neydi? Tavsiye eder misiniz?",
            likeCount: 20
        },
        {
            id: 8,
            author: "Burcu Aslan",
            tweetContent: "🏃‍♂️ Bu sabah koşuya çıktım, çok iyi geldi!",
            likeCount: 18
        },
        {
            id: 9,
            author: "Cem Karaca",
            tweetContent: "🎶 Yeni çıkan albümleri dinlediniz mi? Favoriniz hangisi?",
            likeCount: 40
        },
        {
            id: 10,
            author: "Deniz Arslan",
            tweetContent: "☕️ En iyi kahveyi nerede bulabilirim?",
            likeCount: 25
        },
        {
            id: 11,
            author: "Ebru Kılıç",
            tweetContent: "📸 Bugün fotoğraf çekmek için harika bir gün!",
            likeCount: 22
        },
        {
            id: 12,
            author: "Fatih Çelik",
            tweetContent: "🌲 Doğada yürüyüş yapmak isteyen var mı?",
            likeCount: 33
        },
        {
            id: 13,
            author: "Gizem Şahin",
            tweetContent: "🍰 En sevdiğiniz tatlı hangisi?",
            likeCount: 27
        },
        {
            id: 14,
            author: "Hakan Demir",
            tweetContent: "📱 Yeni bir telefon aldım, çok memnunum!",
            likeCount: 36
        },
        {
            id: 15,
            author: "İrem Koç",
            tweetContent: "🏖️ Tatil için nereye gitmeyi planlıyorsunuz?",
            likeCount: 28
        }
    ];
    ;



    const tweetList = document.getElementById('tweet-list');

    tweets.forEach((tweet, index) => {
        const li = document.createElement('li');
        const liClass = "w-full md:w-1/2 p-2 md:p-8 md:p-14 flex items-center justify-center relative "


        if (index % 2 === 0) {
            li.className = `${liClass} left-items`;
        }
        else {
            li.className = `${liClass} right-items`;
        }

        const innerDiv = document.createElement('div');
        innerDiv.className = 'inner-element bg-white p-6 rounded-3xl shadow w-full md:w-2/3 border-2 border-black font-poppins';

        const tweetTextDiv = document.createElement('div');
        tweetTextDiv.className = 'tweet-text text-lg mb-4';
        tweetTextDiv.textContent = tweet.tweetContent;

        const innerDiv1 = document.createElement('div');
        innerDiv1.className = 'innerDiv1 flex justify-between text-xs'

        const innerDiv3 = document.createElement('div');
        innerDiv3.className = 'innerDiv3 flex'

        const authorNameDiv = document.createElement('div');
        authorNameDiv.className = 'author-name';
        authorNameDiv.textContent = tweet.author;

        const likeCountDiv = document.createElement('div');
        likeCountDiv.className = 'like-count';
        likeCountDiv.textContent = `Likes: ${tweet.likeCount}`;

        innerDiv3.appendChild(authorNameDiv);
        innerDiv3.appendChild(likeCountDiv);

        const innerDiv4 = document.createElement('div');
        innerDiv4.className = 'innerDiv4 flex'

        const shareBtnDiv = document.createElement('div');
        shareBtnDiv.className = 'share-btn';
        const shareButton = document.createElement('button');
        shareButton.textContent = 'Paylaş';
        shareBtnDiv.appendChild(shareButton);

        const likeBtnDiv = document.createElement('div');
        likeBtnDiv.className = 'like-btn';
        const likeButton = document.createElement('button');
        likeButton.textContent = 'Beğen';
        likeBtnDiv.appendChild(likeButton);

        innerDiv4.appendChild(shareBtnDiv);
        innerDiv4.appendChild(likeBtnDiv);

        innerDiv1.appendChild(innerDiv3);
        innerDiv1.appendChild(innerDiv4);

        innerDiv.appendChild(tweetTextDiv);
        innerDiv.appendChild(innerDiv1);

        li.appendChild(innerDiv);

        tweetList.appendChild(li);
    });

}