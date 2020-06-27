import React from 'react';
import './About.scss';

export default function About() {
    return (
        <div className="about">
            <div className="about__wrapper">
                <div className="about__header">
                    <div className="about__title title">Some Title</div>
                    <div className="about__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae aliquam voluptates porro vero laudantium iste? Non quos odit magni enim. Nam expedita rerum assumenda necessitatibus cum? Molestiae ipsam iste voluptatum!</div>
                </div>

                <div className="about__row">
                    <div className="about__column">
                        <div className="item-about">
                            <div className="item-about__icon">
                                <div></div>
                                {/* <img width="32px" height="32px" srcs="../img/01.png" /> */}
                            </div>
                            <div className="item-about__title">Desktop</div>
                            <div className="item-about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum laborum, architecto illo sapiente dignissimos beatae distinctio animi exercitationem ducimus molestiae, consequuntur provident? Numquam reiciendis quibusdam ratione quia molestias laboriosam!</div>
                        </div>
                    </div>
                    <div className="about__column">
                        <div className="item-about__icon">
                            <div></div>
                            {/* <img width="32px" height="32px" src="../img/02.png" /> */}
                        </div>
                        <div className="item-about__title">Mobile</div>
                        <div className="item-about__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam eum possimus ipsum mollitia accusantium consequatur ipsa quos autem architecto, labore esse, itaque debitis aperiam sapiente rem rerum praesentium harum laudantium!</div>
                    </div>
                    <div className="about__column">
                        <div className="item-about__icon">
                        <div></div>
                        {/* <img width="32px" height="32px" src="../img/03.png" /> */}
                        </div>
                        <div className="item-about__title">Embedded</div>
                        <div className="item-about__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusantium ipsum, id dolor ipsam saepe fugiat accusamus. Aperiam, ut nemo? Quaerat ex tenetur at debitis facilis modi mollitia soluta iure.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}