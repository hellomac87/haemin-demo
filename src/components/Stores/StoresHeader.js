import React from 'react';
import './StoresHeader.scss';

const StoresHeader = (props) => {
    const { lists } = props;
    
    return (
        <div className="stores-header">
            <div className="stores-header-info">
                <button>prev</button>
                <div>한식</div>
                <div>
                    <button>location</button>
                    <button>sort</button>
                </div>
            </div>

            <ul className="stores-header-tab">
                {
                    lists.map((list,index)=> {
                        return <li key={index}>{list}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default StoresHeader;