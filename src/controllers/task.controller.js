import { Taks } from "../models/task.model";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

export const createTask = asyncHandler(async (req, res) => {
    const task = await Taks.create(req.body);
    return res
        .status(201)
        .json(new ApiResponse(201, task, "Task created successfully"));
});