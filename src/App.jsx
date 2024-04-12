import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './home';

function App() {
    return (
            <Router>
                <Routes>
                    <Route path="/hello" element={<Home/>}/>
                    
                </Routes>
            </Router>
    );
}

export default App;
