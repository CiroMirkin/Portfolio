import './styles.css'

function App() {
  

  return (
    <>
      <section className="description">
		<div className="text">
			<h1 className="very-strong">Ciro Mirkin</h1>
			<h2 className="very-strong">Programador FrontEnd ッ</h2>
		</div>
	</section>

	<div className="icon-container"><i className="bi bi-chevron-down bouncer-animation"></i></div>
	
	<main className="page-main-content">

		<section className="projects-section">
			<h2 className="very-strong">Portafolio.</h2>

			<ul className="projects">
			
				<li className="project border" data-aos="fade-up">
					<div className="project__texts">
						<h3 className="project__title very-strong">Boar</h3>
						<div>
							<p>Una aplicación para administrar tareas sin distracciones.</p>
						</div>
					</div>
					<div className="actions">
						<a href="https://cm-boar.netlify.app/" target="_blank" className="actions__action very-strong">Ver proyecto</a>
						<a href="https://github.com/CiroMirkin/Boar" target="_blank" className="actions__action github-action very-strong" title="GitHub"><i className="bi bi-github"></i></a>
					</div>
					<div className="project__img-container">
						<img src="boar_app_by_ciro_mirkin.webp" alt="Captura de pantalla de Boar una aplicación para gestionar tareas."/>
					</div>
					<ul className="skils very-strong">
						<li>TypeScript</li>
						<li> * React</li>
						<li> * Vitest</li>
						<li> * Tailwind CSS</li>
					</ul>
				</li>
				<li className="project border" data-aos="fade-up">
					<div className="project__texts">
						<h3 className="project__title very-strong">Memotest</h3>
						<p>Un juego online de memoria que cuenta con diversas temáticas.</p>
					</div>
					<div className="actions">
						<a href="https://cm-memotest.netlify.app/" target="_blank" className="actions__action very-strong">Ver proyecto</a>
						<a href="https://github.com/CiroMirkin/memotest_TS" target="_blank" className="actions__action github-action very-strong" title="GitHub"><i className="bi bi-github"></i></a>
					</div>
					<div className="project__img-container">
						<img src="./memotest_app_by_ciro_mirkin.webp" alt="Captura de pantalla de un Memotest un juego de memoria online."/>
					</div>
					<ul className="skils very-strong">
						<li>TypeScript</li>
						<li> * HTML</li>
						<li> * CSS</li>
					</ul>
				</li>

			</ul>

		</section>

		<section className="my-content">
			<main>
				<a href="https://medium.com/@ciromirkin/" className="content-card border" target="_blank" data-aos="fade-up">
					<header className="very-strong">Medium</header>
					<p>Bitácora de código donde explico como resuelvo problemas que enfrento al crear un nuevo proyecto.</p>
				</a>
				<a href="https://github.com/CiroMirkin/Apuntes/" className="content-card border" target="_blank" data-aos="fade-up">
					<header className="very-strong">Apuntes</header>
					<div>
						<p>Actualmente tengo más de 50 apuntes sobre programación y publico uno nuevo todos los meses.</p>
					</div>
				</a>
			</main>
		</section>

		<section className="about-me">
			<main className="border" data-aos="fade-up">
				<header>
					<p>+3 años programando aplicaciones web.</p>
				</header>
				<div className="text">
					<p>Me esfuerzo en crear código y productos de calidad.</p>
					<p>Escribo código pensando en los programadores y aplicaciones pensando en los usuarios.</p>
					<p>Creo que es importante escribir código simple, documentado y respaldado por pruebas automáticas, al igual que lo es crear interfaces atractivas.</p>
					<p>Programo hace +5 años.</p>
				</div>
			</main>
			<footer>
				<a href="https://drive.google.com/file/d/18M0giAwgBsu-jgp5PO0RCV99Ce9M5Ps9/view?usp=drive_link" className="btn-large" target="_blank">Ver CV</a>
			</footer>
		</section>

		<footer className="social-media">
			<header>
				<h2 className="very-strong">Contacto.</h2>
			</header>
			<main>
				<a href="mailto:ciromirkin@gmail.com" className="link">Gmail</a>
				<a href="https://www.linkedin.com/in/ciro-mirkin-775a85278" target="_blank" className="link">LinkedIn</a>
				<a href="https://github.com/CiroMirkin" target="_blank" className="link">GitHub</a>
			</main>
		</footer>

	</main>

    </>
  )
}

export default App
