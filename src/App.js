import React from "react";
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from './theme';
import Login from "./pages/login/Login"


const App = () => {
  const theme = createTheme();
  
  return (
		<>
		{/* <Toaster position='bottom-right' toastOptions={{duration: 5000}} /> */}
    <ThemeProvider theme={theme}>
    <CssBaseline />
		<Router>
		<Routes>
		  <Route>
			{/* <Route path='/' element={<Login />} />
			<Route path='/login' element={<Login />} />*/}
			<Route path='/home' element={<Home />} /> 
      <Route path='/login' element={<Login />} /> 
			
			
		  </Route>
		</Routes>
		</Router>
    </ThemeProvider>
		</>
	  )
  
  
}
export default App;