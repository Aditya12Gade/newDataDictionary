import '@testing-library/jest-dom'
import Minify from '../Index'
// import App from '../../../App'
import { screen , render , expect  } from '@testing-library/react';


test("minify tested" , () => {
    render(<Minify/>)
    const text  = screen.getByText(/Minify/i)
    expect(text).toBeInTheDocument();
})
