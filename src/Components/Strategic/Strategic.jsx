import './Strategic.css'
import strategicBG from './../../assets/bg2.svg'
import strategicIcon from './../../assets/icon_section.svg'
import { Link } from 'react-router-dom'

function Strategic() {

    return (
        <section className="app_strategic">
          <div className="strategic__inner">
            <div className="strategic__left">
                <div className="strategic_img">
                    <img src={strategicBG} alt="" />
                </div>
            </div>

            <div className="strategic_icon">
                <img src={strategicIcon} />
            </div>

            <div className="strategic__right">
                <div className="strategic__right__texts">
                    <h5 className="strategic_h5"><span className="red_color">Design</span> is strategic.</h5>
                    <span className="strategic_desc">“A well-crafted design strategy consistently produces desired outcomes and brand awareness. We are firm believers that success lies in creative collaboration with our clients.”</span>
                    <Link to='mailto:refielizade3@gmail.com' className="strategic_link">Schedule a Call</Link>
                </div>
            </div>
          </div>
        </section>
    );
}

export default Strategic;