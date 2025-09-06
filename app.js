    // Define Variables
    let currentSearch = '';
    let recentSearches = [];

    // Form & input
    const searchForm = document.querySelector('.search-bar');
    const searchInput = document.getElementById('searchInput');

    /*
        <form class="search-bar" type="submit">
				<input
					type="search"
					id="searchInput"
					placeholder="Search Location..." />
			</form>
    */

    // Submit
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        // Get the search term, trimmed against whitespaces
        const searchTerm = searchInput.value.trim();

        if (searchTerm) {
        // Keep search
        currentSearch = searchTerm;

        // Add to recent searches
        recentSearches.unshift(currentSearch); 
        // If array has more than 3 elements
        if (recentSearches.length > 3) {
            // Cut it off at 3
            recentSearches.pop(); 
        }

        // Alert to prove variable storage
        switch (recentSearches.length) {
            case 0:
                alert("You have no recent searches.");
                console.log("Search Alert Committed");
                break;
            case 1:
                alert("Your latest search is: \"" + recentSearches[0] + "\".");
                console.log("Search Alert Committed");
                break;
            case 2:
                alert("Your latest searches are: \"" + recentSearches[0] + "\" , and \"" + recentSearches[1] + "\".");
                console.log("Search Alert Committed");
                break;
            case 3:
                alert("Your latest searches are: \"" + recentSearches[0] + "\" , and \"" + recentSearches[1] + "\" , and \"" + recentSearches[2] + "\".");
                console.log("Search Alert Committed");
                break;
        }

        // Debug log
        console.log('Current Search:', currentSearch);
        console.log('Recent Searches:', recentSearches);

        // Ready for API
        // fetchData(currentSearch);
        }

        // Clear input
        searchInput.value = '';
    });