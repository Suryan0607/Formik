
import { React } from "react";
import {Formik,Field,Form,ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios"


const FormikForm2 = () => {
  
return(
    <div>
    <h2>Form 2</h2>
    <Formik
    initialValues={{
        name:"",
        email:"",
        password:""
     }}
     validationSchema={
     Yup.object({
        name:Yup.string().max(20,"must be 20 charactors or less").required("required"),
        email:Yup.string().email("invalid email address").required("required"),
        password:Yup.string().required("required"),
     })
     }
     onSubmit={
       async (values)=>{
       
       try{
           console.log(values)
           await axios.post("https://jsonplaceholder.typicode.com/post/1",values
           )
          
       }catch(error){
           console.log("ignore it")
       }
       }

     }
     
   > 
    <Form>
    <label htmlFor="name">Name : </label>
    <Field name="name" type="text" placeholder="Your Name" />
    <ErrorMessage name="name"/><br></br>

    <label htmlFor="email">Email : </label>
    <Field name="email" type="email" placeholder="Your Email" />
    <ErrorMessage name="email"/><br></br>

    <label htmlFor="password">Password :</label>
    <Field name="password" type="password" placeholder="Your Password" />
    <ErrorMessage name="password"/><br></br>
    
<button type="submit">Submit</button>



    </Form>
    </Formik>

</div>
)

}

export default FormikForm2;