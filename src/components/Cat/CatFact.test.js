import { render, screen, act } from '@testing-library/react';
import axios from 'axios';
import CatFact from './CatFact';
jest.mock('axios');

//---------------------------------------------------------------------------------------------------------------------

// belum sukses

const testText = "hai";
const errorText = "error";

//---------------------------------------------------------------------------------------------------------------------

const mockResponse = {
    data: {
        fact: testText
    }
}

//---------------------------------------------------------------------------------------------------------------------

const mockError = {
    data: null,
    message: errorText
}

//---------------------------------------------------------------------------------------------------------------------

test.skip('renders fact', async () => {

    await act(async () => {
        await axios.get.mockImplementationOnce(() => Promise.resolve(mockResponse));
        render(<CatFact />);
    });

    const textElement = await screen.getByText(testText);
    expect(textElement);
});

//---------------------------------------------------------------------------------------------------------------------

test.skip('handle error', async () => {

    await act(async () => {
        await axios.get.mockImplementationOnce(() => Promise.reject(mockError));
        render(<CatFact />);
    });
    
    const textElement = await screen.getByText(errorText);
    expect(textElement);
});