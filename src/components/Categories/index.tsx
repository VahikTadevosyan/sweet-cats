import React, {FC, useEffect} from "react";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useAction} from "../../hooks/useAction";
import Loader from "../Loader";
import StyledButton from "../StyledButton";

const Categories: FC = () => {
    const {category, error, loading} = useTypeSelector(state => state.category)
    const filter = useTypeSelector(state => state.filter)
    const {fetchCategories, setCategory} = useAction()
    const checked = filter.category

    useEffect(() => {
        fetchCategories()
    }, [])

    const handleClick = (item: any) => {
        setCategory(item.id)
    }

    if (loading) {
        return (
            <div className='filter-container'>
                <Loader/>
            </div>
        )
    }
    if (error) {
        return <div className='filter-container'>{error}</div>
    }

    return (
        <div className='filter-container'>
            <div className='filter-btn-container'>
                {category.map((item) => (
                    <StyledButton
                        key={item.id}
                        style={{height: 50, marginBottom: 5}}
                        themes={"light"}
                        active={checked === item.id}
                        disable={filter.loading}
                        onClick={() => handleClick(item)}
                    >{item.name}</StyledButton>
                ))}
            </div>
        </div>
    )
}

export default Categories;