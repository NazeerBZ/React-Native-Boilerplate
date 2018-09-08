import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions } from 'react-native';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

const images = [
  require('../../assets/images/highlights.png'),
  require('../../assets/images/highlights.png'),
  require('../../assets/images/highlights.png'),
];

class Slider extends React.Component {
  renderPage(image, index) {
    return (
      <Image key={index} source={image} style={styles.bannerStyle} resizeMode={'contain'}/>
    );
  }
  // style={{ width: BannerWidth, height: BannerHeight }}
  render() {
    return (
      <View style={styles.container}>
        <Carousel
          autoplay
          autoplayTimeout={5000}
          loop
          index={0}
          pageSize={BannerWidth}>
          {images.map((image, index) => this.renderPage(image, index))}
        </Carousel>
      </View>
    );
  }
}
export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center', 
    flexDirection: 'row',
    // alignItems: 'stretch',
  },
  bannerStyle: {
    flex: 1,
    width: null,
    height: null
  }
});