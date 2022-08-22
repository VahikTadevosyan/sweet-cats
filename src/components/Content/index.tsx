import React, {FC, useEffect} from "react";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {fetchCats} from "../../store/action-creators/cat";

const Content: FC = () => {
    const {cats, error, loading} = useTypeSelector(state => state.cat)
        //TODO type
    const dispatch: any = useDispatch()

    useEffect(()=>{
        dispatch(fetchCats())
    },[])


    if (loading) {
        return <div className='container'>Loading...</div>
    }
    if (error) {
        return <div className='container'>{error}</div>
    }

    return (
        <div className='content-container'>
            {cats.map((item) => (
                <div className='card'>
                    <img src={item.url} alt=""/>
                </div>
            ) )}
        </div>
    )
}

export default Content;