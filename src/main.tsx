import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import ScrollToTop from './components/scroll-to-top/index.tsx'

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<ScrollToTop />
		<App />
	</BrowserRouter>
)
