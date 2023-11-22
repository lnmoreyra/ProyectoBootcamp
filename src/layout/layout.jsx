import Footer from "../components/Footer";
import Header from "../components/Header";



function Layout({children, title}) {
    return (
        <>
        
        <div className="layoutContainer">
        <Header/>
        {children}
        <h1>{title}</h1>
        <Footer/>
        </div>
        
        </>
    )
}

export default Layout