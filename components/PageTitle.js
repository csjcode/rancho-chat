/**
 * 
 * // Tests

import React from 'react';
import renderer from 'react-test-renderer';
import PageTitle from './PageTitle';

describe('PageTitle component', () => {
    it('renders with correct styling', () => {
        const tree = renderer
            .create(<PageTitle text="Foo" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with correct font size', () => {
        const tree = renderer
            .create(<PageTitle text="Foo" />)
            .toJSON();
        expect(tree.children[0].props.style.fontSize).toBe(28);
    });

    it('renders with correct font color', () => {
        const tree = renderer
            .create(<PageTitle text="Foo" />)
            .toJSON();
        expect(tree.children[0].props.style.color).toBe(colors.textColor);
    });

    it('renders with correct font family', () => {
        const tree = renderer
            .create(<PageTitle text="Foo" />)
            .toJSON();
        expect(tree.children[0].props.style.fontFamily).toBe('bold');
    });
});

// This set of tests checks the PageTitle component to make sure that it is rendered correctly with the correct styling, font size, font color, and font family. The first test uses a snapshot test to check the overall styling, while the other three tests check for the specific properties of each style attribute.

 */
