import React, { useState } from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'

function Home() {
    const [activeTab, setActiveTab] = useState(0);
    const handleActiveTab = (tab) => {
        console.log("tab", tab);
        setActiveTab(tab);
    }
    return (
        <div>
            <div className="container">
                <div className="left">
                    <Header activeTab={activeTab} handleActiveTab={handleActiveTab} />
                </div>
                <div className="right">
                    <Main />
                </div>
            </div>
        </div>
    )
}

export default Home
