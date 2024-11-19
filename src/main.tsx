import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, useTheme } from './components/providers/theme-provider';
import { shadesOfPurple } from '@clerk/themes';
import App from './App.tsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
	throw new Error('Missing Publishable Key');
}

function ClerkAppearanceWrapper({ children }: { children: React.ReactNode }) {
	const { theme } = useTheme();

	return (
		<ClerkProvider
			appearance={{
				baseTheme: theme === 'dark' ? shadesOfPurple : undefined,
			}}
			publishableKey={PUBLISHABLE_KEY}
			afterSignOutUrl={'/'}
		>
			{children}
		</ClerkProvider>
	);
}

createRoot(document.getElementById('root')!).render(
	<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
		<BrowserRouter>
			<StrictMode>
				<ClerkAppearanceWrapper>
					<App />
				</ClerkAppearanceWrapper>
			</StrictMode>
		</BrowserRouter>
	</ThemeProvider>
);