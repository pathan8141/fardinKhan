import { Card, CardContent, Grid,Button } from "@mui/material";
import { textAlign } from "@mui/system";
import React from "react";
import { Data } from "./Newdata";
export const Body=()=>{
    return(

        <div>
            <Grid container>
              {Data.map((elem)=>{
                  return(
                      <Grid item xs={3}>
                          <Card style={{textAlign:"center"}}>
                              <CardContent>
                                  <img src={elem.Imag}  width="130px" height="150px"/>
                                  <h1>{elem.title}</h1>
                                  <h4>{elem.model}</h4>
                                  <Button variant="contained">{elem.price}</Button>                
                              </CardContent>
                          </Card>
                          </Grid>
                  )
              })}
            </Grid>
        </div>
    )
        


}