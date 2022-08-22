import React, {FC} from "react";
import Content from "../Content";
import Filter from "../Filter";


const Main: FC = () => {


    return (
        <div className='container'>
            <Filter/>
            <Content/>
        </div>
    )
}

export default Main;