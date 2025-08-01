//this monstrosity has been fully vibe-coded in github co-pilot by Lindsay
const colors = [
    'blue', 'indigo', 'purple', 'pink', 'rose',
    'orange', 'amber', 'lime', 'green', 'teal',
    'blue', 'indigo', 'purple', 'pink', 'rose',
    'orange', 'amber', 'lime', 'green', 'teal'
];
function generateTiles(urls, titles, descriptions)
{
    const container = document.querySelector('.grid');

    if (urls.length == 0)
    {
        
        const header = document.querySelector('header');
        header.innerHTML = header.innerHTML + '<p class="text-gray-500 " style="margin-top:1em">Tutorial base code for this week has not been set up yet. Please check for Github Classroom sync.</p>';
        return;
    }

    for (let i = 0; i < urls.length; i++) {
        const color = colors[i];
        const tileHTML = `
            <!-- Tile ${i} -->
            <a href="${urls[i]}" class="group block rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-${color}-500 focus:ring-opacity-50">
                <div class="relative w-full h-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden p-6 flex flex-col justify-between">
                    <div>
                        <h2 class="text-xl font-bold text-gray-900">
                            ${titles[i]}
                        </h2>
                        <p class="mt-2 text-sm text-gray-500">
                            ${descriptions[i]}
                        </p>
                    </div>
                    <div class="mt-4 flex items-center justify-end">
                        <span class="text-sm font-medium text-${color}-600 group-hover:text-${color}-500">View Project &rarr;</span>
                    </div>
                    <!-- Decorative accent border -->
                    <div class="absolute bottom-0 left-0 h-1 w-full bg-${color}-500 transition-all duration-300 ease-in-out group-hover:h-2"></div>
                </div>
            </a>
        `;
        container.innerHTML += tileHTML;
    }
}