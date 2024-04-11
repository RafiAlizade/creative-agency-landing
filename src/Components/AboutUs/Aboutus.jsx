import './Aboutus.css'

function Aboutus() {

return (
        <main className="contact-main">
  <section className="contact">
    <div className="container">
      <div className="contact__inner">
        <div className="contact_top">
          <h2 className="contact_h2">Contact Us</h2>
          <div className="contact_line"></div>
        </div>
        <form action="#" className="contact_form">
          <label htmlFor="firstname" id="text">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              autoComplete="off"
            />
          </label>
          <label htmlFor="lastname" id="text">
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              autoComplete="off"
            />
          </label>
          <label htmlFor="mail" id="text">
            <input
              type="email"
              name="mail"
              placeholder="Email"
              autoComplete="off"
            />
          </label>
          <label htmlFor="message" id="textarea-cl">
            <textarea
              placeholder="Please enter your message"
              defaultValue={""}
            />
          </label>
          <button className="contact_btn">Submit your message</button>
        </form>
      </div>
    </div>
  </section>
</main>
)
}

export default Aboutus;