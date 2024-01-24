import './PortfolioCart.scss'

const PortfolioCart = () => {
  return (
    <div className='PortfolioCart'>
        <div class="col-sm-6 col-xs-6 col-md-3 mb-4 text-center col-sm-4">
				<div class="img-wrap">
					<a data-fancybox="gallery" data-src="/assets/images/project-gallery/1.jpg" data-caption="">
						<img src="./assets/portfolio/1.jpg"/>
						<div class="gallery-overlay">
							<h3>Vaemalaa</h3>
							<i class="fa fa-plus"></i>
						</div>
					</a>
				</div>
			</div>
    </div>
  )
}

export default PortfolioCart