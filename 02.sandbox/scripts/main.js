(() => {
    'use strict';

    fetch('fake-data.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        let brand = document.getElementById('brand');
        brand.innerText = data.header.brand;

        console.log('data', data);
    });

})();
