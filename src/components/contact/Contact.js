import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1838131343065!2d77.77341531525005!3d12.831395721409988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae725b0bffffff%3A0x765f9c2e1a8ae431!2sAzven%20Breathe!5e0!3m2!1sen!2sin!4v1680256149114!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>" width="600" height="450" style="border:0;" allowfullscreen=" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact </h1>
            <p>I am open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Villa number 114 Azven Breathe Sarjapura</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> Ay677204@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>+916360431631</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
               WRITE A MESSAGE TO ASHISH YADAV
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
