const SearchItem = ({ search, setSearch }) => {
    return (
        // prevent default right in the element
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input
                id="search"
                type="text"
                // searchbox role
                role="searchbox"
                placeholder="Search Items"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchItem