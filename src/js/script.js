onload = () => {
    setTimeout(() => {
        document.body.classList.remove("container");
    }, 1000); // Added a slight delay to ensure smooth animation start

    const buttons = document.querySelectorAll('.love-button');
    let currentButton = 0;

    function showMessage(message) {
        const popup = document.createElement('div');
        popup.className = 'message-popup';
        popup.textContent = message;
        popup.style.left = `${50}%`;
        popup.style.top = `${50}%`;
        popup.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.remove();
            if (currentButton < buttons.length - 1) {
                buttons[currentButton].style.transform = 'scale(0.7)';
                buttons[currentButton].style.opacity = '0.5';
                currentButton++;
                buttons[currentButton].classList.remove('hidden');
            }
        }, 3000);
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const message = button.getAttribute('data-message');
            showMessage(message);
            button.style.pointerEvents = 'none';
        });
    });
};