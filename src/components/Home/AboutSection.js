import React from 'react'

// About section

export default function AboutSection (props) {
    return (
        <section className="hm-about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="hm-about-img">
                            <div className="about-img1" data-aos="fade-up" data-aos-duration="900">
                                <img src="/images/about1.jpg" alt="" />
                            </div>
                            <div className="about-img2" data-aos="fade-left" data-aos-duration="1200">
                                <img src="/images/about2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8" data-aos="fade-up" data-aos-duration="800">
                        <div className="about-head">
                            <h1>ABOUT SS Legacy</h1>
                            <h2>We Build for Your Comfort</h2>
                        </div>
                        <p>SS LEGACY ENGINEERS PRIVATE LIMITED is an upgraded formation of K. S. Engineering Company, with ISO 9001:2015 & ISO 45001:2018 certification. KS Engineering has grown in past three decades from a humble beginning as labour contractor at HIL into a medium sized pvt ltd company specializing in fabrication & erection of piping and chemical plants, maintenance & operation facilitators in large plants. It started it base from simple fabrication and erection works at Renukoot to entire plant operation and maintenance in Lanjigarh. The turnover of the company increased to approx. 34 crore annually without much bank borrowings.</p>
                        <a href=""><span>More About</span></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
