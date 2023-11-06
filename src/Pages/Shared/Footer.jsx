


const Footer = () => {
    return (
        <div className='bg-violet-50'>
            <footer className="footer p-16  text-base-content container mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                <nav>
                <aside>
                    <h1 className='text-3xl text-cyan-500 pb-2'>Study <br />     <span className='text-blue-700'>Groups</span></h1>
                    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
                </aside> 
                </nav>
                <nav>
                    <header className="footer-title">Services</header> 
                    <a className="link link-hover">Branding</a> 
                    <a className="link link-hover">Design</a> 
                    <a className="link link-hover">Marketing</a> 
                    <a className="link link-hover">Advertisement</a>
                </nav> 
                <nav>
                    <header className="footer-title">Company</header> 
                    <a className="link link-hover">About us</a> 
                    <a className="link link-hover">Contact</a> 
                    <a className="link link-hover">Jobs</a> 
                    <a className="link link-hover">Press kit</a>
                </nav> 
                <nav>
                    <header className="footer-title">Legal</header> 
                    <a className="link link-hover">Terms of use</a> 
                    <a className="link link-hover">Privacy policy</a> 
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;