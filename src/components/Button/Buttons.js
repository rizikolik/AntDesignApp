import React from "react";
import {Button} from "antd";

class Buttons extends React.Component{
 
    
    
    render(){
        const { onClick, ...restProps } = this.props;
        return(
            <>
            <Button {...restProps} onClick={this.props.onClick} type="primary"size={"large"} >
                Ant Button 
            </Button>
            </>
        )
    }
}
export default Buttons;