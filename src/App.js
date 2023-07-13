import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import {Navbar,Feed,VideoDeatail,ChannelDetail,SearchFeed} from './components';
 const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{background:'#212A3E'}}>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Feed/>}/>
          <Route path='/video/:id' exact element={<VideoDeatail/>}/>
          <Route path='/channel/:id' exact element={<ChannelDetail/>}/>
          <Route path='/search/:searchTerm' exact element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App