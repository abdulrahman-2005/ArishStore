let filteredPhones = []; // Initialize filteredPhones

const modeToggleButton = document.getElementById('mode-toggle');
const cssModeElement = document.getElementById('css-mode');

function setMode() {
    if (modeToggleButton.innerText === '☀️') {
        modeToggleButton.innerText = '🌙';
        cssModeElement.innerHTML = ` :root {
            --primary-color: #4a90e2;
            --secondary-color: #50c878;
            --background-color: #f8f9fa;
            --text-color: #333;
            --card-background: #ffffff;
            --shadow-color: rgba(0, 0, 0, 0.1);
        }
            `
    } else {
        modeToggleButton.innerText = '☀️';
        cssModeElement.innerHTML = `
        :root{
            --primary-color: #50c878;
            --secondary-color: #4a90e2;
            --background-color: #333;
            --text-color: #f8f9fa;
            --card-background: #444;
        --shadow-color: rgba(0, 0, 0, 0.5);}`
    }
}

modeToggleButton.addEventListener('click', () => {
    setMode();
});

PHONES_DATA.forEach(phone => {
    phone.rating = calculateRating();
});

function calculateRating() {
    return Math.random() * 5;
}

document.addEventListener('DOMContentLoaded', () => {
    setMode();
    const phoneList = document.getElementById('phone-list');
    const searchInput = document.getElementById('search');
    const storeFilter = document.getElementById('store-filter');
    const locationFilter = document.getElementById('location-filter');
    const companyFilter = document.getElementById('company-filter');
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const sortBySelect = document.getElementById('sort-by');

    function renderPhones(phones) {
        phoneList.innerHTML = '';
        phones.forEach(phone => {
            const phoneCard = document.createElement('div');
            phoneCard.classList.add('phone-card');
            phoneCard.innerHTML = `
                <h2 >${phone.name} <span class="rating rating-${Math.round(phone.rating)}">rating: ${phone.rating.toFixed(1)}</span></h2>
                <p class="price">$${phone.price}</p>
                <p><strong>Store:</strong> ${phone.store}</p>
                <p><strong>Location:</strong> ${phone.location}</p>
                <p><strong>Company:</strong> ${phone.company}</p>
                <h4>Specifications:</h4>
                <ul>${phone.info.map(i => `<li><strong>${i.title}:</strong> ${i.content}</li>`).join('')}</ul>
                <div class="tags">
                    ${phone.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <p style="width: 100% !important"></br><a href="${phone.link}" class="phone-button">Buy now</a></p>
            `;
            phoneList.appendChild(phoneCard);
        });
    }

    function filterPhones() {
        const searchTerm = searchInput.value.toLowerCase();
        const store = storeFilter.value;
        const location = locationFilter.value;
        const company = companyFilter.value;
        const minPrice = Number(minPriceInput.value) || 0;
        const maxPrice = Number(maxPriceInput.value) || Infinity;

        filteredPhones = PHONES_DATA.filter(phone =>
            phone.name.toLowerCase().includes(searchTerm) &&
            (!store || phone.store === store) &&
            (!location || phone.location === location) &&
            (!company || phone.company === company) &&
            phone.price >= minPrice && phone.price <= maxPrice
        );

        sortPhones();
        renderPhones(filteredPhones);
        updateURLParameters();
    }

    function populateFilters() {
        const stores = new Set();
        const locations = new Set();
        const companies = new Set();

        PHONES_DATA.forEach(phone => {
            stores.add(phone.store);
            locations.add(phone.location);
            companies.add(phone.company);
        });

        [
            { set: stores, element: storeFilter },
            { set: locations, element: locationFilter },
            { set: companies, element: companyFilter }
        ].forEach(({ set, element }) => {
            set.forEach(value => {
                const option = document.createElement('option');
                option.value = value;
                option.textContent = value;
                element.appendChild(option);
            });
        });
    }

    function sortPhones(sortBy = sortBySelect.value) {
        filteredPhones.sort((a, b) => {
            if (sortBy === 'price') return a.price - b.price;
            if (sortBy === 'price-desc') return b.price - a.price;
            if (sortBy === 'rating') return a.rating - b.rating;
            if (sortBy === 'rating-desc') return b.rating - a.rating;
            return 0;
        });
    }

    function updateURLParameters() {
        const params = new URLSearchParams();

        if (searchInput.value) params.set('search', searchInput.value);
        if (storeFilter.value) params.set('store', storeFilter.value);
        if (locationFilter.value) params.set('location', locationFilter.value);
        if (companyFilter.value) params.set('company', companyFilter.value);
        if (minPriceInput.value) params.set('minPrice', minPriceInput.value);
        if (maxPriceInput.value) params.set('maxPrice', maxPriceInput.value);

        history.replaceState(null, '', `${window.location.pathname}?${params.toString()}`);
    }

    function loadFiltersFromURL() {
        const params = new URLSearchParams(window.location.search);

        if (params.has('search')) searchInput.value = params.get('search');
        if (params.has('store')) storeFilter.value = params.get('store');
        if (params.has('location')) locationFilter.value = params.get('location');
        if (params.has('company')) companyFilter.value = params.get('company');
        if (params.has('minPrice')) minPriceInput.value = params.get('minPrice');
        if (params.has('maxPrice')) maxPriceInput.value = params.get('maxPrice');
        if (params.has('sortBy')) sortBySelect.value = params.get('sortBy');
    }

    // Event listeners
    searchInput.addEventListener('input', filterPhones);
    storeFilter.addEventListener('change', filterPhones);
    locationFilter.addEventListener('change', filterPhones);
    companyFilter.addEventListener('change', filterPhones);
    minPriceInput.addEventListener('input', filterPhones);
    maxPriceInput.addEventListener('input', filterPhones);
    sortBySelect.addEventListener('change', () => {
        sortPhones();
        renderPhones(filteredPhones);
    });

    // Initialize filters and phone list
    populateFilters();
    loadFiltersFromURL();
    filterPhones(); // Initial render based on current filters
});
