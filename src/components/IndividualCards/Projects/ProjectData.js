import achsdirectory from '../../../assets/achs-directory-responsive.png';
import ecommerce from '../../../assets/shop-tunnel.png';
import face from '../../../assets/new-face-rec-1.png';
import blog from '../../../assets/blog.png';
import tazewell from '../../../assets/tazewell2.png';
import portfolio from '../../../assets/portfolio-responsive.png';
				
export const projectData = [
	{ 
		projectName: `Shop-tunnel E-commerce store`, 
		siteLink: 'https://shop-tunnel.herokuapp.com/', 
		gitHubLink: 'https://github.com/ytrkptl/shop-tunnel', 
		imageUrl: ecommerce, 
		description: `An e-commerce store where you can buy clothers. It incorporates
		the use of Stripe Payment API for making payments, Firestore for storage, 
		and Sign in with Email or Google. The code contains both client and server side code. 
		Frontend is built with React Hooks, Redux-Saga, styled-components, while the backend
		uses Node and Express. Check it out. `
	},
	{ 
		projectName: `Face Recognition App`,
		siteLink: 'https://new-face-rec-1.herokuapp.com/', 
		gitHubLink: 'https://github.com/ytrkptl/new-face-rec-1',
		siteBackendLink: `https://new-face-rec-1-api.herokuapp.com/`,
		gHBackendLink: `https://github.com/ytrkptl/new-face-rec-1-api`,
		imageUrl: face,
		description: `A face recognition app that uses the Clarifai API to 
		detect multiple faces within the photo url's you upload to it. It allows
		you to register or sign-in, and keeps track of how many photos 
		you've uploaded. It also displays an emoji based on that number.
		The tech involves separate frontend and backend code. Frontend is 
		made using React. The backend uses Clarifai API, AWS Lambda using Serverless,
		PostgreSQL, Docker, bcrypt for authentication, and JWT tokens
		for session manangment along with Redis.`
	},
	{ 
		projectName: `Airtable Gatsby Blog`, 
		siteLink: 'https://yatrik-blog.netlify.com/', 
		gitHubLink: 'https://github.com/ytrkptl/yatrik-airtable-gatsby-blog', 
		imageUrl: blog,
		description: `This server-side blog is built using Gatsby and is fully responsive
		and allows you to toggle between night/day modes. It utilizes
		Airtable's user-friendly database for storage and is built using
		GraphQL. It was originally built for a coding challenge but is now
		capable of being used as my personal blog. You can also submit your own
		blog post to it.`
	},
	{ 
		projectName: 'School Employee Directory', 
		siteLink: 'https://achsdirectory.netlify.com/', 
		gitHubLink: 'https://github.com/ytrkptl/achsdirectory',
		siteBackendLink: `https://achsdirectory-api.herokuapp.com/`,
		gHBackendLink: `https://github.com/ytrkptl/achsdirectory-api`, 
		imageUrl: achsdirectory,
		description: `Originally, this employee directory was made as a helpful
		tool for my school as a way to practice my React web-development
		skills. It allows quickly searching for a faculty's contact
		information including their schedule, location, phone, etc. It also has 
		good animation that you can interact with.`
	},
	{ 
		projectName: 'Portfolio App', 
		siteLink: 'https://yatrik.dev/', 
		gitHubLink: 'https://github.com/ytrkptl/portfolio-app',
		imageUrl: portfolio,
		description: `This is obviously the portfolio site you are currently looking at
		built using React.`
	},
	{ 
		projectName: `Android App`, 
		projectUrl: ``,
		gitHubLink: `https://github.com/ytrkptl/tazewell-tour-guide`, 
		imageUrl: tazewell,
		description: `As part of my nanodegree from Udacity, I built this using
		Android Studio to practice my Android skills. This is about 1.5 to 2 years ago. It uses XML and Java as the primary 
		languages. It isn't published anywhere but is avaiable to see on my device if requested.
		The repo is linked but was only recently pushed to GitHub.`
	}
];
