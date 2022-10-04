import React from 'react'
import './_topmenu.scss'

const menu=['Home','Men','Women','Kids','Best Seller']

const TopMenu = () => {
  return (
    <>
        <header className='menuHeader'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <nav className='menu'>
                            <ul>
                                {menu.map((items,index)=>(
                                    <li key={index}>
                                        <a href='#'>{items}</a>
                                    </li>
                                ))}
                                {/* <li>
                                    <a href='#'>Home</a>
                                </li>
                                <li>
                                    <a href='#'>All</a>
                                </li>
                                <li>
                                    <a href='#'>Men</a>
                                </li>
                                <li>
                                    <a href='#'>Women</a>
                                </li>
                                <li>
                                    <a href='#'>Kids</a>
                                </li>
                                <li>
                                    <a href='#'>Best Seller</a>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default TopMenu