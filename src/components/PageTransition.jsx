import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles//pageTransition.css';

const PageTransition = ({ children }) => {
    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState('fadeIn');
    const location = useLocation();

    useEffect(() => {
        setTransitionStage('fadeOut');
    }, [location]);

    useEffect(() => {
        if (transitionStage === 'fadeOut') {
            const timeout = setTimeout(() => {
                setDisplayChildren(children);
                setTransitionStage('fadeIn');
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [transitionStage, children]);

    return (
        <div className={`page-transition ${transitionStage}`}>
            {displayChildren}
        </div>
    );
};

export default PageTransition;
