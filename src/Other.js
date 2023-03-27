import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import ninaj1 from './assets/trucks/ninja1.jpg'
import ninja2 from './assets/trucks/ninja2.jpg'
import ninja3 from './assets/trucks/ninja3.jpg'
import ninja4 from './assets/trucks/ninja4.jpg'

class Other extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'> 2019 Kawasaki Ninja 650 - $Call</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>2800 Miles, New oil change and tune up. </Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={ninaj1} />
                    <img src={ninja2} />
                    <img src={ninja3} />
                    <img src={ninja4} />
                </Carousel>
            </Stack>
            </Stack>
       );
    }
  };

  export default Other;
