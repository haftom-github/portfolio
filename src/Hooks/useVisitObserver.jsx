import { useState, useEffect, useRef } from 'react';

const useVisitObserver = (options) => {
    const [isVisited, setIsVisited] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry], observer) => {
            if (entry.isIntersecting){
                setIsVisited(true)
                observer.disconnect()
            }
        }, options);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [options]);

    return [elementRef, isVisited];
};

export default useVisitObserver;