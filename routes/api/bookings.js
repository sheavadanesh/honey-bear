const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Booking = require("../../models/Booking");
const validateBookingInput = require("../../validation/bookings");

router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { errors, isValid } = validateBookingInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newBooking = new Booking({
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            days: req.body.days,
            totalPrice: req.body.totalPrice,
            user: req.user.id,
            item: req.item.id,
        });

        newBooking.save().then((booking) => res.json(booking));
    }

);


