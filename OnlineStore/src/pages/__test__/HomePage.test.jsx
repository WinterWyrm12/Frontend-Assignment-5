import {render, screen } from '@testing-library/react';
import HomePage from '../HomePage';


// test
describe('HomePage functions properly', () =>{
    test("renders without crashing", () =>{
        render(
            <HomePage 
            title="OnlineStore"
            subtitle="The best produce in the market!"
            call="Shop Now"
            />
        );
        expect(screen.getByText('OnlineStore')).toBeInTheDocument();
    });
});