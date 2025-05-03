import '../HomePange/HomePage.css'
import Nav from '../Nav/nav'

export default function HomePage() {
  return (
    <div className='Home'>
      <Nav/>
      <div className="description-section">
        <h1>Welcome to My Portfolio</h1>
        <p>Please provide the description content you'd like to display here</p>
      </div>
    </div>
  );
}