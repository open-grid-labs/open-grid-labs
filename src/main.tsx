import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import ScrollToTop from './components/scroll-to-top/index.tsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')!).render(
	<HelmetProvider>
		<BrowserRouter>
			<ScrollToTop />
			<App />
		</BrowserRouter>
	</HelmetProvider>
)
