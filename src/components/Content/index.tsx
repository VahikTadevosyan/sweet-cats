import React, {FC, useEffect} from "react";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import Loader from "../Loader";
import {useAction} from "../../hooks/useAction";
import StyledButton from "../StyledButton";

const Content: FC = () => {
    const {cats, error, loading, category, limit} = useTypeSelector(state => state.filter)
    const {fetchFilter, setLimit} = useAction()

    useEffect(() => {
        fetchFilter(limit, category)
    }, [category, limit])

    if (loading && limit <= 10) {
        return (
            <div className='content-container'>
                <Loader/>
            </div>
        )
    }
    if (error) {
        return <div className='content-container'>{error}</div>
    }

    return (
        <div>
            <div className='content-container'>
                {cats.map((item) => (
                    <div className='card' key={item.id}>
                        <img src={item.url} alt=''/>
                    </div>
                ))}
            </div>
            <div className='btn-more-container'>
                <StyledButton
                    themes={'light'} size={'medium'}
                    loading={loading}
                    onClick={() => setLimit(limit + 10)}
                >Show more</StyledButton>
            </div>
        </div>
    )
}

export default Content;