
import { Container, CssBaseline, ThemeProvider, createTheme} from "@mui/material";
import Header from "./Header";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from "react-router-dom";
import { useStoreContext } from "../context/StoreContext";
import { getCookie } from "../util/util";
import agent from "../API/agent";
import LoadingComponent from "./LoadingComponents";

function App() {
  const {setBasket} = useStoreContext();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const buyerId = getCookie('buyerId');
    
    if(buyerId) {
      agent.Basket.get()
        .then(basket => setBasket(basket))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }else {
      setLoading(false);
    }
  }, [setBasket])

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  

  if(loading) return <LoadingComponent message="Initializing..." />
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar />
      <CssBaseline />
      <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
      <Container sx={{marginTop: 4}}>
        <Outlet/>
      </Container>
    </ThemeProvider>
  )
}

export default App
