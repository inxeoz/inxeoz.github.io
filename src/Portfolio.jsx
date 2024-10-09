import React from 'react';
import './Portfolio.css'; // Ensure to create this CSS file for styles
import DpImage from './dp.jpg'; // Ensure to import the image file
const Portfolio = () => {
	return (
		<div className="bg-gradient min-h-screen p-8 flex items-center justify-center">
			<div className="portfolio-container">

				{/* Header Section */}
				<div className="glass-card mb-8">
					<div className="flex-container">
						<img
							src={DpImage}
							alt="Purushottam Singram"
							className="w-32 h-32 rounded-full border-4 border-green-300" // Adjust size and styling as needed
						/>
						<div className="text-container">
							<h1 className="text-4xl font-bold text-white">Purushottam Singram</h1>
							<p className="text-xl mt-2 font-semibold">AI Enthusiast & Software Engineer</p>
						</div>
					</div>

					<p className="text-gray-200 mt-4">
						Email: <a href="mailto:purushottamsingram@outlook.com" className="hover:underline">purushottamsingram@outlook.com</a><br />
						LinkedIn: <a href="https://www.linkedin.com/in/purushottam-singram-a328602a6" className="hover:underline">www.linkedin.com/in/purushottam-singram-a328602a6</a><br />
						GitHub: <a href="https://github.com/inxeoz" className="hover:underline">https://github.com/inxeoz</a>
					</p>
				</div>


				{/* Technical Skills */}
				<div className="glass-card mb-8">
					<h2 className="text-2xl font-bold text-white">Technical Skills</h2>
					<ul className="list-disc list-inside mt-4 text-gray-200">
						<li>Java(core)</li>
						<li>Node.js React js, nestjs</li>
						<li>Familiarity : Rust, C++, python, haskell</li>
					</ul>
				</div>

				{/* Soft Skills */}
				<div className="glass-card mb-8">
					<h2 className="text-2xl font-bold text-white">Soft Skills</h2>
					<ul className="list-disc list-inside mt-4 text-gray-200">
						<li>Adaptability</li>
						<li>Attention to Detail</li>
						<li>Creativity</li>
					</ul>
				</div>

				{/* Interests */}
				<div className="glass-card mb-8">
					<h2 className="text-2xl font-bold text-white">Interests</h2>
					<ul className="list-disc list-inside mt-4 text-gray-200">
						<li>Quantum Computing</li>
						<li>Nano Technology</li>
						<li>Artificial Intelligence & Machine Learning</li>
						<li>Simulation</li>
						<li>Space Exploration</li>
						<li>Game Development</li>
					</ul>
				</div>

				{/* Project Experience */}
				<div className="glass-card mb-8">
					<h2 className="text-2xl font-bold text-white">Project Experience</h2>
					<div className="mt-4">
						<h3 className="text-xl font-semibold">NRI_SETU - Mobile Application Development</h3>
						<p className="text-gray-200 mt-2">
							Developed a mobile application providing direct access to the NRI site for college students using Node.js, Express.js, React Native, and AWS Cloud. Streamlined access to college resources.
						</p>
					</div>
					<div className="mt-4">
						<h3 className="text-xl font-semibold">'BrainFlex' Game Development</h3>
						<p className="text-gray-200 mt-2">
							Designed and developed 2D 'BrainFlex' game using Godot Engine/Godot <script></script>.
						</p>
					</div>
				</div>

				{/* Extracurricular Activities */}
				<div className="glass-card">
					<h2 className="text-2xl font-bold text-white">Extracurricular Activities</h2>
					<div className="mt-4">
						<h3 className="text-xl font-semibold">Hackathon Participation</h3>
						<p className="text-gray-200 mt-2">
							Participated in CodeEnergia 2K23 hackathon at Sagar Institute of Research & Technology, Bhopal in October 2023.
						</p>
					</div>
					<div className="mt-4">
						<h3 className="text-xl font-semibold">Competitive Coding (CodinGame/Clash of Code)</h3>
						<p className="text-gray-200 mt-2">
							Achieved top rankings in CodinGame/Clash of Code challenges, ranking within the top 0.6% in India and top 3.1% globally, securing 64th rank in India.
						</p>
					</div>
				</div>

			</div>
		</div>
	);
};

export default Portfolio;
