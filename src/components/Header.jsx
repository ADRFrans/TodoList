//First component created to practice props 
// I creater a Header component that takes a title prop and displays it in an h1 tag
// and export it for use in other parts of the application 
// so this component can be reused with different titles as needed.

function Header({ title }) {
     
  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
    </>
  )
}

export default Header
