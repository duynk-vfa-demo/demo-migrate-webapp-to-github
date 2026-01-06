import React from 'react';
import { Page, Navbar, ContentBlock } from 'framework7-react';

class Top extends React.Component {
    render() {
        return (
            <Page id="top">
                <Navbar title="Top" />
                <ContentBlock>Sample screen</ContentBlock>
            </Page>
        );
    }
}

export default Top;
