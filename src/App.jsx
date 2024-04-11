import './App.css'

function App() {

  function search(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }

  return (
    <>
      <form action={search}>
          <input name="query"/>
          <button type="submit">Search</button>
      </form>
    </>
  )
}

export default App
