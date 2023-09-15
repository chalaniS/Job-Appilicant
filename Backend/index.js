import { connect } from "mongoose";
import express, { json } from "express";
import cors from "cors";

// Define the ApplicantModel (replace with your actual model)

import ApplicantModel from "./src/Models/ApplicantModel.js";


const app = express();
app.use(cors());
app.use(json());

// const corsOptions = {
//     origin: 'http://localhost:3000/',
// };

// app.use(cors(corsOptions));


// Connect to MongoDB
connect("mongodb+srv://chalasaumya:s1YVDLylS6AJi0um@cluster0.qnwo5bb.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB: ", err);
    });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});



//connect with frontend
app.get("/getData", (req, res) => {
    res.send("Hello I'm from backend");
});




app.post("/applicant", (req, res) => {

    const userId = "45821463#23669545";
    const name = req.body.name
    const address = req.body.address
    const nic = req.body.nic
    const emailAddress = req.body.emailAddress
    const date = req.body.date
    const highSchoolName = req.body.highSchoolName
    const city = req.body.city
    const fromDate = req.body.fromDate
    const toDate = req.body.toDate
    const graduate = req.body.graduate
    const graduateExplanation = req.body.graduateExplanation
    const authorized = req.body.authorized
    const convicted = req.body.convicted
    const position = req.body.position
    const Diploma = req.body.Diploma
    const cv = req.body.cv

    console.log(name + address + nic)

    const applicant = new ApplicantModel({
        userId: userId,
        name: name,
        address: address,
        nic: nic,
        emailAddress: emailAddress,
        date: date,
        highSchoolName: highSchoolName,
        city: city,
        fromDate: fromDate,
        toDate: toDate,
        graduate: graduate,
        graduateExplanation: graduateExplanation,
        authorized: authorized,
        convicted: convicted,
        position: position,
        Diploma: Diploma,
        cv: cv,
    });

    try {
        applicant.save();
        console.log("Applicant created successfully");
        res.status(201).json(applicant);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating applicant");
    }


});



// Read  applications for the user
app.get("/applicants", async (req, res) => {

    const userId = "45821463#23669545";

    try {
        const applicants = await ApplicantModel.find({ userId });
        console.log("'Data read successfully'");
        res.status(200).json(applicants);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while retrieving data');
    }

});



// Get all applicants for HR
app.get("/applicants", async (req, res) => {
    try {
        const applicants = await ApplicantModel.find();
        res.status(200).json(applicants);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving applicants");
    }
});

// Get an applicant by ID
app.get("/applicants/:id", async (req, res) => {
    const applicantId = req.params.id;
    try {
        const applicant = await ApplicantModel.findById(applicantId);
        if (!applicant) {
            return res.status(404).send("Applicant not found");
        }
        res.status(200).json(applicant);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving applicant");
    }
});

// Update an applicant by ID
app.put("/applicants/:id", async (req, res) => {
    const applicantId = req.params.id;
    try {
        const updatedApplicant = await ApplicantModel.findByIdAndUpdate(
            applicantId,
            req.body,
            { new: true }
        );
        if (!updatedApplicant) {
            return res.status(404).send("Applicant not found");
        }
        res.status(200).json(updatedApplicant);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating applicant");
    }
});

// Delete an applicant by ID
app.delete("/applicants/:id", async (req, res) => {
    const applicantId = req.params.id;
    try {
        const deletedApplicant = await ApplicantModel.findByIdAndDelete(applicantId);
        if (!deletedApplicant) {
            return res.status(404).send("Applicant not found");
        }
        res.status(200).send("Applicant deleted successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting applicant");
    }
});

