// Dependencies
const express = require('express');
const peopleRouter = express.Router();
const People = require('../models/people')


// peopleRouter.get("/", async (req, res) => {
//     try {
//       // Fetch the object from the database
//       const object = await People.findOne({}); // Assuming you want to retrieve a single object
  
//       // Check if an object is found
//       if (object) {
//         // Send the object as the response
//         res.json(object);
//       } else {
//         // If no object is found, send an appropriate message
//         res.status(404).json({ message: "No object found" });
//       }
//     } catch (error) {
//       // Send error if any occurs
//       res.status(500).json(error);
//     }
//   });

  // PEOPLE INDEX ROUTE
  peopleRouter.get("/", async (req, res) => {
    try {
      // send all people
      res.json(await People.find({}));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });
  
  // PEOPLE CREATE ROUTE
  peopleRouter.post("/", async (req, res) => {
    try {
      // send all people
      res.json(await People.create(req.body));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });
  
  // PEOPLE DELETE ROUTE
  peopleRouter.delete("/:id", async (req, res) => {
    try {
      // send all people
      res.json(await People.findByIdAndRemove(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });
  
  // PEOPLE UPDATE ROUTE
  peopleRouter.put("/:id", async (req, res) => {
    try {
      // send all people
      res.json(
        await People.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });


// Export User Router
module.exports = peopleRouter;