import React,{Component} from 'react';
import Navbar from './Components/navbar.jsx';
import MainPage from './Components/mainPage.jsx';
import AddPhoto from './Components/addPhoto.jsx';
import {BrowserRouter,Route} from 'react-router-dom';
class App extends Component{
  constructor()
    {
        super();
    this.state={
        bookList:[
          {name:"B1",author:"A1",version:"1.1"},
          {name:"B2",author:"A2",version:"1.2"},
          {name:"B3",author:"A3",version:"1.3"},
          {name:"B4",author:"A4",version:"1.4"}
        ]
        }
        this.remove=this.remove.bind(this);
        this.handleAdd=this.handleAdd.bind(this);
    }
    remove(p)
    {
        this.setState(
            {
               booklist:delete this.state.bookList[p],
            }
        )
    }
    handleAdd(n,a,v)
    {            
      let arr=this.state.bookList;
      arr.push({name:n,author:a,version:v});
        this.setState(
          {
            bookList:arr
          }
        )
    }
  render()
  {
    return <React.Fragment>
     
      <BrowserRouter>
      <Navbar /> 
      <Route exact path='/books'>
      <MainPage bookList={this.state.bookList} rmv={this.remove} />
      </Route>
      <Route exact path='/addbook'>
        <AddPhoto handleSubmit={this.handleAdd}/>
        </Route>
      <Route exact path='/'>
          <h1 className='container-fluid'>Welcome to the library</h1>
        </Route>
      </BrowserRouter>
     </React.Fragment>
  }
}
export default App;