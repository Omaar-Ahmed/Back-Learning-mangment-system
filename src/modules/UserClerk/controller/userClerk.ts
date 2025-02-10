import { NextFunction, Request, Response } from "express";
import Course from "../../../../DB/models/courseModel";
import { clerkClient } from "../../../index";


export const updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { userId } = req.params;
    const userData = req.body
    try {
        clerkClient.users.updateUserMetadata(userId, {
            publicMetadata: {
                userType: userData.publicMetadata.userType,
                settings: userData.publicMetadata.settings
            }
        })
        res.json({ message: "Done" })
    } catch (error) {
        res.status(500).json({ message: "Error", error })
    }
}
