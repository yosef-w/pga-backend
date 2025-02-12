import { Request, Response } from 'express';


export const Welcome = async (req:Request, res:Response) => {
    res.send('Welcome!');
};

export const UserGreeting = async (req:Request, res:Response) => {
    res.send('Hello World!');
};