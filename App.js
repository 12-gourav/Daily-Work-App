import { Provider as PaperProvider,DefaultTheme } from 'react-native-paper';
import Main from "./Main.jsx";
import { Provider } from 'react-redux';
import store from './Redux/store.js';




export default function App() {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    version: 3,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      secondary: '#f1c40f',
      tertiary: '#a1b2c3'
    },
  };
  return (
   
    <Provider store={store}>
      
   <PaperProvider theme={theme}>
  <Main></Main>
 </PaperProvider>

    </Provider>
    

     
  );
}


