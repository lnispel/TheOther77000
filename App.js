/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  AsyncStorage,
  Image,
  Animated,
  Dimensions
} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export default class App extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      dark: true
    }
  }

  componentWillMount(){
      this.initialAnimation = new Animated.Value(-250);
      this.animatedValue = new Animated.Value(-350);
      this.animatedValue2 = new Animated.Value(750);
      this.closingAnimation = new Animated.Value(-1450);
    }

  componentDidMount(){
    this.runAnimation();
  }

  runAnimation() {
    this.animatedValue.setValue(-350);
    this.initialAnimation.setValue(-50);
    this.animatedValue2.setValue(750);
    this.closingAnimation.setValue(-750)
    Animated.timing(this.animatedValue, {
      toValue: 350,
      duration: 5000,
    }).start();
    Animated.timing(this.initialAnimation, {
      toValue: 250,
      duration: 10000,
    }).start()
    Animated.timing(this.animatedValue2, {
      toValue: -350,
      duration: 20000,
    }).start();
    Animated.timing(this.closingAnimation, {
      toValue: 0,
      duration: 20000,
    }).start(() => this.runAnimation());
  }
  render() {
    const animatedStyle = { marginLeft: this.animatedValue, marginRight: - this.animatedValue * 2 };
    const initialAnimation = { marginLeft: this.initialAnimation, marginRight: - this.initialAnimation * 2 };
    const animatedStyle2 = { marginLeft: this.animatedValue2, marginRight: - this.animatedValue2 * 2 };
    const closingAnimation = { marginLeft: this.closingAnimation, marginRight: - this.closingAnimation };

    var images = [],
    imgWidth = 7,
    winWidth = Dimensions.get('window').width;

    return (
      <Landing>
        {this.state.dark == true ?
          <LinearGradient colors={['#000', '#515151']} >
              {this.state.dark == true ?
                <View>
                  <Stars source={require('./components/media/stars.png')}></Stars>
                 </View>
                : null
              }
            <Note>*There are 77,358 sq. miles in Nebraska. The urban centers in the state account for roughly only 350 sq. miles of this. In that 350 sq. miles lives over two thirds of the population but this is not about those 350 sq. miles.</Note>
            <SubTitle>
              This is about
            </SubTitle>
            <Title>
              The Other 77000
            </Title>
            <Animated.Image source={require('./components/media/twinkling.png')} style={
              [
                initialAnimation,
                {
                  position: 'absolute',
                  height: 700,
                  width: 700,
                  zIndex: 0

                }
              ]
            }/>
            <Animated.Image source={require('./components/media/twinkling.png')} style={
              [
                animatedStyle,
                {
                  position: 'absolute',
                  height: 700,
                  width: 700,
                  zIndex: 0
                }
              ]
            }/>
            <Animated.Image source={require('./components/media/twinkling.png')} style={
              [
                animatedStyle2,
                {
                  position: 'absolute',
                  height: 700,
                  width: 700,
                  zIndex: 0,
                  opacity: .8,
                }
              ]
            }/>
            <Animated.Image source={require('./components/media/twinkling.png')} style={
              [
                closingAnimation,
                {
                  position: 'absolute',
                  height: 700,
                  width: 800,
                  zIndex: 0,
                  opacity: .8,
                }
              ]
            }/>

            <Logo
              source={require('./components/media/TheOther77000NoText.png')}
            />
            <Story>
              The Other 77,000 began in hopes of bringing light to the decomposition and the collapse of rural communities in the Great Plains and the US as a whole as cities and population centers grow in isolated parts of the country.
              The idea was created from a collision between city dwellers and farmers in the town of Gretna outside the Omaha, Ne. Metro area. Small enough to be comfortable for country folk but close enough to the city to have plenty of urbanites blaze through.
              This then spurred the question of how two very different cultures could co-exist yet be so different and isolated. From this came the investigation into the prosperity of metro ares and the depopulaiton of small towns and the rural country side.
            </Story>
            <ImageHolder>
              <Nebraska source={require('./components/media/Nebraska.png')}/>
            </ImageHolder>
            <Story>
            Populations in rural communites peaked in The Nineteen-Twenties and since then they have fallen by 75% in some places, 50% in most. This has led to crumbling infrustructure, abondoned homes, many once beautiful homesteads owned by prosperous families who then got bought out by bigger and bigger farms. Bigger farms, more efficent farming made oppertunites for growth small and job growth isolated to the cities.
            This campaign was started to bring awareness to the issues facing these communities. The issues they face each day are largely unseen by the majority of Nebraskans since most of them never leave the Lincoln-Omaha Metro area. The greatest thing a city has to offer is that everything you need is within a short drive. The biggest weakness of a city is the lack of awarness of what life is like outside of their dense urban bubbles.
            A blog was started to document The Other 77,000 as well as an instagram, twitter account, facebook and an email box in order to take advantage of the readily avaliable services of social media. This project's goal was to establish an on-going operation and to continue growth and awareness. However, since the goal of the project was achieved the operation will not continue.
            </Story>
            <ImageHolder>
              <Mountains source={require('./components/media/mountains.png')}/>
            </ImageHolder>
          </LinearGradient>
          :
          <LinearGradient colors={['#bb2025', '#fff']} >
            <Title>
              The Other 77000
            </Title>
            <LogoHolder onPress={() => this.setState({ dark: true })}>
              <SmallLogo source={require('./components/media/iconlogo.png')}/>
            </LogoHolder>

            <ToDoAction>
              Map Locations
            </ToDoAction>
            <ToDoAction>
              Images
            </ToDoAction>
            <ToDoAction>
              Notes
            </ToDoAction>
            <ToDoAction>
              Archives
            </ToDoAction>
          </LinearGradient>
        }
      </Landing>
    );
  }
}

const Landing = styled.ScrollView`
    height: 100%;
`;

const Stars = styled.ImageBackground`
   z-index:-1;
   position:absolute;
   top:0;
   left:0;
   right:0;
   bottom:0;
   width: 100%;
   height: 500px;
`;

const Twinkling = styled.Image`
  background: #1592e6 repeat top center;
  z-index:1;

  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:20px;
  height:20px;
`;

const LogoHolder = styled.Text`
  width: 100%;
  text-align: center;
  background: #33000000;
`;

const Logo = styled.Image`
  height: 195px;
  width: 200px;
  display: flex;
  align-self: center;
  position: relative;
  margin-top: 40px;
  z-index: 10;
`;

const SmallLogo = styled.Image`
  width: 40px;
  height: 40px;
`;

const Note = styled.Text`
  margin: 20px;
  padding: 10px;
  font-style: italic;
  font-weight: 400;
  color: #727272;
  text-align: center;
  margin-top: 40px;
  font-size: 10px;
  margin-bottom: 0px;
  font-family: futura;
  background-color: transparent;
  position: relative;
  z-index: 1;
`;

const Story = styled.Text `
  margin: 20px;
  padding: 10px;
  font-weight: 400;
  color: #CFCFCE;
  text-align: center;
  margin-top: 90px;
  font-size: 20px;
  margin-bottom: 0px;
  font-family: futura;
  background-color: transparent;
`;

const SubTitle = styled.Text`
  margin: 3px;
  padding: 1px;
  font-style: italic;
  font-size: 30px;
  font-weight: 500;
  color: #727272;
  text-align: center;
  font-family: futura;
  background-color: transparent;
  position: relative;
  z-index: 1;
`;

const Title = styled.Text`
  margin: 20px;
  padding: 1px;
  font-style: italic;
  font-size: 45px;
  font-weight: 500;
  color: #CFCFCE;
  text-align: center;
  font-family: Futura-CondensedMedium;
  background-color: transparent;
  position: relative;
  z-index: 1;
`;

const ToDoAction = styled.Text`
  background-color: #efefef;
  margin: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #727272
  padding: 10px;
  border: 2px solid #bb2025
`;

const Nebraska = styled.Image `
    width: 300px;
    height: 150px;
    margin-top: 55px;
`;

const Mountains = styled.Image`
  width: 375px;
  height: 100px;
  display:flex;
  position: relative;
  margin-top:5px
`;

const ImageHolder = styled.Text`
  width: 100%;
  background: #33000000;
  display: flex;
  text-align: center;
`;
