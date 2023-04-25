# Getting started

## Implementing a button

### 1. Install the package

```bash
yarn add osmosys-ui expo-font expo-splash-screen @expo-google-fonts/montserrat @expo-google-fonts/nunito
```

### 2. Use the component

```tsx
// App.tsx
import React from 'react';
import { loadFonts } from 'osmosys-ui';

export default function App() {
    // Add these lines in your main file to properly import the fonts
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
```
