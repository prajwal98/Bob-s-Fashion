import React from 'react'
import './landingpage.styles.scss';
function LandingPage() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide mb-5" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner d-block">
    <div className="carousel-item active">
      <img src="http://wallpapers4screen.com/Uploads/29-1-2016/22305/arthur-sales-irina-shayk-pair-jeans-model.jpg" className="d-block w-100 h-60" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Clothing Slogans </h5>
        <p>Uniquely catering to your every need. Global warming ready. We're unique no matter how you put it. Form follows you. ...</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://s2.best-wallpaper.net/wallpaper/3840x2160/1907/Fashion-girl-red-skirt-man-yacht-wine_3840x2160.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Best Fashion 2020</h5>
        <p>Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://image.freepik.com/fotos-gratis/jovem-excitada-segurando-sacolas-de-compras_74952-253.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Free Shiping only for you</h5>
        <p>Last Chance! Free shipping on all orders ends today.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>New Sneakers collections 2020</h5>
        <p>Give your feet the beauty treatment that only brand new shoes can give.</p>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    )
}

export default LandingPage
