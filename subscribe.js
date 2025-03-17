document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('subscribeForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    alert('Subscription successful!');
                    form.reset();
                } else {
                    throw new Error('Subscription failed');
                }
            })
            .catch(error => {
                alert('An error occurred while subscribing. Please try again later.');
                console.error('Error:', error);
            });
    });
});
