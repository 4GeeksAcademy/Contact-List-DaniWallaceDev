import React,{ Component , useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Form = () => {
  const {store,actions} = useContext(Context)
  useEffect(()=>{
actions.createUser()
	},[])
// Array de dependencias
return(
<div>
<form>
  <div className="mb-3">
    <label HtmlHtmlfor="exampleInputEmail1" className="Htmlform-label">Email address</label>
    <input type="email" className="Htmlform-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label HtmlHtmlfor="exampleInputEmail1" className="Htmlform-label">Email address</label>
    <input type="email" className="Htmlform-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label HtmlHtmlfor="exampleInputEmail1" className="Htmlform-label">Email address</label>
    <input type="email" className="Htmlform-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label HtmlHtmlfor="exampleInputEmail1" className="Htmlform-label">Email address</label>
    <input type="email" className="Htmlform-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
)
}
