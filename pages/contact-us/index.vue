<template>
  <div class="App">
    <BreadCrumb page-name="Contact Us" />
    <section class="wpo-contact-pg-section section-padding">
      <div class="container">
        <div class="row">
          <div class="col col-lg-10 offset-lg-1">
            <div class="office-info">
              <div class="row">
                <div class="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div class="office-info-item">
                    <div class="office-info-icon">
                      <div class="icon">
                        <font-awesome-icon :icon="['fa', 'location-dot']" />
                      </div>
                    </div>
                    <div class="office-info-text">
                      <h2>Address</h2>
                      <p>7 Green Lake Street Crawfordsville, IN 47933</p>
                    </div>
                  </div>
                </div>
                <div class="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div class="office-info-item">
                    <div class="office-info-icon">
                      <div class="icon">
                        <font-awesome-icon :icon="['fa', 'envelope']" />
                      </div>
                    </div>
                    <div class="office-info-text">
                      <h2>Email Us</h2>
                      <p>anur@gmail.com</p>
                      <p>helloyou@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div class="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div class="office-info-item">
                    <div class="office-info-icon">
                      <div class="icon">
                        <font-awesome-icon :icon="['fa', 'phone']" />
                      </div>
                    </div>
                    <div class="office-info-text">
                      <h2>Call Now</h2>
                      <p>+1 800 123 456 789</p>
                      <p>+1 800 123 654 987</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="wpo-contact-title">
              <h2>Have Any Question?</h2>
              <p>
                It is a long established fact that a reader will be distracted
                content of a page when looking.
              </p>
            </div>
            <div class="wpo-contact-form-area">
              <form class="form">
                <div class="row justify-content-center">
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-field">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value=""
                      />
                      <p></p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-field">
                      <input
                        type="text"
                        name="lastname"
                        placeholder="Lastname"
                        value=""
                      />
                      <p></p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-field">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value=""
                      />
                      <p></p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-field">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value=""
                      />
                      <p></p>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-field">
                      <textarea name="message" placeholder="Message"></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-submit">
                      <button type="submit" class="theme-btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <section class="wpo-contact-map-section">
        <div class="wpo-contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"
          ></iframe>
        </div>
      </section>
    </section>
  </div>
</template>


<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  name: 'ContactUsPage',
  mounted() {
    AOS.init()
  },
}
</script>