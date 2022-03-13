

export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
            
          </p>
        </div>
        <div className='row'>
          {/* {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'} */}

                <div className='col-md-4'>
                  <div className='service-desc'>
                    <img src={"../img/school-finding.png"} className="school-finding-icon"/>
                    <h3>{"School Finding"}</h3>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='service-desc'>
                    <img src={"../img/knowledge-sharing.png"} className="knowledge-sharing-icon"/>
                    <h3>{"Groups for Knowledge Sharing"}</h3>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='service-desc'>
                    <img src={"../img/tutoring.png"} className="tutoring-icon"/>
                    <h3>{"Tutoring"}</h3>
                  </div>
                </div>

        </div>
      </div>
    </div>
  )
}
