import './Service.css'
import Group9 from './../../assets/Group 9.svg'

function Service() {

    return (
        <section className="app_service">
  <div className="container service_inner">
    <div className="service_inner_left">
      <img src={Group9} alt="" />
    </div>
    <div className="service_inner_right">
      <h5 className="service_inner_right_h5">
        Design Templates Are Highly Customizable,{" "}
        <span className="service_inner_right_h5_span">
          its easy to use!
        </span>
      </h5>
      <p className="service_inner_right_p">
        All design templates are ready to use, meaning you only need to focus on
        content or if necessary, adjust some properties such as color, font,
        font size and other properties to match your brand.
      </p>
      <div className="service_inner_right_benefits_box">
        <div className="_service_box">
          <div className="_service_box_square">∎</div>
          <p className="_service_box_p">
            <span className="_service_box_p_span">
              <b>Font Family:</b>
            </span>{" "}
            use your favorite font in the design template you choose. Figma has
            dozens of fonts, dont worry about font!
          </p>
        </div>
        <div className="_service_box">
          <div className="_service_box_square">∎</div>
          <p className="_service_box_p">
            <span className="_service_box_p_span">
              <b>Colors:</b>
            </span>{" "}
            adjust the color of the template design with the brand you have. Set
            a solid color or gradient, both of which are easy to customize.
          </p>
        </div>
        <div className="_service_box">
          <div className="_service_box_square">∎</div>
          <p className="_service_box_p">
            <span className="_service_box_p_span">
              <b>Much More:</b>
            </span>{" "}
            set more properties to suit your desires, all the designs own
            proportions optimized for social media.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}

export default Service;