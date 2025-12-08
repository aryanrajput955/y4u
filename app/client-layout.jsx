'use client'

import Header from './components/header'
import Footer from './components/footer'
import Loader from './components/loader'
import PageWrapper from './components/pagewrapper'

import {useEffect, useState} from 'react'
import {useRouter} from 'next/navigation'

export default function ClientLayout({children}) {
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
		<>
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
		</>
	)
}
