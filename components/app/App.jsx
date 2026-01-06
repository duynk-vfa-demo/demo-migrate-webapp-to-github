import React from 'react';
import { Framework7App, Views, View, Pages } from 'framework7-react';
import { routes } from './Routes.jsx';
import Top from './top/Top.jsx';

let framework7;
export const getFramework7 = () => framework7;

class App extends React.Component {
    render() {
        return (
            <Framework7App themeType="ios" routes={routes} onFramework7Init={f7 => { framework7 = f7; }}>
                <Views>
                    <View main>
                        <Pages>
                            <Top />
                        </Pages>
                    </View>
                </Views>
            </Framework7App>
        );
    }
}

export default App;
