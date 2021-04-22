import { Request, Response } from 'express';

import { connect } from '../database'
import { User } from '../models/User';

export async function getUsers(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const courses = await conn.query('SELECT * FROM users');
    return res.json(courses[0]);
}

export async function createUser(req: Request, res: Response) {
    const newUser: User = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO users SET ?', [newUser]);
    return res.json({
        message: 'User Created'
    });
}

export async function getUser(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const conn = await connect();
    const user = await conn.query('SELECT * FROM users WHERE id = ?', [id]);

    return res.json(user[0]);
}

export async function updateUser(req: Request, res: Response) {
    const id = req.params.id;
    const updateUser: User = req.body;
    const conn = await connect();
    await conn.query('UPDATE users SET ? WHERE id = ?', [updateUser, id]);
    return res.json({
        message: 'User updated'
    });
}