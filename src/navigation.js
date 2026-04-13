searchFormButton.addEventListener('click', () => {
    location.hash = `#search=${searchInput.value}`
})

trendingButton.addEventListener('click', () => {
    location.hash = '#trends'
})

backButton.addEventListener('click', () => {
    history.back() 
})

window.addEventListener('load', navigatorPage, false)
window.addEventListener('hashchange', navigatorPage, false)

function navigatorPage() {

    console.log({ location })

    if (location.hash.startsWith('#trends')) {
        trendsPage()
    } else if (location.hash.startsWith('#search=')) {
        searchPage()
    } else if (location.hash.startsWith('#movie=')) {
        movieDetailsPage()
    } else if (location.hash.startsWith('#category=')) {
        categoriesPage()
    } else {
        homePage()
    }

    document.documentElement.scrollTop = 0
}

function homePage() {

    console.log('Home')

    headerTitle.innerText = 'The best movies'

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = ''
    backButton.classList.add('hidden')
    backButton.classList.remove('md:inline-block')
    headerCategoryTitle.classList.add('hidden')
    searchForm.classList.remove('hidden')

    trendingPreviewSection.classList.remove('hidden')
    categoriesPreviewSection.classList.remove('hidden')
    genericListSection.classList.add('hidden')
    movieDetailSection.classList.add('hidden')

    getTrendingMoviesPreview()
    getCategoriesPreview()
}

function trendsPage() {
    console.log('Trends')


    headerTitle.innerText = ''
    headerTitle.innerText = 'Tendencias'
    headerSection.classList.remove('header-container--long')
    headerTitle.classList.remove('hidden')
    headerCategoryTitle.classList.add('hidden')
    // headerSection.style.background = ''
    backButton.classList.add('hidden')
    backButton.classList.add('md:inline-block')

    searchForm.classList.add('hidden')

    trendingPreviewSection.classList.add('hidden')
    categoriesPreviewSection.classList.add('hidden')
    genericListSection.classList.remove('hidden')
    movieDetailSection.classList.add('hidden')

    getTrendingMovies()
}

function searchPage() {
    console.log('Search')

    headerSection.classList.remove('header-container--long')
    headerTitle.classList.add('hidden')
    headerCategoryTitle.classList.remove('hidden')
    // headerSection.style.background = ''
    backButton.classList.add('hidden')
    backButton.classList.add('md:inline-block')

    searchForm.classList.remove('hidden')

    trendingPreviewSection.classList.add('hidden')
    categoriesPreviewSection.classList.add('hidden')
    genericListSection.classList.remove('hidden')
    movieDetailSection.classList.add('hidden')

    const [_, query] = location.hash.split('=')
    headerCategoryTitle.innerText = `Resultados para: ${query}`

    getMoviesBySearch(query)
}

function movieDetailsPage() {
    console.log('Movie')

    headerSection.classList.add('header-container--long')
    headerTitle.classList.add('hidden')
    headerCategoryTitle.classList.add('hidden')
    // headerSection.style.background = ''
    backButton.classList.add('hidden')
    backButton.classList.add('md:inline-block')

    searchForm.classList.add('hidden')

    trendingPreviewSection.classList.add('hidden')
    categoriesPreviewSection.classList.add('hidden')
    genericListSection.classList.add('hidden')
    movieDetailSection.classList.remove('hidden')
}

function categoriesPage() {
    console.log('Categories')

    headerTitle.innerText = ''
    headerTitle.innerText = 'Categorías'
    headerSection.classList.remove('header-container--long')
    headerCategoryTitle.classList.remove('hidden')
    headerSection.style.background = ''
    backButton.classList.add('hidden')
    backButton.classList.add('md:inline-block')

    searchForm.classList.add('hidden')

    trendingPreviewSection.classList.add('hidden')
    categoriesPreviewSection.classList.add('hidden')
    genericListSection.classList.remove('hidden')
    movieDetailSection.classList.add('hidden')

    const [_, hash] = location.hash.split('=')
    const [id, name] = hash.split('-')

    if(!name.includes('%20')){
      headerCategoryTitle.innerText = name  
    }else{
        const [primeraParte, segundaParte] = name.split('%20')
        headerCategoryTitle.innerText = `${primeraParte} ${segundaParte}`
    }
    

    getMoviesByCategory(id)
}
