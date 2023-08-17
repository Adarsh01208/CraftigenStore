import React from 'react'

const Footer = () => {
  return (
    <div className=' footer_position'>
      <div className='container-fluid' style={{ backgroundColor: ' #FFFAF2' }}>
        <div className='row justify-content-evenly justify-content-center p-5 footer_decoration'>
          <div className='col-md-2 m-2 mx-2'>
            <div className='img-fluid mb-4'>
              <img style={{ width: 200 }} src="https://thebombaystore.com/cdn/shop/files/Bombay_Store_Logo_-_Horizontal_d7759c6c-af27-4e1a-b410-8c60a11575cb.jpg?v=1617723352" alt="" />
            </div>
            
            <div className='mb-4  ' >
              <p className='fw-bold'>Orders & Purchase Queries</p>
              <p>Phone No: +91-8657432320</p>
              <p>Email:orders@bombaystore.com</p>
              <p>Mon to Sat (10 am to 6 pm)</p>
              <p className='fw-bold'>Stores Open 365 days</p>
            </div>

            <div className='mt-4'>
              <p>For Complaints & Feedback</p>
              <p>feedback@bombaystore.com</p>
            </div>
          </div>
          <div className='col-md-2 mt-2  mx-4'>
            <div>
              <h6>Shop</h6>
            </div>
            <div className='my-4 footer_link'>
              <a href="">Ganesha</a><br />
              <a href="">Graphic Work</a><br />
              <a href="">Home Decor</a><br />
              <a href="">Artifact</a><br />
              <a href="">Asseccories</a><br />
              <a href="">Gifting</a><br />
              <a href="">Store</a><br />
            </div>

          </div>
          <div className='col-md-2 m-2'>
            <div>
              <h6>About Us</h6>
            </div>
            <div className='my-4 '>
              <a href="">Our Story</a><br />
              <a href="">Carrier</a><br />
              <a href="">Investor Relation</a><br />
              <a href="">New Supplier</a><br />
              <a href="">Blog</a><br />

            </div>

          </div>
          <div className='col-md-2 m-2'>
            <div>
              <h6>Customer Care</h6>
            </div>
            <div className='my-4  '>
              <a href="">Our Policies</a><br />
              <a href="/contactus">Contact Us</a><br />
              <a href="">FAQs</a><br />
            </div>

          </div>
          <div className='col-md-3 m-2'>
            <div>
              <h6 className='mx-4'>Follow Us</h6>
            </div>
            <div>
              <section class="d-flex mx-3 p-1 ">
                <a className="btn  btn-floating m-0 p-1 " href="#!" role="button"><i class="fab fa-facebook-f"></i></a>
                <a className="btn  btn-floating m-0 p-1" href="#!" role="button"><i class="fab fa-twitter"></i></a>
                <a className="btn  btn-floating m-0 p-1" href="#!" role="button"><i class="fab fa-instagram"></i></a>
                <a className="btn  btn-floating m-0 p-1 " href="#!" role="button"><i class="fab fa-linkedin-in"></i></a>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6 footer_img '>

          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;