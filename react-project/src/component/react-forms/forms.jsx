function FormsHandler() {
 const submitForm = (e) => {
    e.preventDefault();
    console.log("Form Submittes");
}
  return (
    <div className="forms-wrapper">
      <h1>Forms Component</h1>
      {/* Add your form elements here */}
      <form onSubmit={(e) => {
        submitForm(e);
      }}>
        {/* <input type="text" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" /> */}
      <input type="text" placeholder="Enter your name" />
      <button>Submit</button>
      </form>
    </div>
  );
}
export default FormsHandler;