import React from 'react'

// About section

export default function AboutSection (props) {
    return (
        <section class="hm-about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="hm-about-img">
                            <div class="about-img1" data-aos="fade-up" data-aos-duration="900">
                                <img src="/images/about1.jpg" alt="" />
                            </div>
                            <div class="about-img2" data-aos="fade-left" data-aos-duration="1200">
                                <img src="/images/about2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8" data-aos="fade-up" data-aos-duration="800">
                        <div class="about-head">
                            <h1>ABOUT CC</h1>
                            <h2>We Build for Your Comfort</h2>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                        <a href=""><span>More About</span></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
