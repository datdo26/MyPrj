// @ts-ignore
import React from 'react';
import Swiper from 'react-native-swiper';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';

const widthScreen = Dimensions.get('window').width;
const heightImgBanner = 240;

type IDataBanner = {
  id: string;
  img: ImageSourcePropType;
};

type Props = {
  dataBanner: IDataBanner[];
  autoplay: boolean;
};

const Banner = ({autoplay = true, dataBanner}: Props) => {
  return (
    <View style={styles.containerBanner}>
      <Swiper
        showsHorizontalScrollIndicator={false}
        autoplay={true}
        autoplayTimeout={5}
        loop
        paginationStyle={styles.paginationStyle}>
        {dataBanner.map((item, index) => {
          return (
            <View style={styles.pageBanner} key={index}>
              <Image source={item.img} style={styles.imgBanner} />
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  containerBanner: {
    height: heightImgBanner,
  },
  imgBanner: {
    width: widthScreen,
    height: heightImgBanner,
  },
  pageBanner: {
    width: widthScreen,
  },
  paginationStyle: {
    bottom: 0,
  },
});
