import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Ratting from '../ratting/Ratting';



const reviwtitle = "Add a Review";

let ReviewList = [
    {
      imgUrl: "/src/assets/images/instructor/Dilip.jpg",
      imgAlt: "Client thumb",
      name: "Ganelon Boileau",
      date: "Posted on Nov 20, 2024 at 8:30 pm",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/Surbhi.jpg",
      imgAlt: "Client thumb",
      name: "Morgana Cailot",
      date: "Posted on Nov 20, 2024 at 8:30 pm",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/Prashant.jpg",
      imgAlt: "Client thumb",
      name: "Telford Bois",
      date:"Posted on Nov 20, 2024 at 8:30 pm",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/Kajal.jpg",
      imgAlt: "Client thumb",
      name: "Cher Daviau",
      date: "Posted on Nov 20, 2024 at 8:30 pm",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/nidi.jpg",
        imgAlt: "Client thumb",
        name: "Cher Daviau",
        date: "Posted on Nov 20, 2024 at 8:30 pm",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
      },
  ];



const Review = () => {
    const [reviewShow, setReviweShow] = useState(true);
  return (
    <>
        <ul className={`review.nav lab-ul ${reviewShow ? "RevActive" : "DescActive" }`}>
            <li className='desc' onClick={()=> setReviweShow(!reviewShow) }>Description</li>
            <li className='rev' onClick={()=> setReviweShow(!reviewShow) }>Reviews 4</li>
        </ul>
        {/* Review-content */}
        <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
            <div className="review-showing">
                <ul className='content lab-ul'>
                    {
                        ReviewList.map((review, i) => {
                            <li key={i}>
                                <div className='post-thumb'>
                                    <img src={review.imgUrl} alt="" />
                                </div>
                                <div className="post-content">
                                    <div className="entry-meta">
                                        <div className="posted-on">
                                            <a href="#">{review.name}</a>
                                            <a href="#">{review.date}</a>
                                        </div>
                                    </div>
                                    <div className="entry-content">
                                        <p>{review.desc}</p>
                                    </div>
                                </div>
                            </li>
                        })
                    }
                </ul>
                {/* reviwe-field */}
                <div className="client-review">
                    <div className="review-form">
                        <div className="review-title">
                            <h5>{reviwtitle}</h5>
                        </div>

                        <form action="action" className='row'>
                            <div className="col-md-4 col-12">
                                <input type="text" name="name" id="name"  placeholder='Full Name'/>
                            </div>
                            <div className="col-md-4 col-12">
                                <input type="email" name="email" id="email"  placeholder='Your Email'/>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="rating">
                                    <span className='ms-2'> Your Rating </span>
                                    <Ratting/>
                                </div>
                            </div>
                            <div className='col-md-12 col-12'>
                                <textarea name="message" id="massage" rows="8" placeholder='Type Here Message'></textarea>
                            </div>
                            <div className="col-12">
                                <button type='submit' className='default-button'>
                                    <span>Submit Review</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Description-section */}
            <div className="description">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia consectetur, magnam voluptates perspiciatis, eaque, quam neque ea voluptatibus reprehenderit itaque sit 
                animi nam architecto exercitationem. Animi eos ea autem aliquam?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo temporibus sed, obcaecati dolore commodi 
                cupiditate consequuntur porro facere quasi, nam accusamus blanditiis molestias, nihil rerum? Sit alias ad
                 maxime nulla.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius, commodi rem in quia non aliquam voluptatibus
                 beatae ad sed nemo atque hic delectus ipsa suscipit eaque fugit dolores architecto!
                </p>
                <div className="post-item">
                    <div className="post-thumb">
                        <img src="/src/assets/images/shop/01.jpg" alt="" />
                    </div>
                    <div className="post-content">
                        <ul className='lab-ul'>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quisquam, qui est minima nihil illum illo architecto sed consectetur accusamus, odit, nisi distinctio facere earum!</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quisquam, qui est minima nihil illum illo architecto sed consectetur accusamus, odit, nisi distinctio facere earum!</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quisquam, qui est minima nihil illum illo architecto sed consectetur accusamus, odit, nisi distinctio facere earum!</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quisquam, qui est minima nihil illum illo architecto sed consectetur accusamus, odit, nisi distinctio facere earum!</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quisquam, qui est minima nihil illum illo architecto sed consectetur accusamus, odit, nisi distinctio facere earum!</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quisquam, qui est minima nihil illum illo architecto sed consectetur accusamus, odit, nisi distinctio facere earum!</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quisquam, qui est minima nihil illum illo architecto sed consectetur accusamus, odit, nisi distinctio facere earum!</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quisquam, qui est minima nihil illum illo architecto sed consectetur accusamus, odit, nisi distinctio facere earum!</li>
                            <li> Nemo dolore eius quam vel?</li>
                        </ul>
                    </div>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia consectetur, magnam voluptates perspiciatis, eaque, quam neque ea voluptatibus reprehenderit itaque sit 
                animi nam architecto exercitationem. Animi eos ea autem aliquam?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo temporibus sed, obcaecati dolore commodi 
                cupiditate consequuntur porro facere quasi, nam accusamus blanditiis molestias, nihil rerum? Sit alias ad
                 maxime nulla.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius, commodi rem in quia non aliquam voluptatibus
                 beatae ad sed nemo atque hic delectus ipsa suscipit eaque fugit dolores architecto!
                </p>
            </div>
        </div>
    </>
  )
}

export default Review