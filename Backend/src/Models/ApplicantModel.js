const mongoose = require("mongoose");
const shortid = require("shortid");

// Define the schema for the job applicant
const applicantSchema = new mongoose.Schema({
    referenceNumber: {
        type: String,
        default: shortid.generate, // Generate a unique reference number
        unique: true, // Ensure uniqueness
    },
    userId: {
        type: 'string',
    },
    name: {
        type: String,
        required: true, // Add required field for name
    },
    address: {
        type: String,
        // required: true, // Add required field for address
    },
    nic: {
        type: String,
        // required: true, // Add required field for nic
    },
    emailAddress: {
        type: String,
        // required: true, // Add required field for emailAddress
    },
    date: {
        type: Date,
        // required: true, // Add required field for date
    },
    applicantDetails: {
        highSchoolName: {
            type: String,
            // required: true, // Add required field for highSchoolName
        },
        city: {
            type: String,
            // required: true, // Add required field for city
        },
        fromDate: {
            type: Date,
            // required: true, // Add required field for fromDate
        },
        toDate: {
            type: Date,
            // required: true, // Add required field for toDate
        },
        graduate: {
            type: Boolean,
            // required: true, // Add required field for graduate
        },
        graduateExplanation: {
            type: String,
        },
        authorized: {
            type: Boolean,
            // required: true, // Add required field for authorized
        },
        convicted: {
            type: Boolean,
            // required: true, // Add required field for convicted
        },
    },
    position: {
        type: String,
        // required: true,
    },
    Diploma: {
        type: String,
    },
    cv: {
        type: String, // You can store the file path or reference here
    },
});

// Create a model for the job applicant using the schema
const ApplicantModel = mongoose.model("Applicant", applicantSchema);

module.exports = ApplicantModel;
