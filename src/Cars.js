import React from 'react';
import { resetControlledWarnings, Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import gti from './assets/cars/GTI.JPG';
import gti2 from './assets/cars/gti2.JPG';
import gti3 from './assets/cars/gti3.JPG';
import gti4 from './assets/cars/gti4.JPG';

import focus from './assets/cars/FordFocus.JPG';
import focus2 from './assets/cars/focus2.JPG';
import focus3 from './assets/cars/focus3.JPG';

import pt from './assets/cars/pt.jpeg'
import pt1 from './assets/cars/pt1.jpeg'
import pt2 from './assets/cars/pt2.jpeg'
import pt3 from './assets/cars/pt3.jpeg'

import spark from './assets/cars/spark.jpeg'
import spark1 from './assets/cars/spark1.jpeg'
import spark2 from './assets/cars/spark2.jpeg'
import spark3 from './assets/cars/spark3.jpeg'

import camry1 from './assets/cars/camry1.jpeg'
import camry2 from './assets/cars/camry2.jpeg'
import camry3 from './assets/cars/camry3.jpeg'
import camry4 from './assets/cars/camry4.jpeg'

import sonic1 from './assets/cars/sonic1.jpeg'
import sonic2 from './assets/cars/sonic2.jpeg'
import sonic3 from './assets/cars/sonic3.jpeg'
import sonic4 from './assets/cars/sonic4.jpeg'

import cts1 from './assets/cars/cts1.jpg'
import cts2 from './assets/cars/cts2.jpg'
import cts3 from './assets/cars/cts3.jpg'
import cts4 from './assets/cars/cts4.jpg'

import mkx1 from './assets/cars/mkx1.jpg'
import mkx2 from './assets/cars/mkx2.jpg'
import mkx3 from './assets/cars/mkx3.jpg'
import mkx4 from './assets/cars/mkx4.jpg'

import soul1 from './assets/cars/soul1.jpg'
import soul2 from './assets/cars/soul2.jpg'
import soul3 from './assets/cars/soul3.jpg'
import soul4 from './assets/cars/soul4.jpg'

import cooper1 from './assets/cars/cooper1.jpg'
import cooper2 from './assets/cars/cooper2.jpg'
import cooper3 from './assets/cars/cooper3.jpg'
import cooper4 from './assets/cars/cooper4.jpg'

import fiesta1 from './assets/cars/fiesta1.jpg'
import fiesta2 from './assets/cars/fiesta2.jpg'
import fiesta3 from './assets/cars/fiesta3.jpg'
import fiesta4 from './assets/cars/fiesta4.jpg'

import elantra1 from './assets/cars/elantra1.jpg'
import elantra2 from './assets/cars/elantra2.jpg'
import elantra3 from './assets/cars/elantra3.jpg'
import elantra4 from './assets/cars/elantra4.jpg'

import conv1 from './assets/cars/conv1.jpg'
import conv2 from './assets/cars/conv2.jpg'
import conv3 from './assets/cars/conv3.jpg'
import conv4 from './assets/cars/conv4.jpg'

class Cars extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2011 Cadillac CTS - $8,750</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>114K Miles, All Leather, Panoramic Sunroof, All Power, Heated and Cooled Seats, Excellent Tires.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={cts1} />
                    <img src={cts2} />
                    <img src={cts3} />
                    <img src={cts4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2002 Ford Mustang GT - $6,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>86K Miles, V8, Convertible, 5 Speed Manual, Leather, Alloy Wheels, Good Tires,</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={conv1} />
                    <img src={conv2} />
                    <img src={conv3} />
                    <img src={conv4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2014 Hyundai Elantra - $7,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>62K Miles, Leather, Front Wheel Drive, Bluetooth, Automatic, AC/Heat Good Tires.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={elantra1} />
                    <img src={elantra2} />
                    <img src={elantra3} />
                    <img src={elantra4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2009 Mini Cooper S - $7,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>78K Miles, Turbo Charged, All Power, Alloy Wheels, Panoramic Roof, Automatic, Leather. </Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={cooper1} />
                    <img src={cooper2} />
                    <img src={cooper3} />
                    <img src={cooper4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2011 Ford Fiesa - $5,450</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>79K Miles, 5 Speed Manual, Leather, New Oil Change, Nice and Clean.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={fiesta1} />
                    <img src={fiesta2} />
                    <img src={fiesta3} />
                    <img src={fiesta4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Kia Soul - $5,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>127K Miles, Front Wheel Drive, Automatic Transmission, Fresh Tune-Up, New Oil Change.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={soul1} />
                    <img src={soul2} />
                    <img src={soul3} />
                    <img src={soul4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2009 Lincoln MKX - $5650</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>175K Miles, Leather, Panoramic Sunroof, Navigation System, All Power, Alloy Wheels, Good Tires.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={mkx1} />
                    <img src={mkx2} />
                    <img src={mkx3} />
                    <img src={mkx4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Chevrolet Sonic - $5,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>91K Miles, All Power, AC/Heat, Automatic transmission, 4 Doors.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={sonic1} />
                    <img src={sonic2} />
                    <img src={sonic3} />
                    <img src={sonic4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2007 Toyota Camry - $6,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>85K Miles, All Power, 4 Cyl, Cold AC, Automatic Transmission, Front Wheel Drive, Alloy Wheels, Great Tires.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={camry1} />
                    <img src={camry2} />
                    <img src={camry3} />
                    <img src={camry4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2017 Chevy Spark</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>Automatic Transmission, Front Wheel Drive, Back Up Camera, Bluetooth, Cold AC/Heater.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={spark} />
                    <img src={spark1} />
                    <img src={spark2} />
                    <img src={spark3} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Chrysler PT Cruiser - $4,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>87K Miles, All Power, 4Cyl, Front Wheel Drive, Extra Clean In and Out, Nice dependable vehicle.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={pt2} />
                    <img src={pt1} />
                    <img src={pt} />
                    <img src={pt3} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2009 VW GTI - $6,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>70K Miles, Paddle Shifter, Turbo, Tartan Interior, Premium Rims, Extra clean in and out.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={gti} />
                    <img src={gti2} />
                    <img src={gti3} />
                    <img src={gti4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Ford Focus - $5,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>129K Miles, Good Tires, Extra Clean, Cold AC, Oil Change Completed, 4 Cyl.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={focus} />
                    <img src={focus2} />
                    <img src={focus3} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Cars;