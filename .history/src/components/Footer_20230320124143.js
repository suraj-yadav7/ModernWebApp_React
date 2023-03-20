import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
          <h1>TechPedia</h1>
        <div className='terms'>
            <p>Copyright <i class="fa-regular fa-copyright"></i> 2023</p>
            <p>Terms Of Service</p>
            <p>Privacy Policy</p>
        </div>

        <div className='socialMedia'>
            <h5>Follow us</h5>
            <div>
                <a href="https://www.instagram.com" target={"_blank"}><i class="fa-brands fa-instagram"></i>  Instagram</a>
                <a href="https://www.twitter.com" target={"_blank"}><i class="fa-brands fa-twitter"></i>   Twitter </a>
                <a href="https://www.youtube.com"target={"_blank"}><i class="fa-brands fa-youtube"></i>   Youtube </a>
            </div>
        </div>

    </footer>
    </>
  )
}

export default Footer
