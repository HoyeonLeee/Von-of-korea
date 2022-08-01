export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about02.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>회사 소개</h2>
              <p>{props.data ? props.data.paragraph1 : "loading..."}</p>
              
    
              <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
              
              <p>{props.data ? props.data.paragraph3 : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
