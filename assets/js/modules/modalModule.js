export function initializeModals() {
    const openModalButtons = document.querySelectorAll('.open-modal');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const attr = button.getAttribute('modal-content');
            createModal(attr);
        });
    });

    function createModal(attr) {
        const modal = document.createElement('div');
        modal.className = 'modal w-full z-50 fixed top-0 left-0 flex items-center justify-center';

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content inset-shadow bg-white p-4 md:p-12 lg:p-16 rounded-3xl shadow border-4 border-black max-w-3xl mx-auto relative';

        const modalHead = document.createElement('div');
        modalHead.className = 'modal-head';

        const modalBody = document.createElement('div');
        modalBody.className = 'modal-body pt-6 md:pt-0 overflow-auto';

        const closeModalButton = document.createElement('img');
        closeModalButton.className = 'modal-close cursor-pointer absolute h-16 w-16';
        closeModalButton.src = './assets/img/close.png';
        closeModalButton.addEventListener('click', () => {
            modal.remove();
        });


        if (attr == "disclaimer") {
            modalBody.innerHTML = disclaimerContent
        }
        else if (attr == "kvkk") {
            modalBody.innerHTML = kvkkContent
        }
        else if (attr == "form") {
            modalBody.innerHTML = formContent
        }
        else if (attr == "congrat") {
            modalBody.innerHTML = congratContent
        }


        modalHead.appendChild(closeModalButton);
        modalContent.appendChild(modalHead);
        modalContent.appendChild(modalBody);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);


        const nestedModalButtons = modal.querySelectorAll('.open-modal');
        nestedModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                const nestedText = button.getAttribute('modal-content');
                createModal(nestedText);
            });
        });
    }
}



const disclaimerContent = `<div class="max-h-96 md:max-h-full"><div class="disclaimer font-poppins">
                    <p class="disclaimer-title text-2xl font-bold mb-4">Yarışma Koşulları</p>
                    <p class="disclaimer-text text-xs leading-6 overflow-auto max-h-96 text-gray-700">Lorem ipsum dolor? <br>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique et egestas
                        quis ipsum suspendisse ultrices gravida dictum. Tincidunt ornare massa eget egestas purus
                        viverra. Commodo sed egestas egestas fringilla phasellus. Congue quisque egestas diam in arcu
                        cursus euismod quis viverra. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet
                        proin. Felis imperdiet proin fermentum leo vel. Ac turpis egestas sed tempus. Est ante in nibh
                        mauris cursus mattis molestie a iaculis. Est ante in nibh mauris cursus mattis. Etiam non quam
                        lacus suspendisse faucibus. Netus et malesuada fames ac turpis egestas sed. Duis ut diam quam
                        nulla. Porttitor leo a diam sollicitudin tempor. Suscipit tellus mauris a diam maecenas sed.
                        Nulla posuere so<br> <br>Nulla posuere sollicitudin? <br>Nulla posuere sollicitudin aliquam
                        ultrices sagittis. Nunc lobortis mattis aliquam faucibus purus in massa. Diam maecenas ultricies
                        mi eget mauris pharetra. Semper quis lectus nulla at volutpat diam. Porttitor rhoncus dolor
                        purus non enim praesent elementum facilisis leo. In arcu cursus euismod quis viverra nibh.
                        Curabitur vitae nunc sed velit dignissim sodales ut eu. Arcu vitae elementum curabitur vitae
                        nunc sed. Egestas congue quisque egestas diam in. Odio eu feugiat pretium nibh ipsum consequat
                        nisl. Ultrices dui sapien eget mi proin sed libero enim sed. Feugiat in fermentum posuere urna
                        nec. Amet volutpat consequat mauris nunc congue nisi vitae. Orci a scelerisque purus semper eget
                        duis at. Turpis egestas pretium aenean pharetra magna. Nunc id cursus metus aliquam. Suspendisse
                        ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Ultricies tristique nulla
                        aliquet enim tortor at.</p>
                </div></div>`



const kvkkContent = `<div class="max-h-96 md:max-h-full"><div class="disclaimer font-poppins">
<p class="disclaimer-title text-2xl font-bold mb-4">KVKK</p>
<p class="disclaimer-text text-xs leading-6 overflow-auto max-h-96 text-gray-700">Lorem ipsum dolor? <br>Lorem ipsum dolor sit amet, consectetur adipiscing
    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique et egestas
    quis ipsum suspendisse ultrices gravida dictum. Tincidunt ornare massa eget egestas purus
    viverra. Commodo sed egestas egestas fringilla phasellus. Congue quisque egestas diam in arcu
    cursus euismod quis viverra. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet
    proin. Felis imperdiet proin fermentum leo vel. Ac turpis egestas sed tempus. Est ante in nibh
    mauris cursus mattis molestie a iaculis. Est ante in nibh mauris cursus mattis. Etiam non quam
    lacus suspendisse faucibus. Netus et malesuada fames ac turpis egestas sed. Duis ut diam quam
    nulla. Porttitor leo a diam sollicitudin tempor. Suscipit tellus mauris a diam maecenas sed.
    Nulla posuere so<br> <br>Nulla posuere sollicitudin? <br>Nulla posuere sollicitudin aliquam
    ultrices sagittis. Nunc lobortis mattis aliquam faucibus purus in massa. Diam maecenas ultricies
    mi eget mauris pharetra. Semper quis lectus nulla at volutpat diam. Porttitor rhoncus dolor
    purus non enim praesent elementum facilisis leo. In arcu cursus euismod quis viverra nibh.
    Curabitur vitae nunc sed velit dignissim sodales ut eu. Arcu vitae elementum curabitur vitae
    nunc sed. Egestas congue quisque egestas diam in. Odio eu feugiat pretium nibh ipsum consequat
    nisl. Ultrices dui sapien eget mi proin sed libero enim sed. Feugiat in fermentum posuere urna
    nec. Amet volutpat consequat mauris nunc congue nisi vitae. Orci a scelerisque purus semper eget
    duis at. Turpis egestas pretium aenean pharetra magna. Nunc id cursus metus aliquam. Suspendisse
    ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Ultricies tristique nulla
    aliquet enim tortor at.</p>
</div></div>`

const formContent = `<div class="max-h-96 md:max-h-full"> <h3 class="text-xl md:text-3xl mb-6"><strong>20 yıl sonraki</strong> kendine mesaj<br> gönderebilsen <strong>ne
                        derdin?</strong></h3>
                <p class="text-sm mb-6 text-gray-700">20 yıl sonrası için dilek ve beklentilerini <strong>31
                        Ocak</strong>tarihine kadar yaz. <strong>Herkes görsün, beğensin.</strong> 31 Ocak
                    2023 tarihine kadar en çok beğeni alan <strong>5 kişiden</strong> biri ol! 20 yıl garantili Seçili
                    Samsung beyaz
                    eşyalarda geçerli <strong>%20 indirim koduna sahip ol.</strong></p>
                <div class="flex flex-col md:flex-row w-full justify-between mb-4">
                    <div class="mb-5 md:mb-0"><input type="text"
                            class="w-full rounded-xl shadow border-2 border-black px-6 py-4 text-xl font-poppins text-gray-700 inset-shadow"
                            placeholder="Ad Soyad" />
                    </div>
                    <div><input type="text"
                            class="w-full rounded-xl shadow border-2 border-black px-6 py-4 text-xl font-poppins text-gray-700 inset-shadow"
                            placeholder="E-mail" />
                    </div>
                </div>
                <div class="mb-6">
                    <textarea type="text"
                        class="w-full rounded-xl shadow border-2 border-black px-6 py-4 text-xl font-poppins text-gray-700 inset-shadow"
                        placeholder="Geleceğe Mesajını Bırak..." rows="4"></textarea>
                </div>

                <div class="mb-6 flex flex-col md:flex-row justify-between items-center">
                    <div class="text-sm font-semibold mb-4 md:mb-0">
                        <a modal-content="kvkk" class="hover:no-underline underline cursor-pointer open-modal">KVKK
                            metnini okudum, anladım.</a>
                    </div>
                    <div class="send-form-btn py-5 px-20 font-bold text-lg cursor-pointer open-modal" modal-content="congrat">Gönder</div>
                </div>

                <div class="font-poppins text-xs text-gray-500 mb-6">
                    *İndirim oranı, tavsiye edilen satış fiyatı üzerinden, 20 yıl Dijital Inverter Motor ve Dijital
                    Inverter Kompresör garantili seçilmiş ürünlerde geçerlidir. İndirim kodu 31 Mart 2023 tarihine kadar
                    geçerlidir.**Seçili Samsung çamaşır ve kurutma makineleri 20 yıl Dijital Inverter Motor garantili,
                    seçili Samsung buzdolapları 20 yıl Dijital Inverter Kompresör garantilidir. Detaylı bilgi için
                    <a class="underline"
                        href="https://www.samsung.com/tr/secili-beyaz-esyalarda-20-yil-garanti/">https://www.samsung.com/tr/secili-beyaz-esyalarda-20-yil-garanti/</a>
                </div>
                <div class="text-center text-sm font-semibold">
                    <a modal-content="disclaimer"
                        class="hover:no-underline underline  cursor-pointer open-modal">Yarışma
                        Koşulları</a>
                </div>
                </div>
`


const congratContent = ` <div class="max-h-96 md:max-h-full"><h2 class="text-2xl md:text-5xl font-semibold mb-8">Tebrikler,</h2>
        <h3 class="text-xl md:text-3xl mb-6"><strong>20 yıl sonraki</strong> kendine mesaj<br> gönderebilsen <strong>ne
                derdin?</strong></h3>
        <p class="text-sm mb-6 text-gray-700">20 yıl sonrası için dilek ve beklentilerini <strong>31
                Ocak</strong>tarihine kadar yaz. <strong>Herkes görsün, beğensin.</strong> 31 Ocak
            2023 tarihine kadar en çok beğeni alan <strong>5 kişiden</strong> biri ol! 20 yıl garantili Seçili
            Samsung beyaz
            eşyalarda geçerli <strong>%20 indirim koduna sahip ol.</strong></p>

        <div class="w-full my-8">
            <img src="./assets/img/sent.png" class="hidden md:block w-full" />
            <img src="./assets/img/msent.png" class="block md:hidden w-full max-w-sm mx-auto" />
        </div>


        <div class="font-poppins text-xs text-gray-500 mb-6">
            *İndirim oranı, tavsiye edilen satış fiyatı üzerinden, 20 yıl Dijital Inverter Motor ve Dijital
            Inverter Kompresör garantili seçilmiş ürünlerde geçerlidir. İndirim kodu 31 Mart 2023 tarihine kadar
            geçerlidir.**Seçili Samsung çamaşır ve kurutma makineleri 20 yıl Dijital Inverter Motor garantili,
            seçili Samsung buzdolapları 20 yıl Dijital Inverter Kompresör garantilidir. Detaylı bilgi için
            <a class="underline"
                href="https://www.samsung.com/tr/secili-beyaz-esyalarda-20-yil-garanti/">https://www.samsung.com/tr/secili-beyaz-esyalarda-20-yil-garanti/</a>
        </div>
        <div class="text-center text-sm font-semibold">
            <a modal-content="disclaimer" class="hover:no-underline underline  cursor-pointer open-modal">Yarışma
                Koşulları</a>
        </div></div>
`