import {fireEvent, render, screen} from '@testing-library/react';
import Counter from './index';


describe('Counter Test', () => {
    let count;
    let increaseBtn;
    let decreaseBtn;

    beforeEach(() => {
        render(<Counter />);
        count = screen.getByText("0");
        increaseBtn = screen.getByText("Increase");
        decreaseBtn = screen.getByText("Decrease");
    });

    beforeAll(() => {
        console.log('En başta 1 kere çalışır');
    });

    afterEach(() => {
        console.log('Her testten önce çalışır');
    });

    afterAll(() => {
        console.log('En sonda 1 kere çalışır');
    });

    test('increase btn', () => {
        fireEvent.click(increaseBtn);
        expect(screen.getByText('1')).toBeInTheDocument();
    });

    test('decrease btn', () => {
        fireEvent.click(decreaseBtn);
        expect(screen.getByText('-1')).toBeInTheDocument();
    });
});