import React from 'react'


function Footer() {
    return (
        <div className='py-12  bg-black flex justify-center flex-col items-center gap-3 text-white '>
            <div className="h-[80px] w-[250px]  "
                style={{
                    backgroundImage: `url('/src/assets/images/costom.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                }}
            >
            </div>
            
            <div>
                <ul>
                    <li className='md:gap-8 px-10 gap-5 flex' >
                        <a href="">FAQ</a>
                        <a href="">Terms and Privacy</a>
                        <a href="">Help Center</a>
                        <a href="">Way To Watch</a>
                        <a href="">Cookies Preferences</a>
                    </li>
                </ul>
            </div>
            <h6 >copyright © 2025 CINESPHERE .All Rights Reserved</h6>



        </div>
    )
}

export default Footer
