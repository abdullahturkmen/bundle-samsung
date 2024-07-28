export function setupModal() {
    document.addEventListener('DOMContentLoaded', function () {
        const modal = document.getElementById('myModal');
        const modalBody = document.querySelector('.modal-bodyx');  // TODO: x harfini yokeeeeet
        const closeModalBtn = document.getElementById('closeModalBtn');


        const buttons = document.querySelectorAll('.open-modal');

        buttons.forEach((button, index) => {
            button.addEventListener('click', function () {
                modal.style.display = 'flex';
                modalBody.innerHTML += disclaimerContent
            });
        });


        // openModalBtn.addEventListener('click', function () {
        //     modal.style.display = 'flex';
        // });

        closeModalBtn.addEventListener('click', function () {
            modal.style.display = 'none';
            modalBody.innerHTML = ''
        });

        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                modalBody.innerHTML = ''
            }
        });
    });
}



const disclaimerContent = `<div class="disclaimer font-poppins">
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
                </div>`



const kvkkContent = `<div class="disclaimer font-poppins">
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
</div>`