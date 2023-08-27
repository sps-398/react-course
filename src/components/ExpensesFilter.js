
function ExpensesFilter(props) {

    function dropDownChangeHandler(e) {
        props.onChangeFilter(e.target.value);
    }

    return (
        <div>
            <label>Filter by year</label>
            <select value={props.selected} onChange={dropDownChangeHandler}>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
            </select>
        </div>
    )
}

export default ExpensesFilter;