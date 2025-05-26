import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Category from './components/Category'
import CategoryProducts from './components/CategoryProducts'
import PageNotFound from './components/pageNotFound'
import About from './components/About'
import FeedBAck from './components/FeedBAck'
import Contact from './components/Contact'
import ProductReciep from './components/ProductReciep'
import SearchDataCard from './components/SearchDataCard'




function App() {
  

  return (
    
    
      
      <Router>
          <Navbar/> 
        <Routes>
           <Route exact path='/' element={<Category/>}/>
           <Route exact path="/category/:category" element={<CategoryProducts/>}/>
           <Route exact path="/about" element={<About/>}/>
           <Route exact path='/feedback' element={<FeedBAck/>}/>
           <Route exact path='/contact' element={<Contact/>}/>
           <Route exact path='/:category/meal/:mealid' element={<ProductReciep/>}/>
           <Route exact path='/search/:searchq' element={<SearchDataCard/>}/>
           
           <Route exact path='*' element={<PageNotFound/>}/>
        </Routes>
      </Router>
      
      
     
   
  )
}

export default App
