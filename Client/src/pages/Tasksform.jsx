import { Formik, Form } from "formik";
function Tasksform() {
  return (
    <div>
        <h1>Register task</h1>
        <Formik
        initialValues={{
            title:"",
            description:"",
        }}
        onSubmit={(values)=>{
            console.log(values);
        }}
        >
            {({handleChange,handleSubmit})=>(
                <Form onSubmit={handleSubmit}>
                    <label>title</label>
                    <input type="text"
                     name="title" 
                     placeholder="Write a tittle"
                     onChange={handleChange} />
                     <label> Description</label>
                     <textarea name="description"
                      rows="3"
                      placeholder="Write a description"
                      onChange={handleChange}></textarea>
                      <button type="submit">Save</button>
                </Form>
            )}

        </Formik>
    </div>
  )
}

export default Tasksform