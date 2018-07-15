import renderField from '../components/FormPages/renderFields';

export const requiredInput = [
    {
        "name": "name",
        "type": "text",
        "id": "name",
        "label": "Full Name *",
        "component": { renderField }
    },
    {
        "name": "email",
        "type": "email",
        "id": "email",
        "label": "Email *",
        "component": { renderField }
    },
    {
        "name": "reEnterEmail",
        "type": "email",
        "id": "email",
        "label": "Re-enter email *",
        "component": { renderField }
    },
    {
        "name": "phone",
        "type": "text",
        "id": "phone",
        "label": "Phone *",
        "component": { renderField }
    },
    {
        "name": "address",
        "type": "text",
        "id": "address",
        "label": "Address *",
        "component": { renderField }
    },
    {
        "name": "city",
        "type": "text",
        "id": "city",
        "label": "City *",
        "component": { renderField }
    },
    {
        "name": "country",
        "type": "text",
        "id": "country",
        "label": "Country/Region *",
        "component": { renderField }
    },
    {
        "name": "zip",
        "type": "text",
        "id": "zip",
        "label": "Zip/Postal code *",
        "component": { renderField }
    },
    {
        "name": "state",
        "type": "text",
        "id": "state",
        "label": "State",
        "component": { renderField }
    },
    {
        "name": "heardAboutUs",
        "type": "text",
        "id": "heardAboutUs",
        "label": "How did you hear about us",
        "component": { renderField }
    }
];