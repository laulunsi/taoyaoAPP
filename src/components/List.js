import React from 'react';
import './list.scss';
import axios from 'axios';
import { Item } from 'antd-mobile/lib/tab-bar';
class List extends React.Component{
    constructor(){
        super();
        this.golist = this.golist.bind(this)
    }
    state={
        name:[],
        current:0,
        list:[]
    }
    componentWillMount(){
        axios.post('http://api.scjuchuang.com/index/goods_type').then(res=>{
            this.setState({
                name:res.data.data,
                list:res.data.data[0].next
            })
            console.log(this.state.name,this.state.list)
        })
    }
    golist(idx){
        console.log('idx',idx)
    }
    render(){
        return (<div>
            <div>
                <header>
                    <h1>全部分类</h1>
                </header>
                <div >
                    <ul className="sortLef">
                        {
                            this.state.name.map((item,idx)=>{
                                return(
                                    <li onClick={()=>{this.golist(idx)}}>
                                        <img src={item.image}/>
                                        <span>{item.name}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    {/* {
                        this.state.
                    } */}
                </div>
                    
            </div>
        </div>)

    }
}
export default List;