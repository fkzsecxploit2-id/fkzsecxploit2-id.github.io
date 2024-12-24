const product = [
    {
        id: 0,
        title: 'Home',
        linkz: './index.html',
    },

    {
        id: 1,
        title: 'About',
        linkz: './about/index.html',
    },

    {
        id: 2,
        title: 'Contact',
        linkz: './contact/index.html',
    },

    {
        id: 3,
        title: 'Download',
        linkz: './download/index.html',
    },

    {
        id: 4,
        title: 'Objective',
        linkz: './about/objective.html',
    },

    {
        id: 5,
        title: 'Tools',
        linkz: 'https://fkzsecxploit-id.github.io',
    },

    {
        id: 6,
        title: 'Community',
        linkz: './community/index.html',
    },

];

const categories = [...new Set(product.map((item) => { return item }))];

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    });
    displayItem(filteredData);
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { title, linkz } = item;
        return (
            `<div class="item-search">
                <div class="content-item-search">
                    <ul class="search-item">
                        <li class="li-search"><a href="${linkz}" class="item"><h3>${title}</h3></a></li>
                    </ul>
                </div>
            </div>`
        )
    }).join('');
};

displayItem(categories);
