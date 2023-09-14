const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const shortid = require("shortid"); // Import shortid for generating unique reference numbers

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
    .connect("mongodb+srv://gymly:gymly123@gymly-db-cluster.sfmuyh9.mongodb.net/Applicant-db?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB: ", err);
    });

// Define the ApplicantModel (replace with your actual model)
const ApplicantModel = require("./src/Models/ApplicantModel");

// Connect with frontend
app.get("/getData", (req, res) => {
    res.send("Hello, I'm from the backend");
});

// // Create a new applicant
// app.post("/applicants", async (req, res) => {
//     try {
//         // Extract individual fields from the request body
//         const {
//             name,
//             address,
//             nic,
//             emailAddress,
//             date,
//             applicantDetails,
//             position,
//             Diploma,
//             cv
//         } = req.body;

//         // Generate a unique reference number
//         const referenceNumber = shortid.generate();

//         // Create a new instance of ApplicantModel with the extracted data
//         const applicant = new ApplicantModel({
//             referenceNumber, // Add the generated reference number
//             userId: '065695895622622',
//             name,
//             address,
//             nic,
//             emailAddress,
//             date,
//             applicantDetails,
//             position,
//             Diploma,
//             cv
//         });

//         // Save the applicant to the database
//         await applicant.save();

//         // Respond with a 201 status code and the saved applicant data
//         res.status(201).json(applicant);
//     } catch (err) {
//         // Handle any errors that occur during the process
//         console.error(err);
//         res.status(500).send("Error creating applicant");
//     }
// });

app.post("/applicants", async (req, res) => {
    try {
        // Check if the 'name' field is provided in the request body
        // if (!req.body.name) {
        //     return res.status(400).json({ error: "Name is required" });
        // }

        // Extract individual fields from the request body
        const {
            name,
            address,
            nic,
            emailAddress,
            date,
            applicantDetails,
            position,
            Diploma,
            cv
        } = req.body;

        // Create a new instance of ApplicantModel with the extracted data
        const applicant = new ApplicantModel({

            userId: '065695895622622',
            name,
            address,
            nic,
            emailAddress,
            date,
            applicantDetails,
            position,
            Diploma,
            cv
        });

        // Save the applicant to the database
        await applicant.save();

        // Respond with a 201 status code and the saved applicant data
        res.status(201).json(applicant);
    } catch (err) {
        // Handle any errors that occur during the process
        console.error(err);
        res.status(500).send("Error creating applicant");
    }
});


// Get all applicants
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

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
