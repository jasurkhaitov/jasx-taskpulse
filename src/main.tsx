import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, useTheme } from './components/providers/theme-provider'
import { shadesOfPurple } from '@clerk/themes'
import App from './App.tsx'
import './index.css'
import { ClerkProvider, useAuth } from '@clerk/clerk-react'
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
	throw new Error('Missing Publishable Key')
}

const deploymentURL = import.meta.env.VITE_CONVEX_URL;

const convex = new ConvexReactClient(deploymentURL);

function ClerkAppearanceWrapper({ children }: { children: React.ReactNode }) {
	const { theme } = useTheme()

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
	)
}

createRoot(document.getElementById('root')!).render(
	<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
		<BrowserRouter future={{ v7_startTransition: true }}>
			<StrictMode>
				<ClerkAppearanceWrapper>
					<ConvexProviderWithClerk client={convex} useAuth={useAuth}>
						<App />
					</ConvexProviderWithClerk>
				</ClerkAppearanceWrapper>
			</StrictMode>
		</BrowserRouter>
	</ThemeProvider>
)
