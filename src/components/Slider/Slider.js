import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Slider.css';

const imgUrls = [
"https://static.wixstatic.com/media/d9f074_47df0e8537d348a9866470f5e542db2d~mv2.png/v1/fill/w_900,h_500/Slider_3.png",
"https://static.wixstatic.com/media/d9f074_119fe07657624c2a88bb807849337abd~mv2.png/v1/fill/w_900,h_500/Slider_1.png",
"https://static.wixstatic.com/media/d9f074_bcb053e9c81f4858a2e0c18e7475e26e~mv2.png/v1/fill/w_900,h_500/Slider_4.png",
"https://static.wixstatic.com/media/d9f074_9792b3a4834d4e05ac23845151e2ba11~mv2.png/v1/fill/w_900,h_500/Slider_2.png", 
];

const articleUrls = [1,2,3,4];

const articleTitles = [
  "Who We Are",
  "What We Do",
  "Where We've Been",
  "Where We Are Going"
];


export default class Slider extends Component {
  constructor (props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      currentArticleIndex: 0,
      currentTitleIndex: 0,
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    const lastArticleIndex = articleUrls.length - 1;
    const { currentArticleIndex } = this.state;
    const shouldResetArticleIndex = currentArticleIndex === 0;
    const ArticleIndex =  shouldResetArticleIndex ? lastArticleIndex : currentArticleIndex - 1;

    const lastTitleIndex = articleTitles.length - 1;
    const { currentTitleIndex } = this.state;
    const shouldResetTitleIndex = currentTitleIndex === 0;
    const TitleIndex =  shouldResetTitleIndex ? lastTitleIndex : currentTitleIndex - 1;

    this.setState({
      currentImageIndex: index,
      currentArticleIndex: ArticleIndex,
      currentTitleIndex: TitleIndex,
    });
  }

  nextSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    const lastArticleIndex = articleUrls.length - 1;
    const { currentArticleIndex } = this.state;
    const shouldResetArticleIndex = currentArticleIndex === lastArticleIndex;
    const ArticleIndex =  shouldResetArticleIndex ? 0 : currentArticleIndex + 1;

    const lastTitleIndex = articleTitles.length - 1;
    const { currentTitleIndex } = this.state;
    const shouldResetTitleIndex = currentTitleIndex === lastTitleIndex;
    const TitleIndex =  shouldResetTitleIndex ? 0 : currentTitleIndex + 1;

    this.setState({
      currentImageIndex: index,
      currentArticleIndex: ArticleIndex,
      currentTitleIndex: TitleIndex,
    });
  }




  render () {
		return (
      <div className="Carousel_container">
			<div className="carousel">
			<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
            <Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
            <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
            <div className="slide-overlay">
            <ImageTitle title={ articleTitles[this.state.currentTitleIndex] } />
            </div>
			</div>
      </div>
		);
	}
}


const Arrow = ({ direction, clickFunction, glyph }) => (
	<div 
		className={ `slide-arrow ${direction}` } 
		onClick={ clickFunction }>
		{ glyph } 
	</div>
);

const ImageTitle = ({ title }) => (
  
  <div className="image-title">
    { title } 
  </div>
);

const ImageSlide = ({ url }) => {
	const styles = {
		backgroundImage: `url(${url})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
  }; 
  
  return (
		<div className="image-slide" style={styles}> </div>
	);
}