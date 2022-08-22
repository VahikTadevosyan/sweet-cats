import React, {FC, useEffect} from "react";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {fetchFilters} from "../../store/action-creators/filter";
import {useAction} from "../../hooks/useAction";
const Filter:FC = ()=>{
    const {filters, error, loading} = useTypeSelector(state => state.filter)
    const {fetchFilters} = useAction()

    useEffect(() => {
        fetchFilters()
    }, [])

    return (
        <div className='filter-container'>
            {filters.map((item) => (
                <button key={item.id}>{item.name}</button>
            ))}
        </div>
    )
}

export default Filter;