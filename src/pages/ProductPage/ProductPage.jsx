import { useParams } from "react-router-dom";


export default function ProductPage(){
    const params = useParams()
    const {pid} = params;
    return (
        <div>
            <h1>{pid}</h1>
            
        </div>
    )
}