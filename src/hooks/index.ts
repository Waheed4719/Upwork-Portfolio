import { useState, useLayoutEffect } from 'react';

export const useWindowScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(window.scrollY);

    useLayoutEffect(() => {
        function updateScrollPosition() {
            setScrollPosition(window.scrollY);
        }

        window.addEventListener('scroll', updateScrollPosition);
        return () => window.removeEventListener('scroll', updateScrollPosition);
    }, []);

    return scrollPosition;
};
