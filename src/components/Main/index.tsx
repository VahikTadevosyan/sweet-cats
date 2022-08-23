import React, {FC} from "react";
import Content from "../Content";
import Categories from "../Categories";


const Main: FC = () => {


    return (
        <div className='container'>
            <Categories/>
            <Content/>
        </div>
    )
}

export default Main;