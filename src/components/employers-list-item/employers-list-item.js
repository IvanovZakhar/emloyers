import { Component } from 'react';
import './employees-list-item.css';

class EmployersListItem extends Component {
    constructor(props){
        super(props)
            this.state ={
                valueSalary: ''
        }
    }

    onValueChange = (e) => {
        let valueSalary = e.target.value
        this.setState({valueSalary});
        this.props.onUpdateValueSalary(valueSalary)
    }

    render() {
        const {name, salary, onDelete, onToggleProp, increase, like, onValueChange} = this.props;

        let classNames = 'list-group-item d-flex justify-content-between';
            if (increase){
            classNames += ' increase'
            } 
            if(like){
                classNames += ' like'
            }

    return (
            <li className={classNames}>
                <span className="list-group-item-label"  onClick={onToggleProp} data-toggle="like">{name}</span>
                <input type="text" className="list-group-item-input" 
                    onChange={this.onValueChange} 
                    onClick={onValueChange} 
                    name="salary" 
                    defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp} data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"
                        onClick={onDelete}></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
            )
    }
    
} 

    

export default EmployersListItem;