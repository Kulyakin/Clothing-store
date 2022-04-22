import React, { useContext } from 'react'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { NavLink, useNavigate } from 'react-router-dom'
import { LOGIN_ROUTE, SHOP_ROUTE, ADMIN_ROUTE } from '../utils/constatns'

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    console.log(user.isAuth)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink
                    className="ml-auto text-decoration-none"
                    style={{ color: 'white', fontSize: '24px' }}
                    to={SHOP_ROUTE}
                >
                    Cloth-Store
                </NavLink>
                {user.isAuth ? (
                    <Nav className="ml-auto">
                        <Button
                            variant={'outline-light'}
                            className="mx-3"
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Admin-panel
                        </Button>
                        <Button
                            variant={'outline-light'}
                            onClick={() => {
                                navigate(LOGIN_ROUTE)
                                user.setIsAuth(false)
                            }}
                        >
                            Log out
                        </Button>
                    </Nav>
                ) : (
                    <Nav className="ml-auto">
                        <Button
                            variant={'outline-light'}
                            onClick={() => user.setIsAuth(true)}
                        >
                            Log in
                        </Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    )
})

export default NavBar
