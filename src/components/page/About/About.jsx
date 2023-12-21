import aboutImage from '../../../assets/image/Background/about.avif'; 

const About = () => {
  return (
    <div className="container mx-auto my-32 flex">
      <div className="w-1/2 pr-8">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-lg mb-4">
          Welcome to Brilen Task Management! We are a passionate team dedicated to providing
          high-quality services to our clients.
        </p>
        <p className="text-lg">
          At Brilen Task Management, we believe in core values or principles. Our team consists of
          experienced professionals who are committed to delivering excellence in every project.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique elit vel justo
          fermentum, id pulvinar tortor varius.
        </p>
      </div>

      <div className="w-1/2">
        <img src={aboutImage} alt="About" className="rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default About;

