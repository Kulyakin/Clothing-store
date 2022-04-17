import React from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/constatns'

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Log In' : 'Sign Up'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-4"
                        placeholder="E-mail"
                    ></Form.Control>
                    <Form.Control
                        className="mt-3"
                        placeholder="Password"
                    ></Form.Control>
                    <div className="d-flex flex-row justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ? (
                            <div>
                                Don't have an account?{' '}
                                <NavLink to={REGISTRATION_ROUTE}>
                                    Sign Up
                                </NavLink>
                            </div>
                        ) : (
                            <div>
                                Do you have an account?{' '}
                                <NavLink to={LOGIN_ROUTE}>Sign In</NavLink>
                            </div>
                        )}
                        <Button variant="outline-dark">
                            {isLogin ? 'Log in' : 'Sign up'}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth
