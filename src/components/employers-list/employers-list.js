import { Component } from "react"
import EmployersListItem from "../employers-list-item/employers-list-item"
import './employers-list.css'


class EmployersList extends Component {
    constructor(props){
        super(props) 
        this.state = {
            valueSalary: ''
    }
    }

    render() {
        const {data, onDelete, onToggleProp, onValueChange, onUpdateValueSalary} = this.props
        const elements = data.map(item => {
        const {id, ...itemProps} = item;
               
            return (
                    <EmployersListItem 
                    key={id} 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                    onValueChange={() => onValueChange(id)}
                    onUpdateValueSalary={() => onUpdateValueSalary}/>
                    )
            })
            
            return(
                <ul className="app-list list-group">
        
                   {elements}
                </ul>
            )
    }
}

export default EmployersList;