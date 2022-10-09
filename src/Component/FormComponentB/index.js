
import { React } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios"


const FormikForm = () => {
   
const formik=useFormik ({
    initialValues:{
        name:"",
        email:"",
        password:""

    },
    onSubmit: async(values)=>{
       
        try{
            console.log(values)
            await axios.post("https://jsonplaceholder.typicode.com/post/1",values
            )
           
        }catch(error){
            console.log("ignore it")
        }
        },
     validationSchema:()=>Yup.object({
        name:Yup.string().max(20,"must be 20 charactors or less").required("required"),
        email:Yup.string().email("invalid email address").required("required"),
        password:Yup.string().required("required"),


     })
});


return(
    <div>
    <h2>useFormik Form</h2>

<form onSubmit={formik.handleSubmit}>

<span>Name     : </span>
<input
    id="name"
    name="name"
    type="text"
    placeholder="Your Name"
    value={formik.values.name}
    onChange={formik.handleChange}
/>
{formik.touched.name && formik.errors.name ? 
(<span>{formik.errors.name}</span>):null
}<br></br>



<span>Email    : </span>
<input
    id="email"
    name="email"
    type="email"
    placeholder="Your Email"
    value={formik.values.email}
   onChange={formik.handleChange}
/>
{formik.touched.email && formik.errors.email ? 
(<span>{formik.errors.email}</span>):null
}<br></br>

<span>Password : </span>
<input
    id="password"
    name="password"
    type="password"
    placeholder="Your Password"
    value={formik.values.password}
    onChange={formik.handleChange}
/>
{formik.touched.password && formik.errors.password ? 
(<span>{formik.errors.password}</span>):null
}<br></br>




<input type="submit" value="Submit"/>


</form>
       
    </div>
)

}

export default FormikForm;