export const Team = (props) => {
  return (
    <div id='team' >
      {/* <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>For Parents</h2>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div> 
        </div>*/}

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className='section-title'>
              <h2>For Parents</h2>
              <p>Schoolopedia supports parents in making informed decisions about their child's education. Whether it's helping parents find the right school, advocate for better schools, or support their children's learning, we work to empower parents with the information they need to improve educational opportunities–in their homes and their communities. </p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/for-parents.jpg" className="img-responsive" alt="" />{" "}
          </div>
        </div>
      </div>

      
    </div>
  )
}
