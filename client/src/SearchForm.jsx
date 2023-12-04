const SearchForm = () => {

  const handleSubmit = (e)=>{
    e.preventDefault()
    const searchValue = e.target.elements.search.value;
    // console.log(e.target.elements)
    // console.log(e.target.elements.search)
    if(!searchValue)return
    console.log(searchValue)

  }
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="cat" name="search" className="form-input search-input"/>
        <button type="submit" className="btn">Search</button>
      </form>
    </section>
  )
}

export default SearchForm
