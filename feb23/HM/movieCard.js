function getMovieCardHTML(m) {
  const randImg = Math.floor(Math.random() * m.Images.length);
  return `
    <div id="movie-${m.imdbID}" class="relative flex justify-between w-100 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md min-h-[700px]">
        <div>
            <div
                style="box-shadow: hsla(279 100% 31% / 0.6) 5px 10px 10px;" class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"
            >
                <img src="${m.Images[randImg]}" alt="movie poster" class="object-cover w-full h-full" />
            </div>
            <div class="p-6 flex flex-col justify-between">
                <h5
                    class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
                >
                    ${m.Title} (${m.Year}) 🎬
                </h5>
                <div class="more-info">
                    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        ${m.Plot} 📖
                    </p>
                    <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                        <b>Age Restriction:</b> ${m.Rated} 🔞
                    </p>
                    <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                        <b>Released:</b> ${m.Released} 🗓️
                    </p>
                    <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                        <b>Runtime:</b> ${m.Runtime} ⏳
                    </p>
                    <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                        <b>Genre:</b> ${m.Genre} 🎭
                    </p>
                    <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                        <b>Director:</b> ${m.Director} 🎥
                    </p>
                    <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                        <b>Writer:</b> ${m.Writer} ✍️
                    </p>
                    <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                        <b>imdbRating:</b> ${m.imdbRating} ⭐
                    </p>
                    <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                        <b>imdbVotes:</b> ${m.imdbVotes} 👍
                    </p>
                    <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                        <b>imdbID:</b> ${m.imdbID} 🆔
                    </p>
                    <p class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                        <b>Type:</b> ${m.Type} 🗂️
                    </p>
                </div>
            </div>
        </div>
        <div class="p-6 pt-0">
            <button id="fav-${m.imdbID}" title="Save" class="cursor-pointer flex items-center fill-yellow-300 bg-purple-950 hover:bg-purple-900 active:border active:border-pink-400 rounded-md duration-100 p-2">
                <svg viewBox="0 -0.5 25 25" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
                <span class="text-sm text-yellow-300 font-bold pr-1">Save</span>
            </button>
        </div>
    </div>
`;
}
