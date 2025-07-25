import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import NotFound from "./components/sections/NotFound";
import Education from "./components/sections/Education";

function App() {
	return (
		<ThemeProvider>
			<Router>
				<div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900/60">
					<Header />
					<main className="flex-grow">
						<Routes>
							<Route
								path="/"
								element={
									<>
										<Hero />
										<About />
										<Skills />
										<Projects />
										<Contact />
									</>
								}
							/>
							<Route path='/education' element={<Education/>}/>
							<Route path="*" element={<NotFound />} />
						</Routes>
					</main>
					<Footer />
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
