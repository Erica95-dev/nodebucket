/*
 Title: employee-routes
 * Author: Erica Perry
 * Date:3/25/21
 * Description: employee routes
 */
 
const express = require('express');
const Employee = require('../db-modules/employee');
const BaseResponse = require('../service/base-response');
const Items = require('../db-modules/items');

const router = express.Router();

//http://localhost:3000/api/employees/:empId

/*
http://localhost:3000/api/employees
http://localhost:3000/api/employees/:empId
http://localhost:3000/api/employees
http://localhost:3000/api/employees/:empId
http://localhost:3000/api/employees/:empId




/**
 * * API: findEmployeeById
 * @param empId
 * @returns Employee document or null
 */
router.get('/:empId', async (req, res) => {

    try {
        Employee.findOne({ 'empId': req.params.empId }, function (err, employee) {

            if (err) {
                console.log(err);

                const mongoDBErrorResponse = new BaseResponse('500', `MongoDB Native Error: ${err}`, null);

                res.json(mongoDBErrorResponse.toObject());

            }
            else {
                console.log(employee);

                const employeeResponse = new BaseResponse('200', 'Successful query', employee);

                res.json(employeeResponse.toObject());
            }

        })

    }
    catch (e) {

        console.log(e);
        const findEmployeeCatchError = new BaseResponse('500', `Internal Server Error: ${e.message}`, null);
        res.json(findEmployeeCatchError.toObject());

    }
})
/**
 * API: createTask
 */
router.post('/:empId/tasks', async (req, res) => {

    try {

        Employee.findOne({ 'empId': req.parmas.empId }, function (err, employee) {

            if (err) {
                console.log(err);

                const createTaskMongoDbError = new BaseResponse('500', `MongoDB Exception: ${err.messae}`, null)

                res.status(500).send(createTaskMongoDbError.toObject());
            } else {
                console.log("Inside else statement of create Task API");
                console.log(employee);

                const item = {
                    text: req.body.text
                };
                
                employee.todo.push(item);

                employee.save(function (err, updatedEmployee) {

                    if (err) {
                        console.log(err);

                        const createTaskOnSaveMongoDbError = new BaseResponse('500', `MongoDB onSave() exception: ${err.message}`, null);

                        res.status(500).send(createTaskOnSaveMongoDbError.toObect());

                    } else {
                        console.log(updatedEmployee);

                        const createTaskOnSaveSuccessResponse = new BaseResponse('200', 'Successful query', updateEmployee);

                        res.status(200).send(createTaskOnSaveSuccessResponse.toObject());
                    }
                })
            }

        })
    } catch (e) {
        console.log(e);
    }
});


/**
 * API: findAllTask
 * 
 */

router.get('/:empId/tasks', async (req, res) => {

    try {
        Employee.findOne({ 'empId': req.params.empId }, 'empId todo done', function (err, employee) {

            if (err) {
                console.log(err)

                const mongoDBFindAllTasksException = new BaseResponse('500', `Internal server error ${err.message}`, null);

                res.status(500).send(mongoDBFindAllTasksException.toObject());
            }
            else {
                console.log(employee);

                const employeeTaskResponse = new BaseResponse('200', 'Query successful', employee);
                res.status('200').send(employeeTaskResponse.toObject());
            }



        })
    }
    catch (e) {
        console.log(e)

        const errorCatchResponse = new BaseResponse('500', `Internal server error ${e.message}`, null);

        res.status(500).send(errorCatchResponse.toObject());
    }

})

/**
* API:updateTask
*/

router.put(',empId/tasks', async (req, res) => {
    try {

        Employee.findOne({ 'empId': req.params.empId }, function (err, employee) {
            if (err) {
                console.log(err);

                const updateTaskMongodbException = new BaseResponse('500', `Internal server error ${err.message}`, null);

                res.status(500).send(updateTaskMongodbException.toObject());
            }
            else {
                console.log(employee);

                if (employee) {

                }
                else {
                    console.log('Invalid employeeId');

                    const invalidEmployeeIdResponse = new BaseResponse('200', 'Invalid employeeId', null);

                    res.status(200).send(invalidEmployeeIdResponse.toObect());
                }



            }

        })
    }
    catch (e) {
        console.login(e);

        const deleteTaskCatchError = new BaseResponse('500', `Internal server error ${e.message}`, null);

        res.status(500).send(deleteTaskCatchError.toObject());
    }
})

/**
 * API: deleteTask
 */

router.delete('/:empId/tasks/:taskId', async (req, res) => {
    try {
        Employee.findOne({ 'empId': req.params.empId }, function (err, employee) {
            if (err) {
                console.log(err);

                const deleteTaskMongoDBError = new BaseResponse('500', `Internal server error${err.message}`, null);

                res.status(500).send(deleteTaskMongoDBError.toObject());

            }
            else {
                console.log(employee);

                const todoItem = employee.todo.find(item => item._id.toString() === req.params.taskId);

                const doneItem = employee.done.find(item => item._id.toString() === req.params.taskId);

                if (todoItem) {
                    console.log(todoItem);

                    employee.todo.id(todoItem._id).remove();

                    employee.save(function (err, updatedTodoItemEmployee) {
                        if (err) {
                            console.log(err);
                            const deleteTodoItemkMongodbError = new BaseResponse('500', `Internal server error ${err.message}`, null);
                            res.status(500).send(deleteTodoItemMongodbError.toObjet());
                        }
                        else {

                            console.log(updatedTodoItemEmployee);

                            const deleteTodoItemSuccess = new BaseResponse('200', 'Query successful', updatedTodoItemEmployee);
                            res.status(200).send(deleteTodoItemSuccess.toObject());

                        }
                    })

                }
                else if (doneItem) {
                    console.log(doneItem)

                    employee.done.id(doneItem._id).remove();

                    employee.save(function (err, updateDoneItemEmployee) {
                        if (err) {
                            console.log(err);
                            const deleteDoneItemMongodbError = new BaseResponse('500', ` Internal server error ${err.message}`, null);
                            res.status(500).send(deleteDoneItemMongodbError.toObject());
                        }
                        else {
                            console.log(updatedDoneItemEmployee);
                            const deleteDoneItemSuccess = new BaseResponse('200', 'Query successful', updatedDoneItemEmpoyee);
                            res.status(200).send(updatedDoneItemEmployee.toObject());

                        }
                    })

                }
                else {
                    const invalidTaskIdResponse = new BaseResponse('200', 'Invalid taskId', null);
                    res.status(200).send(invalidTaskIdResponse.toObject());
                    //code goes here
                }

            }

        })
    }
    catch (e) {
        console.log(e);

        const deleteTaskCatchError = new BaseResponse('500', `Internal server error ${e.message}`, null);

        res.status(500).send(deleteTaskCatchError.toObject());
    }
})


module.exports = router;
