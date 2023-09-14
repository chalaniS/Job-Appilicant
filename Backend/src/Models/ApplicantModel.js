const mongoose = require('mongoose');

// Define the schema for the applicant
const applicantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    nic: {
        type: String,
        required: true,
    },
    emailAddress: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    applicantDetails: {
        highSchoolName: String,
        city: String,
        fromDate: Date,
        toDate: Date,
        graduate: Boolean,
        graduateExplanation: String,
        authorized: Boolean,
        convicted: Boolean,
    },
    position: String,
    Diploma: String,
    cv: {
        type: String, // You can use String to store the file path or other information about the uploaded CV
    },
});

// Create the Applicant model
const Applicant = mongoose.model('Applicant', applicantSchema);

module.exports = Applicant;
