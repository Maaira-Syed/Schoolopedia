const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <div >
            <input className='form-control'
            style={{margin: "0px 50px 20px 50px"}}
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
        </div>
        <div >
        <button className='btn btn-custom btn-lg' type="submit">Search</button>
        </div>
    </form>
);

export default SearchBar;