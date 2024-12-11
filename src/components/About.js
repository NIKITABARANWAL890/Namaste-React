import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);

        // console.log("Parent Constructor");
    }

        componentDidMount(){
            // console.log("Parent Compoennet Did Mount");
        }
    render(){
        // console.log("Parent Render")
        return(
            <div>
            <h1>About Class Component</h1>
            <h2>This is Namaste React web application</h2>
            {/* <User name={"Nikita"}/> */}
            <UserClass name={"First"} location={"Ghaziabad"}/>
        </div>
        )
    }
}

export default About;