import Stripe from 'stripe'
import dotenv from 'dotenv'
import { NextFunction, Response, Request } from 'express'

dotenv.config()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "")

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('Missing STRIPE_SECRET_KEY is required but not fount in env variable')
}

export const createStripePaymentIntent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let amount = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true,
                allow_redirects: "never"
            },

        })
        res.json({
            message: "", data: {
                clientSecret: paymentIntent.client_secret
            }
        })

    } catch (error) {
        res.status(500).json({ message: "Error Creating Stripe Payment", error })

    }
}