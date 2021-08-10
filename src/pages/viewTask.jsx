import React, {Component} from 'react';
import Navigation from '../components/navigation.component';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/jquery/dist/jquery.min.js';
import "../../node_modules/datatables.net-dt/js/dataTables.dataTables";
import "../../node_modules/datatables.net-dt/css/jquery.dataTables.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import $ from 'jquery';

class Viewtask extends Component{
    constructor(props){
        super(props);
        this.state={
            data: JSON.parse(localStorage.getItem("data")),
            newData: []
        }
        this.deleteData = this.deleteData.bind(this);
    }
    componentDidMount(){

        $(document).ready(function(){
            $('#example').DataTable();
        });
    }

    deleteData(index){
        var key = index;
        console.log("key",key)
        var newData = JSON.parse(localStorage.getItem("data"));
        newData.splice(index,1);
        localStorage.setItem("data",JSON.stringify(newData))  
    }

    render(){
        console.log(this.state.data)
        return(
            <div>
                <Navigation />
                <h4 className="text-center">Welcome to task-view</h4>
                <div>
            <table id="example" className="table table-striped table-bordered" style={{width:"100%"}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>startTime</th>
                    <th>EndTime</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.data === null ? <div>no data available</div> :
                    this.state.data.map((task,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{task.name}</td>
                                <td>{task.description}</td>
                                <td>{task.startTime}</td>
                                <td>{task.endTime}</td>
                                <td><button className="btn" onClick={this.deleteData.bind(this,index)}><i className="fa fa-trash"></i></button> </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            <tfoot>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>StartTime</th>
                    <th>EndTime</th>
                    <th>Delete</th>
                </tr>
            </tfoot>
        </table>
        </div>
            </div>
        )
    }
}

export default Viewtask;