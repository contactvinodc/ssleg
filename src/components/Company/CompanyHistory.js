import React from 'react'
// company history
export default function CompanyHistory(props) {
    return (
        <section className="company-history">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h4 data-aos="fade-up" data-aos-duration="1000">Company History</h4>
                    <h5 data-aos="fade-up" data-aos-duration="1100">CC PVT LTD</h5>
                    <div className="history-sec" data-aos="fade-up" data-aos-duration="1200">
                        <ul className="timeline">
                            <div className="head-sec"></div>
                            <li>
                                <div className="Year">1995</div>
                                <div className="content">Lorem Ipsum is simply dummy text</div>
                            </li>
                            <li>
                                <div className="Year">2007</div>
                                <div className="content">Lorem Ipsum is simply dummy text</div>
                            </li>
                            <li>
                                <div className="Year">2011</div>
                                <div className="content">Lorem Ipsum is simply dummy text</div>
                            </li>
                            <li>
                                <div className="Year">2016</div>
                                <div className="content">Lorem Ipsum is simply dummy text</div>
                            </li>
                            <li>
                                <div className="Year">2018</div>
                                <div className="content">Lorem Ipsum is simply dummy text</div>
                            </li>
                            <li>
                                <div className="Year">2019</div>
                                <div className="content">Lorem Ipsum is simply dummy text</div>
                            </li>
                            <li>
                                <div className="Year">2020</div>
                                <div className="content">Lorem Ipsum is simply dummy text</div>
                            </li>
                            <div className="last-sec"></div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
