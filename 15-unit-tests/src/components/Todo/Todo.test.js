import {fireEvent, render, screen} from '@testing-library/react';
import Todo from './index';
import { userEvent } from '@testing-library/user-event';

describe('Todo Test', () => {
    let button, input;

    beforeEach(() => {
        render(<Todo />);
        button = screen.getByRole('button');
        input = screen.getByLabelText('Text')
    });

    it('Varsayılan olarak verilen 3 nesne render edilmeli', () => {
        const items = screen.getAllByText(/item/i);
        expect(items.length).toEqual(3);
    });

    it('Input ve button dökümanda bulunmalı', () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });

    it('Inputa değer girildiğinde state güncellenmeli yani listeye eklenmeli', () => {
        //inputu doldur
        const name = 'item 4'; 
        fireEvent.change(input, {target: {value: name}});

        //buttona tıkla
        fireEvent.click(button);

        //assertion (bekle)
        expect(screen.getByText(name)).toBeInTheDocument();
    });

});
