
import contactImage from '../../../assets/image/Background/bg-side-1.webp'; // Replace with your actual image path

const Contact = () => {


    return (
        <div className="container mx-auto  flex my-36">
            <div className="w-1/2 pr-8">
                <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>

                <form className="mb-4">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-xl font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-xl font-semibold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Type your message"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>

            <div className="w-1/2">
                <img src={contactImage} alt="Contact" className="rounded-lg shadow-md" />
            </div>
        </div>
    );
};

export default Contact;
