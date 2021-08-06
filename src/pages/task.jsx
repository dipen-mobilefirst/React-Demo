import React, {Component} from 'react';
import Navigation from '../components/navigation.component';

class Task extends Component{
    constructor(props){
        super(props);
        this.state ={
            name: "",
            description: "",
            startTime: "",
            endTime: "",
            fields: {},
            errors: {}
        }
        this.handleValidation = this.handleValidation.bind(this);
    }

    handleValidation(e){

        e.preventDefault()
          let errors = {};
          let formIsValid = true;
    
          if(this.state.name===""){
             formIsValid = false;
             errors["name"] = "Cannot be empty";
          }
          
          if(this.state.description===""){
              formIsValid = false;
              errors["description"] = "Cannot be empty";
           }
           
           if(this.state.startTime===""){
            formIsValid = false;
            errors["startTime"] = "Cannot be empty";
         }

         if(this.state.endTime===""){
            formIsValid = false;
            errors["endTime"] = "Cannot be empty";
         }
    
         this.setState({errors: errors})
         if(formIsValid){
             this.props.history.push('/view-task');
         }
    
      }

    render(){
        return(
            <div>
                <Navigation />
                <h4 className="text-center">Welcome to Task</h4>
                <div className="container">
                    <h5 className="text-center pt-5">Add Task</h5>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6">
                            <div className="col-md-12"></div>
                                <form className="form" onSubmit={this.handleValidation} method="post">
                                <div className="form-group">
                                    <lable>TaskName</lable>
                                    <input type="text" name="name" placeholder="name" className="form-control" onChange={(e)=>{this.setState({name:e.target.value})}}/>
                                    { <span style={{color: "red"}}>{this.state.errors["name"]}</span> }
                                </div>

                                <div className="form-group">
                                    <lable>Description</lable>
                                    <input type="text" name="description" placeholder="description" className="form-control" onChange={(e)=>{this.setState({description:e.target.value})}}/>
                                    { <span style={{color: "red"}}>{this.state.errors["description"]}</span> }
                                </div>

                                <div className="form-group">
                                    <lable>Start time</lable>
                                    <input type="time" name="startTime" placeholder="Start time" className="form-control" onChange={(e)=>{this.setState({startTime:e.target.value})}}/>
                                    { <span style={{color: "red"}}>{this.state.errors["startTime"]}</span> }
                                </div>

                                <div className="form-group">
                                    <lable>End time</lable>
                                    <input type="time" name="endTime" placeholder="End Time" className="form-control" onChange={(e)=>{this.setState({endTime:e.target.value})}}/>
                                    { <span style={{color: "red"}}>{this.state.errors["endTime"]}</span> }
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Task;