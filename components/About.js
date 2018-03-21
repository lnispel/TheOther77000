import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  AsyncStorage,
  Image
} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export default class About extends Component<{}> {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Landing>
        <LinearGradient colors={['#000', '#515151']} >
            {this.state.dark == true ?
              <View>
                <Stars source={require('./media/stars.png')}></Stars>
                <Twinkling source={require('./media/twinkling.png')}></Twinkling>
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
          <LogoHolder onPress={() => this.setState({ dark: false })}>
            <Logo source={require('./media/TheOther77000NoTextPressed.png')} />
          </LogoHolder>

          <Story>
            The Other 77,000 began in hopes of bringing light to the decomposition and the collapse of rural communities in the Great Plains and the US as a whole as cities and population centers grow in isolated parts of the country.
            The idea was created from a collision between city dwellers and farmers in the town of Gretna outside the Omaha, Ne. Metro area. Small enough to be comfortable for country folk but close enough to the city to have plenty of urbanites blaze through.
            This then spurred the question of how two very different cultures could co-exist yet be so different and isolated. From this came the investigation into the prosperity of metro ares and the depopulaiton of small towns and the rural country side.
          </Story>
          <ImageHolder>
            <Nebraska source={require('./media/Nebraska.png')}/>
          </ImageHolder>
          <Story>
          Populations in rural communites peaked in The Nineteen-Twenties and since then they have fallen by 75% in some places, 50% in most. This has led to crumbling infrustructure, abondoned homes, many once beautiful homesteads owned by prosperous families who then got bought out by bigger and bigger farms. Bigger farms, more efficent farming made oppertunites for growth small and job growth isolated to the cities.
          This campaign was started to bring awareness to the issues facing these communities. The issues they face each day are largely unseen by the majority of Nebraskans since most of them never leave the Lincoln-Omaha Metro area. The greatest thing a city has to offer is that everything you need is within a short drive. The biggest weakness of a city is the lack of awarness of what life is like outside of their dense urban bubbles.
          A blog was started to document The Other 77,000 as well as an instagram, twitter account, facebook and an email box in order to take advantage of the readily avaliable services of social media. This project's goal was to establish an on-going operation and to continue growth and awareness. However, since the goal of the project was achieved the operation will not continue.
          </Story>
          <ImageHolder>
            <Mountains source={require('./media/mountains.png')}/>
          </ImageHolder>
        </LinearGradient>
      </Landing>
    );
  }
}

const Stars = styled.ImageBackground`
   z-index:0;
   position:absolute;
   top:0;
   left:0;
   right:0;
   bottom:0;
   width: 100%;
   height: 500px;
`;

const Twinkling = styled.ImageBackground`
  background: #33000000 repeat top center;
  z-index:1;

  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:0%;
  height:0%;
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
`;

const Landing = styled.ScrollView`
    height: 100%;
`;

const LogoHolder = styled.Text`
  width: 100%;
  text-align: center;
  background: #33000000;
`;

const SmallLogo = styled.Image`
  width: 40px;
  height: 40px;
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
