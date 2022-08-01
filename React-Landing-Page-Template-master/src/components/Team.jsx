export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>미래 가치</h2>
          
        </div>
        <div id='row' >
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4 '>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />

                    <div className='caption'>
                      <h4>{d.name}</h4>
                    </div>
                    
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
