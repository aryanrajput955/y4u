'use client'

import {Inter, JetBrains_Mono} from 'next/font/google'
import './globals.css'

import Header from './components/header'
import Footer from './components/footer'
import Loader from './components/loader'
import PageWrapper from './components/pagewrapper'
import SEOHead from './components/seo-head'

import {useEffect, useState} from 'react'
import {useRouter} from 'next/navigation'

const inter = Inter({subsets: ['latin']})
const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-mono',
})

export default function RootLayout({children}) {
	const router = useRouter()

	const [loading, setLoading] = useState(true) // initial splash loader
	const [routeLoading, setRouteLoading] = useState(false) // loader on navigation

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 1500)
		return () => clearTimeout(timer)
	}, [])

	useEffect(() => {
		const handleStart = () => setRouteLoading(true)
		const handleEnd = () => setRouteLoading(false)

		router.events?.on('routeChangeStart', handleStart)
		router.events?.on('routeChangeComplete', handleEnd)
		router.events?.on('routeChangeError', handleEnd)

		return () => {
			router.events?.off('routeChangeStart', handleStart)
			router.events?.off('routeChangeComplete', handleEnd)
			router.events?.off('routeChangeError', handleEnd)
		}
	}, [router])

	return (
		<html
			lang='en'
			className='scroll-smooth'>
			<SEOHead />
			<body
				className={`${inter.className} ${jetbrainsMono.variable} font-sans antialiased`}>
				{/* Global Loader (initial + route changes) */}
				{(loading || routeLoading) && (
					<div className='fixed inset-0 flex items-center justify-center bg-white z-9999'>
						<Loader />
					</div>
				)}

				<Header />

				{/* Smooth enter animation wrapper */}
				<PageWrapper>{children}</PageWrapper>

				<Footer />
			</body>
		</html>
	)
}
