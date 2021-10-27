import { Input } from "../../atoms";
import './InputBox.css';

export const InputBox = () => {
    return (
        <>
        <Input type= 'text' name='name'/>
        <Input type='number' name='count'/>
        </>
    )
}