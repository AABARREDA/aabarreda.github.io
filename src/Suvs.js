import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import tahoe from './assets/trucks/ChevyTahoe2008.jpg';
import tahoe2 from './assets/trucks/tahoe2.JPG';
import tahoe3 from './assets/trucks/tahoe3.JPG';

import tucson1 from './assets/trucks/tucson1.jpeg';
import tucson2 from './assets/trucks/tucson2.jpeg';
import tucson3 from './assets/trucks/tucson3.jpeg';
import tucson4 from './assets/trucks/tucson4.jpeg';

import flex from './assets/cars/flex.jpeg';
import flex2 from './assets/cars/flex2.jpeg';
import flex3 from './assets/cars/flex3.jpeg';
import flex4 from './assets/cars/flex4.jpeg';

import MM1 from './assets/trucks/MM1.jpeg';
import MM2 from './assets/trucks/MM2.jpeg';
import MM3 from './assets/trucks/MM3.jpeg';
import MM4 from './assets/trucks/MM4.jpeg';

import hhr1 from './assets/trucks/hhr1.jpeg';
import hhr2 from './assets/trucks/hhr2.jpeg';
import hhr3 from './assets/trucks/hhr3.jpeg';
import hhr4 from './assets/trucks/hhr4.jpeg';

import gmct1 from './assets/trucks/gmct1.jpeg';
import gmct2 from './assets/trucks/gmct2.jpeg';
import gmct3 from './assets/trucks/gmct3.jpeg';
import gmct4 from './assets/trucks/gmct4.jpeg';

import expedition from './assets/cars/expedition.jpeg';

import rede1 from './assets/cars/rede1.jpeg';
import rede2 from './assets/cars/rede2.jpeg';
import rede3 from './assets/cars/rede3.jpeg';
import rede4 from './assets/cars/rede4.jpeg';

import blacke1 from './assets/cars/blacke1.jpeg';
import blacke2 from './assets/cars/blacke2.jpeg';
import blacke3 from './assets/cars/blacke3.jpeg';
import blacke4 from './assets/cars/blacke4.jpeg';

class Suvs extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2005 Ford Expedition XLT- $5,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>4X4, 3 Seated Row, Towing PKG, Leather, Sunroof, Alloy Wheels, w/good tires, fresh tune up.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={expedition} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2014 Chevrolet Equinox - $8,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>120K Miles,  All Wheel Drive, All Power, Leather, Alloy wheels w/good tires.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={blacke1} />
                    <img src={blacke2} />
                    <img src={blacke3} />
                    <img src={blacke4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Chevrolet Equinox - $8,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>63K Miles, Front Wheel Drive, All Power, Leather, Extra Clean in and out.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={rede1} />
                    <img src={rede2} />
                    <img src={rede3} />
                    <img src={rede4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2017 Hyundai Tucson - $15,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>35K Miles, All Power, Alloy Wheels, Good Tires, Eco Boost, Turbo 1.6 Engine, Back Up Camera, Extra Clean.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={tucson1} />
                    <img src={tucson2} />
                    <img src={tucson3} />
                    <img src={tucson4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'></Text>2013 GMC Terrain - $9,500</Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>125K Miles, Auto Transmission, Back Up Camera, 4 Cyl., Alloy Wheels, Good Tires, All Power.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={gmct1} />
                    <img src={gmct2} />
                    <img src={gmct3} />
                    <img src={gmct4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'></Text>2008 Chevrolet HHR - 3,850</Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>135K Miles, Heater, Automatic Transmission, All Power, Alloy Wheels.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={hhr1} />
                    <img src={hhr2} />
                    <img src={hhr3} />
                    <img src={hhr4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'></Text>2008 Mercury Mountaineer - $ 4,950</Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>124K Miles, Leather, Sunroof, Towing PKG, Oil Change.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={MM1} />
                    <img src={MM2} />
                    <img src={MM3} />
                    <img src={MM4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Ford Flex - $9,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>133K Miles, Bluetooth, New Oil Change, All Power, 3rd Seat, Allow Wheel w/great tires, X-Clean in and out.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={flex} />
                    <img src={flex2} />
                    <img src={flex3} />
                    <img src={flex4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2008 Chevy Tahoe - $10,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>121K Miles, All Power, Third Row Seat, Cold AC, Alloy Wheels, Good Tires, Flex Fuel.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={tahoe} />
                    <img src={tahoe2} />
                    <img src={tahoe3} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Suvs;