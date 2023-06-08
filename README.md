# ReactJS Form

This is a simple ReactJS form example that demonstrates form validation and form submission.

## Forms in ReactJS

In ReactJS, forms are created using the `<form>` element and controlled components. Controlled components allow you to manage form data through state, making it easier to handle form input changes and validation.

To create a form in ReactJS:

1. Define a component to represent the form. This component will contain the form elements and handle form submission.

2. Initialize state variables using the `useState` hook to store form data.

3. Set up event handlers for form input changes. These event handlers will update the state variables with the new values.

4. Implement form validation logic. You can use conditional rendering and validation rules to ensure that the form data is valid.

5. Handle form submission by preventing the default form submission behavior and processing the form data.

## Installation

1. Clone the repository:
    git clone https://github.com/Shakeelkhuhro/form-in-reactjs

2. Navigate to the project directory:
    cd forms

3. Install the dependencies:
    npm install


## Usage

1. Start the development server:
    npm start

2. Open your browser and navigate to 
    (http://localhost:3000).

3. Fill in the form fields with valid information.

4. Click the **Submit** button to submit the form.

## Features

- Name field validation: The **Name** field is required.
- Email field validation: The **Email** field is required and must be a valid email address.
- Gender field validation: The **Gender** field is required and must be selected.
- Newsletter subscription: The **Subscribe to newsletter** checkbox allows the user to subscribe to the newsletter.

## Dependencies

- React
- React DOM
- React Hook Form
- CSS (provided in App.css)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.