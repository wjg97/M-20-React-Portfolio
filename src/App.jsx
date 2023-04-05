import React, { useState } from 'react';
import Nav from './components/nav';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';

const App = () => {
    const [categories] = useState([
        {
            name: 'About Me'
        },
        {
            name: 'Portfolio'
        },
        {
            name: 'Contact Me'
        },
        {
            name: 'Resume'
        }
    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    const renderPage = () => {
        if (currentCategory === categories[0]) {
            return <About/>
        }
        if (currentCategory === categories[1]) {
            return <Portfolio currentCategory={currentCategory}/>
        }
        if (currentCategory === categories[2]) {
            return <Contact/>
        }
        return <Resume/>
    }

    return (
        <div>
            <Nav categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}></Nav>
            <main>
                <>
                {renderPage()}
                </>
            </main>
            <Footer/>
        </div>
    )
}

export default App;