import React from 'react'


function Contact() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  return (
    <div className='w-full flex justify-end items-center'>
        <div className='text-end text-[#F5F5F5] my-4 mx-6'>
            <p className='bg-[#207448] p-1 text-md rounded-md cursor-pointer'>Contact Me <i classNameName="fa-regular fa-user"></i></p>
        </div>
        <div className="sideNav">
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                      <ul>
                          <li><i className="fa-solid fa-house"></i> Home</li>
                          <li><i className="fa-solid fa-fire-flame-curved"></i> Trending</li>
                          <li><i className="fa-solid fa-code"></i> Snippets</li>
                          <li><i className="fa-solid fa-video"></i> Videos</li>
                      </ul>
                      <h2>Socials</h2>
                      <ul>
                      <a href="https://instagram.com/abhaynegi290?igshid=OGQ5ZDc2ODK2ZA==" target="_blank">
                          <li><i className="fa-brands fa-instagram" style={{color:"#B5179E"}}></i> Instagram</li>
                      </a>
                      <a href="https://github.com/Abhaynegi001" target="_blank">
                          <li><i className="fa-brands fa-github" style={{color:'#288D81'}}></i> Github</li>
                      </a>
                      <a href="https://www.linkedin.com/in/abhay-negi-0319172b1?utm_source=share&utm_campagin=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                          <li><i className="fa-brands fa-linkedin-in" style={{color:"#0277B5"}}></i> LinkedIn </li>
                          </a>
                      </ul>
               </div>
                  
                  <span className='md:hidden' style={{fontSize:30 , cursor:"pointer" , color:"white" , marginRight:"1rem"}} onClick={openNav}>&#9776;</span>
                  
            </div>
    </div>
  )
}

export default Contact
