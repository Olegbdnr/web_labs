

const FilterBar = () => {
    return (
        <section className="filter-section" defaultValue={"Some"}>
            <label htmlFor="select" className="filter-label">Sort by</label>
            <select name="Filter by" className="filter-item">
                <option value="value1" className="option-item" >Price</option>
                <option value="value2" className="option-item">Rating</option>
                <option value="value3" className="option-item">Feedback</option>
            </select>
        </section>
    )
}

export default FilterBar;