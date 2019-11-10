import React,{Component} from 'react'
import RecentBooks from './recentBooksList.jsx'
class MainPage extends Component{
    
    render(){
        return (
            <div className="col">
                <RecentBooks bookList={this.props.bookList} onDelete={this.props.rmv}/>
            </div>
        )
    }
}
export default MainPage;