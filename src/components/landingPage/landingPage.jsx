import React from 'react'
import './landingPage.scss'
import {
    NavLink,
} from 'reactstrap';
import Button from '../smallComponents/Button';
import Card from '../smallComponents/Card';


const LandingPage = () => {
    return (
        <>

            <div className='header-block'>
                <div className='header-block content'>
                    <div className='feedback'>
                            <div className='feedback__block'>
                                <div className = 'feedback__block-phone-img'></div>
                                <div className='feedback__block-phone-number'>269 - 555 - 5555</div>
                            </div>
                    </div>
                    <div className='menu'>
                        <div className='menu__logo'></div>
                        <div className='menu__links'>
                            <ul>
                                <li>
                                    <NavLink href='/'>HOME</NavLink>
                                </li>
                                <li>
                                    <NavLink>ABOUT</NavLink>
                                </li>
                                <li>
                                    <NavLink>SERVICES</NavLink>
                                </li>
                                <li>
                                    <NavLink>CARPORTS</NavLink>
                                </li>
                                <li>
                                    <NavLink>NEWS</NavLink>
                                </li>
                                <li>
                                    <NavLink>CONTACT</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className='desc'>GOLF CARS</div>
            <div className='content-block content margin-top1'>
                <div className='margin-top1 text' style={{padding: '0 1em'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum iure numquam recusandae sed eveniet pariatur molestiae corporis nesciunt voluptatem, accusamus quam esse autem mollitia?</div>
                <div className='row-cards1 margin-top1'>
                    <Card src='image3.jpg'>
                        <div className='card-text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique.
                        </div>
                        <Button className='margin-top1'>
                            LOREM IPSUM
                        </Button>
                    </Card>
                    <Card src='image5.jpg'>
                        <div className='card-text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique.
                        </div>
                        <Button className='margin-top1'>
                            LOREM IPSUM
                        </Button>
                    </Card>
                    <Card src='image4.jpg'>
                        <div className='card-text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique.
                        </div>
                        <Button className='margin-top1'>
                            LOREM IPSUM
                        </Button>
                    </Card>
                </div>
                <div className='delimiter margin-top1'>OTHER SERVICES</div>
                <div className='row-cards2 margin-top1'>
                    <Card src='image7.jpg'>
                        <div className='card-text-bold'>
                            SMALL ENGINE <br></br>
                             REPAIR
                        </div>
                        <Button className='margin-top1'>
                            LOREM IPSUM
                        </Button>
                    </Card>
                    <Card src='image2.jpg'>

                        <div className='card-img'></div>
                    </Card>
                </div>
                <div className='delimiter margin-top1'>CALL OR COME IN TODAY | 269 - 555 - 5555</div>
                <div className='row-cards3 margin-top1'>
                    <Card style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
                        <div className='card-logo-img'></div>
                        <Button className='margin-top1'>
                            GET DIRECTIONS
                        </Button>
                    </Card>
                    <Card style={{ height: '100%', width: '100%' }} src='imageMap.png' />
                    <div className='hours-opearation'>
                        <p className='hours-opearation__header'>HOURS OF OPERATING</p>
                        <div className='hours-opearation__container'>
                            <div>
                                <p>MON</p>
                                <p>TUE</p>
                                <p>WED</p>
                                <p>THUR</p>
                                <p>FRI</p>
                                <p>SAT</p>
                                <p>SAN</p>
                            </div>
                            <div>
                                <p>9:00 AM - 5:00 PM</p>
                                <p>9:00 AM - 5:00 PM</p>
                                <p>9:00 AM - 5:00 PM</p>
                                <p>9:00 AM - 5:00 PM</p>
                                <p>9:00 AM - 5:00 PM</p>
                                <p>CLOSED</p>
                                <p>CLOSED</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className='footer-links margin-top1'>
                <div className='content row' style={{height: '100%', margin: 0}}>
                    <ul className='col-0 col-lg-5'>
                        <li>
                            <NavLink href='/'>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink>ABOUT</NavLink>
                        </li>
                        <li>
                            <NavLink>SERVICES</NavLink>
                        </li>
                        <li>
                            <NavLink>CARPORTS</NavLink>
                        </li>
                        <li>
                            <NavLink>NEWS</NavLink>
                        </li>
                        <li>
                            <NavLink>CONTACT</NavLink>
                        </li>
                    </ul>

                    <p className='offset-0 col-12 offset-lg-1 col-lg-6 conditions' style={{paddingRight: '0'}}>COPYRIGHT © WESTVIEW GOLF CARS 2020 | ABOVE MEDIA</p>
                </div>

            </div>
        </>
    )
}

export default LandingPage