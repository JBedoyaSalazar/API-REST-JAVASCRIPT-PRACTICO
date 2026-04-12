const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers:{
        'Content-Type': 'application/json;charset=utf-8'
    },
    params: {
        'api_key': API_KEY
    }
})

async function getTrendingMoviesPreview() {
    const { data } = await api('/trending/movie/day')

    const movies = data.results

    movies.forEach(movie => {
        const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview #trendingPreview-movieList')
        const movieContainer = document.createElement('div')
        movieContainer.classList.add(
            'snap-start',
            'flex-shrink-0',
            'w-[150px]',
            'md:w-[calc(33.33%-1rem)]',
            'lg:w-[calc(14.28%-1rem)]',
            'cursor-pointer'
        )

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
        trendingPreviewMoviesContainer.appendChild(movieContainer)
    });

}

getTrendingMoviesPreview()

async function getCategoriesPreview() {
    const {data} = await api('/genre/movie/list')

    const categories = data.genres

    categories.forEach(category => {
        const previewCategoriesContainer = document.querySelector('#categoriesPreview #categoriesPreview-list')
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
        const categoryTitleText = document.createTextNode(category.name)

        categoryTitle.appendChild(categoryTitleText)
        categoryContainer.appendChild(categoryTitle)
        previewCategoriesContainer.appendChild(categoryContainer)
    });
}

getCategoriesPreview()