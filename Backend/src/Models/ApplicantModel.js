import { Schema, model } from 'mongoose';

// Define the schema for the applicant
const applicantSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        // required: true,
    },
    nic: {
        type: String,
        // required: true,
    },
    emailAddress: {
        type: String,
        // required: true,
    },
    date: {
        type: String,
        // required: true,
    },
    highSchoolName: {
        type: String,
        // required: true,
    },
    city: {
        type: String,
        // required: true,
    },
    fromDate: {
        type: String,
        // required: true,
    },
    toDate: {
        type: String,
        // required: true,
    },
    graduate: {
        type: String,
        // required: true,
    },
    graduateExplanation: {
        type: String,
        // required: true,
    },
    authorized: {
        type: String,
        // required: true,
    },
    convicted: {
        type: String,
        // required: true,
    },
    position: {
        type: String,
        // required: true,
    },
    Diploma: {
        type: String,
        // required: true,
    },
    cv: {
        type: String,
    },
});

// Create the Applicant model
const Applicant = model('Applicant', applicantSchema);

export default Applicant;
