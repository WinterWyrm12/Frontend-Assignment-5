import {fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from '../ProductCard';
import { vi } from 'vitest';


// render router
const renderWithRouter = (component) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
};

// test
describe('Product card displays without error', () =>{
    
    // fake product - to test actual product data
    const fakeProduct = {
        id: 1,
        name: "Grapes",
        price: 2.99,
        description: "bunch of grapes",
        image: "test.jpg"
    };

    test("displays product information correctly without error", () =>{
        renderWithRouter(
            <ProductCard 
            product = {fakeProduct}
            addToCart = {() => {}}
            />
        );
        // expect image, heading, price, and add to cart button
        expect(screen.getByRole('img', {name: /Grapes/i})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name:/Grapes/i})).toBeInTheDocument();
        expect(screen.getByText('$2.99')).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /Add to Cart/i})).toBeInTheDocument();
    });

    test("add to cart calls the proper function", () => {
        const mockCart = vi.fn();
        renderWithRouter(
            <ProductCard
            product={fakeProduct}
            addToCart={mockCart}
            />
        );
        // simulate click
        const button = screen.getByRole('button', {name: /Add to Cart/i});
        fireEvent.click(button);
        expect(mockCart).toHaveBeenCalledTimes(1);
        expect(mockCart).toHaveBeenCalledWith(fakeProduct);
    });
});