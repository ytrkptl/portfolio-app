export const projectData = [
  {
    projectName: `Avatar Letter library`,
    siteLink: 'https://avatar-letter.netlify.app/',
    gitHubLink: 'https://github.com/ytrkptl/avatar-letter-client',
    imageUrl: `https://res.cloudinary.com/dun1b4fpw/image/upload/f_auto,q_auto,w_auto/v1574951670/portfolioapp/avatar-letter.png`,
    description: `A 3D-ish, stylish, cool, or unique-looking avatar-letter library that I made this to use in another app I'm working on so I don't have to rely on other Avatar libraries or providers, or maybe just for fun. The idea is to return a beautiful 3D-ish, stylish, cool, or unique-looking letter's image to the user rather than the default ones we see in most applications while making sure to provide a variety of sizes, sets (2 for now), and formats (2 for now) for free.`,
  },
  {
    projectName: `Shop-tunnel E-commerce store`,
    siteLink: 'https://shop-tunnel.herokuapp.com/',
    gitHubLink: 'https://github.com/ytrkptl/shop-tunnel',
    imageUrl: `https://res.cloudinary.com/dun1b4fpw/image/upload/f_auto,q_auto,w_auto/v1574951670/portfolioapp/ecommerce.png`,
    description: `An e-commerce store where you can buy clothers. It incorporates
		the use of Stripe Payment API for making payments, Firestore for storage, 
		and Sign in with Email or Google. The code contains both client and server side code. 
		Frontend is built with React Hooks, Redux-Saga, styled-components, while the backend
		uses Node and Express. Check it out. `,
  },
  {
    projectName: `Face Recognition App`,
    siteLink: 'https://face-rec-app-1.herokuapp.com/',
    gitHubLink: 'https://github.com/ytrkptl/face-rec-app-1',
    imageUrl: `https://res.cloudinary.com/dun1b4fpw/image/upload/f_auto,q_auto,w_auto/v1574951670/portfolioapp/face.png`,
    description: `A face recognition app that uses the Clarifai API to 
		detect multiple faces within the photos you upload to it. You can use
		several options to upload photos or copy-paste a url instead. It allows
		you to register or sign-in, and keeps track of how many photos 
		you've uploaded. It also displays an emoji based on that number.
		The project incldues both frontend and backend code in the same repository. 
		Frontend is made using React. The backend uses Clarifai API, AWS Lambda using Serverless,
		PostgreSQL, bcrypt for authentication, and JWT tokens
		for session manangment along with Redis.`,
  },
  {
    projectName: `Airtable Gatsby Blog`,
    siteLink: 'https://yatrik-blog.netlify.com/',
    gitHubLink: 'https://github.com/ytrkptl/yatrik-airtable-gatsby-blog',
    imageUrl: `https://res.cloudinary.com/dun1b4fpw/image/upload/f_auto,q_auto,w_auto/v1574951670/portfolioapp/blog.png`,
    description: `This server-side blog is built using Gatsby and is fully responsive
		and allows you to toggle between night/day modes. It utilizes
		Airtable's user-friendly database for storage and is built using
		GraphQL. It was originally built for a coding challenge but is now
		capable of being used as my personal blog. You can also submit your own
		blog post to it.`,
  },
  {
    projectName: 'School Employee Directory',
    siteLink: `${process.env.VITE_ACHS_CLIENT_URL}`,
    gitHubLink: 'https://github.com/ytrkptl/achsdirectory',
    siteBackendLink: `https://learnwithyatrik-api.onrender.com/api/achs-dir`,
    gHBackendLink: `https://github.com/ytrkptl/achsdirectory-api`,
    imageUrl: `https://res.cloudinary.com/dun1b4fpw/image/upload/f_auto,q_auto,w_auto/v1574951670/portfolioapp/achsdirectory.png`,
    description: `Originally, this employee directory was made as a helpful
		tool for my school as a way to practice my React web-development
		skills. It allows quickly searching for a faculty's contact
		information including their schedule, location, phone, etc. It also has 
		good animation that you can interact with.`,
  },
  {
    projectName: `Android App`,
    projectUrl: ``,
    gitHubLink: `https://github.com/ytrkptl/tazewell-tour-guide`,
    imageUrl: `https://res.cloudinary.com/dun1b4fpw/image/upload/f_auto,q_auto,w_auto/v1574951670/portfolioapp/tazewell-resized.png`,
    description: `As part of my nanodegree from Udacity, I built this using
		Android Studio to practice my Android skills. This is about 1.5 to 2 years ago. It uses XML and Java as the primary 
		languages. It isn't published anywhere but is avaiable to see on my device if requested.
		The repo is linked but was only recently pushed to GitHub.`,
  },
];
