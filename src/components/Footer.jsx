import { Button, Card,CardContent } from "@mui/material";
import React,{useState} from "react";
export const Footer=()=>{
    const[count,setCount]=useState(0)
    return(
        <div>
            <Card style={{width:"500px",textAlign:"center"}}>
                <CardContent>
                    <h1>Counter</h1>
                    <Button variant="outlined" onClick={(e)=>count<10 &&setCount(count+1)}>Increment</Button>
                    <h3>Count : {count}</h3>
                    <Button variant="outlined" color="error" onClick={(e)=>count>0&&setCount(count-1)}>Decrement</Button>
                </CardContent>
            </Card>
        </div>
    )
}