import React from 'react'
import './About.css'

const About = () => {


  return (
    <section className='about mt-4 pt-5 w-100'>
        <div className="main p-5 w-100">
            <div className="title text-center py-5 px-1 mt-4">
                <h4 className='text-info'>OUR MISSION</h4>
                <p>NO MEN SHOULD BE WEAK, <br />
                 WORKING OUT IMPROVES YOUR MIND,BODY & SPIRIT</p>
            </div>
        </div>
        {/* story */}
        <div className="story">
            <div className="row gap-5 mx-5 d-flex flex-wrap justify-content-center">
                <div className="col-lg-5 col py-5 mt-5 text-white">
                    <h3 className='ms-3 fw-bolder text-info '>Our origin story</h3>
                    <p className='pt-3'>we help our customers achieve limitless potential with the tools, inspiration, and motivation they need to fuel their routines, crush goals, and breakthrough unchartered territory that leads to happier, healthier and more fulfilling lives.
                    <br /><br />
                    Working with the best-of-the-best, well experienced the power of interconnected fitness, nutrition, and mental wellness, and became determined to make this level of education and transformative wellness available to more people around the world.
                    <br /><br />
                    Whether you come to service to start or end your day, or for something in-between, your goals are our mission. Together, making health and wellness available to all.</p>
                </div>
                
                <div className="col-lg-5 col2 text-center d-flex align-items-center justify-content-center">
                    {/* <img src="/images/story.jpg" alt="origin"  className='my-5 py-5 ' width={300} /> */}
                    <img src="/images/story.jpg" alt="origin" width={300} className='py-5 my-5'/>
                </div>
            </div>
        </div>
        {/* services */}
        <div className="row service d-flex justify-content-center">
            <div className="col-lg-5 d-flex justify-content-center align-items-center" style={{backgroundColor:'#777'}}>
                <div className='m-5'>
                    <img src="/images/trainer.jpg" alt="trainer" className='shadow rounded' width={500} height={500} />
                </div>
            </div>
            <div className="col-lg-5 d-flex justify-content-center align-items-center bg-white">
                <div className='m-5 text-center p-5'>
                    <h2 className='fw-bold'>PERSONALIZED WELLNESS COACHING</h2>
                    <p>We’re your partner through your well-being journey, delivering daily advice to fuel your movement, meals, and mind. Our support, guidance and motivation is here to power your routine, help you navigate choices and promote lifelong change.</p>
                </div>
            </div>
        </div>
        <div className="row d-flex service justify-content-center">
            <div className="col-lg-5 d-flex justify-content-center align-items-center bg-white">
                <div className='m-5 text-center p-5'>
                    <h2 className='fw-bold'>TOOLS TO POWER ROUTINE</h2>
                    <p>Our specially designed physical equipment will help you crush your workouts. The full equipment line of fitness accessories, weights, home gym equipment and more will be available in September 2023.</p>
                </div>
            </div>
            <div className="col-lg-5 d-flex justify-content-center align-items-center" style={{backgroundColor:'#777'}}>
                <div className='m-5'>
                    <img  src="/images/equipment.jpg" alt="trainer" className='shadow rounded' width={500} height={500} />
                </div>
            </div>
        </div>

        {/* transformation */}
        <div className="transformation mt-5">
            <div className="title p-4 text-center">
                <h1 className='fw-bold text-white'>Customer Reviews</h1>
            </div>
        </div>
    </section>
  )
}

export default About