import "./MainRouter.scss"
import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/organisms/Layout/Layout'
const Home = lazy(()=> import('../Pages/Home/Home'))
const About = lazy(()=> import('../Pages/About/About'))
const Quote = lazy(()=> import('../Pages/Projects/Quote/Quote'))
const TemplatesExample = lazy(()=> import('../Pages/TemplatesExample/TemplatesExample'))

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={
                        <Layout />
                    }
                    children={
                        <>
                            <Route
                                path='/'
                                element={
                                    <Suspense>
                                        <Home></Home>
                                    </Suspense>
                                }
                            />
                            <Route
                                path='/about-me'
                                element={
                                    <Suspense>
                                        <About></About>
                                    </Suspense>
                                }
                            />
                            <Route
                                path='/projects/quote-calculator'
                                element={
                                    <Suspense>
                                        <Quote></Quote>
                                    </Suspense>
                                }
                            />
                            <Route
                                path='/templates'
                                element={
                                    <Suspense>
                                        <TemplatesExample></TemplatesExample>
                                    </Suspense>
                                }
                            />

                        </>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter