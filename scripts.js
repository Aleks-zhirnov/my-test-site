document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Здесь можно добавить отправку данных на сервер через AJAX
        alert('Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.');
        form.reset();
    });
});
