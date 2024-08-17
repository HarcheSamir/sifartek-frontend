import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useLayoutStore from '../stores/layoutStore';
const ScrollToTop = () => {
    const { pathname } = useLocation();
    const{switchSideBarOff} = useLayoutStore()
    useEffect(() => {
        window.scrollTo(0, 0);
        switchSideBarOff()
    }, [pathname]);

    return null;
};

export default ScrollToTop;
