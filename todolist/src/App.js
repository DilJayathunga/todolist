import './App.css';
import { Container, StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material';
import TodoList from './Components/TodoList';
import { Provider } from 'react-redux';
import { RootStore } from './Store/RootStore';

const Theme = createTheme({
  palette: {
      primary: {
          main: "#47C2BB",
          contrastText: "#fff"
      },
      secondary: {
          main: '#67D9C4',
          contrastText: "#000000"
      },
      text: {
          primary: "#000",
      }
  },
  typography: {
      fontFamily: 'Inter',
      button: {
          textTransform: "none"
      }
  }
});

function App() {
  return (
    <Provider store={RootStore}>
      <ThemeProvider theme={Theme}>
        <StyledEngineProvider injectFirst>
          <Container>
            <TodoList />
          </Container>
        </StyledEngineProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
