window.addEventListener('load', navigatorPage, false)
window.addEventListener('hashchange', navigatorPage, false)

function navigatorPage() {

    console.log({ location })

    if (location.hash.startsWith('#trends')) {
        trendsPage()
    } else if (location.hash.startsWith('#search=')) {
        searchPage()
    } else if (location.hash.startsWith('#movie=')) {
        moviePage()
    } else if (location.hash.startsWith('#category=')) {
        categoriesPage()
    } else {
        homePage()
    }

    location.hash
}


function homePage() {
    console.log('Home')
}

function trendsPage() {
    console.log('Trends')
}

function searchPage() {
    console.log('Search')
}

function moviePage() {
    console.log('Movie')
}

function categoriesPage() {
    console.log('Categories')
}
