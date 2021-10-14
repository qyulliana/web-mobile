// Dependencies
import { useState, useEffect } from 'react';

export default function useCheckMobile() {
    // Constants
    const [width, setWidth] = useState(window.innerWidth);

    // Hook Effect
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        // Listeners
        window.addEventListener('load', handleResize);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('load', handleResize);
            window.removeEventListener('resize', handleResize);
        };
    });

    return (width < 660);
}