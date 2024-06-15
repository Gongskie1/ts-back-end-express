import { Request, Response } from "express";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-params";
import { User } from "../types/response";

export function getUsers(request:Request,response:Response){
    return response.send({});
}

export function getUsersByID(request:Request,response:Response){
    return response.send({});
}

export function createUser(
    request:Request<{},{}, CreateUserDto,CreateUserQueryParams>,
    response:Response<User>)
{
    request.customeField;
    response.status(200).send({
        id:1,
        email:"gongksie",
        username:"mark",
    })
}