import { useState, useEffect } from 'react';

import { loadFonts } from './src/utils/fonts';
import Main from './src/screens/Main';

export default function App() {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {
        (async () => {
            await loadFonts(setLoadingComplete);
        })();
    }, []);

    if (!isLoadingComplete) {
        return null;
    }

    return <Main />;
}
