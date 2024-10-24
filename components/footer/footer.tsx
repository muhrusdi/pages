const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="text-center pt-8 pb-24">
          <span>
            {new Date().getFullYear()} Made with{" "}
            <span className="text-pink-500 font-sans text-lg">♥</span> -
            Muhammad Rusdi
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
