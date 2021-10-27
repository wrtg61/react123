import { SelectU } from "../../atoms";
import './Select.css';

type selectType={
    name: string;
    value: string;
    option: string;
}

export const Select:React.FC<selectType> =({name,value,option})=> {
    return (
        <>
        <select name={name}>
            <option value ={value}>{option}
            </option>
        </select>
        </>
    );
}