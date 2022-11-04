import {useEffect, useState} from "react";


const LangOption = () => {
    const [activeOption, setActiveOption] = useState('');

    useEffect(() => {
        if (activeOption) {
            console.log("active option");
        }
    });


    return (
        <>
            <label htmlFor="select" className="filter-label" onChange={console.log("Woooow")}>Language/Technology</label>
            <select name="Filter by" className="filter-item">
                <option value="value1" className="option-item" >-?-</option>
                <option value="value1" className="option-item" >C++</option>
                <option value="value2" className="option-item" >Python</option>
                <option value="value2" className="option-item" >Ruby</option>
                <option value="value2" className="option-item" >Java</option>
            </select>
        </>
    )
}

export default LangOption;