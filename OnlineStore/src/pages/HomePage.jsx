import Hero from '../components/Hero'
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <Hero 
      title="OnlineStore"
      subtitle="The best produce in the market!"
      call="Shop Now"
      />
      {/*Design layput for homepage*/}
        <section className='welcome'>
            <h2>Why shop with us?</h2>
            <p>
                We offer the freshest produce in America!
            </p>
        </section>
    </div>
  );
}

export default HomePage;