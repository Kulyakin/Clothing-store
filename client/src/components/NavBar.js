import React, { useContext } from 'react'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Button} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/constatns'

const NavBar = observer(() => {
    const { user } = useContext(Context)
    console.log(user.isAuth)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <NavLink
                className="ml-auto"
                style={{ color: 'white' }}
                to={SHOP_ROUTE}
            >
                Cloth-Store
            </NavLink>
            {user.isAuth ? 
                <Nav className="ml-auto">
                    <Button  variant={'outline-light'}
                        className='mx-3'
                        >Admin-panel</Button>
                    <Button
                        variant={'outline-light'}
                        onClick={() => user.setIsAuth(false)}
                    >
                        Log out
                    </Button>
                </Nav>
             : 
                <Nav className="ml-auto">
                    <Button
                        variant={'outline-light'}
                        onClick={() => user.setIsAuth(true)}
                    >
                        Log in
                    </Button>
                </Nav>
            }
            </Container>
        </Navbar>
    )
})

export default NavBar
