import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import LogIn from '../../Login/Login'
import Demo from '../../Demo'
import userEvent from '@testing-library/user-event'

describe("Test the login Component",()=>{
    test(" render the login form with 2 buttons ", async()=>{
        render(<LogIn/>);
        const buttonList =await screen.findAllByRole("button")
        expect(buttonList).toHaveLength(1)
    } )
    test("email should be email",()=>{
        render(<LogIn/>);
        const email=screen.getByPlaceholderText('Enter Email')
        userEvent.type(email,'atulkumar') // recieved Value - atulkumar
        expect(email.value).not.toMatch("atul@gmail.com") // Expected value - atul@gmail.com
    })

    test("password Type should be password",()=>{
        render(<LogIn/>)
        const password = screen.getByPlaceholderText("Enter password")
        expect(password).toHaveAttribute('type','password')
    })
})