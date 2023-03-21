import { StatusBar, StyleSheet } from 'react-native';

export default StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
        marginTop: StatusBar.currentHeight
    }
});
