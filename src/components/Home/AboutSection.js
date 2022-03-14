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
                            <h1>ABOUT CC</h1>
                            <h2>We Build for Your Comfort</h2>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy</p>
                        <a href=""><span>More About</span></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
