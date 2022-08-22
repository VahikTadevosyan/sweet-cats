import React, {FC, useEffect} from "react";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {fetchCats} from "../../store/action-creators/cat";
import Loader from "../Loader";
import {useAction} from "../hooks/useAction";

const Content: FC = () => {
    const {cats, error, loading} = useTypeSelector(state => state.cat)
    const {fetchCats} = useAction()

    useEffect(() => {
        fetchCats(15)
    }, [])

    console.log(cats, "test")


    if (loading) {
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
                <button className='btn-more'>Show more</button>
            </div>
        </div>
    )
}

export default Content;