import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { registration, login } from '../http/userAPI'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/constatns'

const Auth = observer(() => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        if (isLogin) {
            const response = await login()
        } else {
            const response = await registration(email, password)
            console.log(response)
        }
    }

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
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    ></Form.Control>
                    <Form.Control
                        className="mt-3"
                        placeholder="Password"
                        type='password'
                        value={password}
                        onChange={p => setPassword(p.target.value)}
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
                        <Button variant="outline-dark"
                        onClick={click}>
                            {isLogin ? 'Log in' : 'Sign up'}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
})

export default Auth
