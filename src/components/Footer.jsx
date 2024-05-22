const Footer = () => {
    const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-4 bg-base-300 text-neutral footer-center">
        <div className="text-lg">
            Build with DaisyUI | {footerYear}
        </div>
    </footer>
  )
}
export default Footer