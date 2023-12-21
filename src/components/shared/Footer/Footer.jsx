import { Link } from 'react-router-dom';
import facebookIcon from '../../../assets/image/icons/facebook.svg';
import twitterIcon from '../../../assets/image/icons/twitter-svgrepo-com.svg';
import linkedinIcon from '../../../assets/image/icons/linkedin.svg';
import githubIcon from '../../../assets/image/icons/github1.svg';

const Footer = () => {
    const socialMediaLinks = [
        { id: 1, icon: facebookIcon, link: 'https://www.facebook.com' },
        { id: 2, icon: twitterIcon, link: 'https://www.twitter.com' },
        { id: 3, icon: linkedinIcon, link: 'https://www.linkedin.com' },
        { id: 4, icon: githubIcon, link: 'https://www.github.com' },
        // Add more social media links as needed
    ];

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex items-center justify-between">
                <div>
                    <p className="text-lg font-semibold">Brilen Task Management</p>
                    <p className="text-sm">© 2023 || Created by Nafisa Ali</p>
                </div>
                <div className="flex space-x-4">
                    {socialMediaLinks.map((link) => (
                        <Link key={link.id} to={link.link} target="_blank" rel="noopener noreferrer">
                            <img
                                src={link.icon}
                                alt={`Social Media Icon ${link.id}`}
                                className="w-8 h-8 object-contain hover:opacity-75 transition duration-300"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;


