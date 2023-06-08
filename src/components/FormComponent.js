import React, { useState } from 'react';
import '../App.css'

function FormComponent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [newsLetter, setNewsLetter] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        }
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value)
    }

    const handleNewLetterChange = (e) => {
        setNewsLetter(e.target.checked)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted name", {
            name: name,
            email: email,
            gender: gender,
            newsLetter: newsLetter
        });

        setName('');
        setEmail('');
        setGender('');
        setNewsLetter(false);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="nameInput" className="form-label">
                    Name
                    <input
                        type="text"
                        id="nameInput"
                        name="name"
                        value={name}
                        required
                        onChange={handleInputChange}
                        className="form-input"
                    />
                </label>
                <br />
                <label htmlFor="emailInput" className="form-label">
                    Email
                    <input
                        type="email"
                        id="emailInput"
                        name="email"
                        value={email}
                        required
                        onChange={handleInputChange}
                        className="form-input"
                    />
                </label>
                <br />
                <label htmlFor="genderSelect" className="form-label">
                    Gender:
                    <select
                        id="genderSelect"
                        name="gender"
                        value={gender}
                        required
                        onChange={handleGenderChange}
                        className="form-select"
                    >
                        <option value="male">Select your Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <br />
                <label htmlFor="newsletterCheckbox" className="form-label">
                    Subscribe to newsletter:
                    <input
                        type="checkbox"
                        id="newsletterCheckbox"
                        checked={newsLetter}
                        onChange={handleNewLetterChange}
                        className="form-checkbox"
                    />
                </label>
                <br />
                <button type="submit" className="form-submit-btn">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default FormComponent;
