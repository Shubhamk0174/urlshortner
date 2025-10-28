export default function About() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-6">About This Project</h1>
        <p className="text-lg mb-8">
          This URL shortener was built with Next.js and MongoDB to provide a simple and efficient way to create short URLs.
        </p>
        <div className="bg-gray-100 dark:bg-black p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Made by Shubham</h2>
          <p className="mb-4">A passionate developer creating web applications.</p>
          <div className="flex flex-col gap-2 justify-center items-center">
            <a
              href="https://iamshubhamkumar.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline flex items-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="2"/>
                <path d="M2 12h20" stroke="#3b82f6" strokeWidth="2"/>
                <path d="M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20" stroke="#3b82f6" strokeWidth="2"/>
              </svg>
              Visit My Website
            </a>
            <a
              href="https://www.linkedin.com/in/shubhamkumar-profile/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline flex items-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0077b5"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}