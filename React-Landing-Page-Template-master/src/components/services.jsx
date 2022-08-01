import { Image } from "./image";

export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>

          <h2>사내 문화 키워드 </h2>
          <p>
          </p>
        </div>
        
        <div className='row' >
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text} </p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
