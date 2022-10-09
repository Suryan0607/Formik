import logo from './logo.svg';
import './App.css';
import Myform from './Component/FormComponent';
import FormikForm2 from './Component/FormComponentC';
import FormikForm from './Component/FormComponentB';

function App() {
  
  return (
    <div className="App">

      <h3>Formik Session</h3>

      <Myform />
      <FormikForm/>
     <FormikForm2 />
    </div>
   
  );
}

export default App;
