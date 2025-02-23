function getMovieCardHTML(m) {
  const randImg = Math.floor(Math.random() * m.Images.length);
  return `
    <div
        class="relative flex justify-between w-100 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md min-h-[700px]"
    >
        <div>
            <div
                class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"
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
            <button
                data-ripple-light="true"
                type="button"
                class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
                Read More
            </button>
        </div>
    </div>
`;
}
