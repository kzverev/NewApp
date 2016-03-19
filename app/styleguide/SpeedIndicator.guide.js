import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import { SpeedIndicator } from 'components/SpeedIndicator';

export default class SpeedIndicatorGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="SpeedIndicator - low speed (green)">
                    <SpeedIndicator speed={25} />
                </SGSection>

                <SGSection title="SpeedIndicator - medium speed (yellow)">
                    <SpeedIndicator speed={50} />
                </SGSection>

                <SGSection title="SpeedIndicator - high speed (red)">
                    <SpeedIndicator speed={80} />
                </SGSection>

                <SGSection title="SpeedIndicator - default speed (green)">
                    <SpeedIndicator />
                </SGSection>

            </SGPage>
        );
    }
}
