const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers:{
        'Content-Type': 'application/json;charset=utf-8'
    },
    params: {
        'api_key': API_KEY
    }
})

//Utils
function getImagesByForEach(container, data){
    container.innerHTML = ''

    data.forEach(movie => {
        if (!movie.poster_path) {
            return;
        }

        const movieContainer = document.createElement('div')
        movieContainer.classList.add('cursor-pointer')

        if (container.classList.contains('flex')) {
            movieContainer.classList.add(
                'snap-start',
                'flex-shrink-0',
                'w-[150px]',
                'md:w-[calc(33.33%-1rem)]',
                'lg:w-[calc(14.28%-1rem)]'
            )
        }

        const movieImg = document.createElement('img')
        movieImg.classList.add(
            'aspect-[2/3]',
            'h-auto',
            'w-full',
            'object-cover',
            'rounded-lg',
            'hover:scale-110',
            'transition',
            'duration-300',
            'ease-in-out',
            'cursor-pointer'
        )

        movieImg.setAttribute('alt', movie.title)
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path)

        movieContainer.appendChild(movieImg)
        container.appendChild(movieContainer)
    });
}

function createCategories(container,data){
    container.innerHTML = ''

    data.forEach(category => {
        const categoryContainer = document.createElement('div')
        const categoryTitle = document.createElement('h3')
        categoryTitle.classList.add(
            'category-title',
            'mb-2',
            'cursor-pointer',
            'flex',
            'items-center',
            'whitespace-nowrap',
            'overflow-hidden',
            'text-ellipsis'
        )
        categoryTitle.setAttribute('id', category.id)
        categoryTitle.addEventListener('click', () => {
            location.hash = `#category=${category.id}-${category.name}`
        })
        const categoryTitleText = document.createTextNode(category.name)

        categoryTitle.appendChild(categoryTitleText)
        categoryContainer.appendChild(categoryTitle)
        container.appendChild(categoryContainer)
    });
}

//API CALLS
async function getTrendingMoviesPreview() {
    const { data } = await api('/trending/movie/day')

    const movies = data.results

    getImagesByForEach(trendingPreviewMoviesContainer, movies)
}

async function getCategoriesPreview() {
    const {data} = await api('/genre/movie/list')

    const categories = data.genres

    createCategories(categoriesPreviewList, categories)
}

async function getMoviesByCategory(id){

    const { data } = await api('discover/movie',{
        params: {
            with_genres: id
        }
    })

    const movies = data.results

    getImagesByForEach(genericListSection, movies)
}

async function getMoviesBySearch(query){
    const { data } = await api('/search/movie',{
        params: {
            query,
        }
    })

    const movies = data.results

    getImagesByForEach(genericListSection, movies)
}

async function getTrendingMovies() {
    const { data } = await api('/trending/movie/day')

    const movies = data.results

    getImagesByForEach(genericListContainer, movies)
}
