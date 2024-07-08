import React, { useState } from 'react'
import './Qualification.css'
const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) =>{
        setToggleState(index);
    };
  return (
    <section className='section qualification'>
      <div className="qualification__header">
        <h2 className="section__title">Qualification</h2>
        <span className='section__subtitle'>My personel journey</span>
        </div>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex"
                    : "qualification__button button--flex"} onClick={()=> toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification--icon"></i>Education
                </div>
                <div className={toggleState === 2  ? "qualification__button qualification__active button--flex"
                    : "qualification__button button--flex"} onClick={()=> toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification--icon"></i>Experience
                </div>
            </div>
            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active":"qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.E</h3>
                            <span className="qualification__subtitle">Jain College Of Engineering and Research</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2021 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">PUC</h3>
                            <span className="qualification__subtitle">Govindarama Seksaria Science College</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2019 - 2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">10th</h3>
                            <span className="qualification__subtitle">Shantiniketan Public School</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2018
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active":"qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">FullStack Web Development</h3>
                            <span className="qualification__subtitle">Pranaksh Technologies</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> November 2023 - January 2024
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">C++ & DATA STRUCTURES</h3>
                            <span className="qualification__subtitle">InternshipStudio</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> June 2022
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Python and Data Analysis</h3>
                            <span className="qualification__subtitle">CoachEd</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> October to November 2022
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
