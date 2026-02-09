import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import CartItem from "../CartItem";

const mockDelete = vi.fn();
describe('cartItem displays properly', () => {
    const fakeProduct = {
        id: 1,
        name: "Grapes",
        price: 2.99,
        description: "bunch of grapes",
        image: "test.jpg"
    };

    test('renders and displays with no issue', () => {
        render(<CartItem 
            product={fakeProduct}
            onDeleteProduct={mockDelete}
            />
        );
        expect(screen.getByRole('heading', {name: /Grapes/i})).toBeInTheDocument();
        expect(screen.getByText('$2.99')).toBeInTheDocument();
    });

    test('delete button clicked with no issue', () => {
        render(<CartItem
            product={fakeProduct}
            onDeleteProduct={mockDelete}
            />
        );
        const delButton = screen.getByRole('button', {name: /Remove from Cart/i});
        fireEvent.click(delButton);
        
        expect(mockDelete).toHaveBeenCalledTimes(1);
        expect(mockDelete).toHaveBeenCalledWith(fakeProduct.id)
    });
});