async function getTrendingMoviesPreview() {
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY)
    const data = await res.json()

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
            'h-[225px]',
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