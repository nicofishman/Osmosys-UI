// import { StyleSheet } from 'react-native';

import { useState, useEffect } from 'react';

import { StorybookComp } from './storybook';
import { loadFonts } from './src/fonts';

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

    return <StorybookComp />;
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });
