
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'

const Home = () => {
  return (
    <>
    <Navbar />
        <div className="card">
        <img src="https://via.placeholder.com/300x200" alt="Product Image" />
        <div className="card-content">
            <h2>Product Name</h2>
            <p>This is a brief description of the product. It highlights the main features and benefits in a concise manner.</p>
        </div>
    </div>
    </>
  )
}

export default Home