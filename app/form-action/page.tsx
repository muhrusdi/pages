const FormAction = () => {
  const handleSubmit = async (form: any) => {
    "use server"

    console.log(form)
  }
  return (
    <div>
      <form action={handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormAction
