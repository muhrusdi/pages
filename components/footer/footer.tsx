const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="pt-32 pb-20 text-center">
          <span>
            {new Date().getFullYear()} Made with{" "}
            <span className="font-sans text-lg text-pink-500">♥</span> -
            Muhammad Rusdi
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
