import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from '@mui/material';

const AddtaskComponent = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newTask, setNewTask] = useState({ taskName: '', taskDescription: '', userId: '', taskStatus: '', department: '' });
    const [editingTask, setEditingTask] = useState(null);
    const apiUrl = 'https://localhost:7228/api/Task';

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = () => {
        setLoading(true);
        axios.get(apiUrl)
            .then(response => {
                setTasks(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    };

    const handleAddTask = () => {
        axios.post(apiUrl, newTask)
            .then(() => {
                fetchTasks(); // Refresh the task list
                setNewTask({ taskName: '', taskDescription: '', userId: '', taskStatus: '', department: '' }); // Clear the input fields
            })
            .catch(error => setError(error.message));
    };

    const handleUpdateTask = () => {
        axios.put(`${apiUrl}/${editingTask.taskId}`, editingTask)
            .then(() => {
                fetchTasks(); // Refresh the task list
                setEditingTask(null); // Clear the editing state
            })
            .catch(error => setError(error.message));
    };

    const handleDeleteTask = (id) => {
        axios.delete(`${apiUrl}/${id}`)
            .then(() => {
                fetchTasks(); // Refresh the task list
            })
            .catch(error => setError(error.message));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <Typography variant="h4" component="h1" gutterBottom style={{ fontWeight: 'bold' }}>
                Task List
            </Typography>

            <div>
                <Typography variant="h5" component="h2">
                    Add New Task
                </Typography>
                <TextField
                    label="Task Name"
                    value={newTask.taskName}
                    onChange={e => setNewTask({ ...newTask, taskName: e.target.value })}
                    margin="normal"
                    fullWidth
                />
                <TextField
                    label="Description"
                    value={newTask.taskDescription}
                    onChange={e => setNewTask({ ...newTask, taskDescription: e.target.value })}
                    margin="normal"
                    fullWidth
                />
                <TextField
                    label="UserId"
                    value={newTask.userId}
                    onChange={e => setNewTask({ ...newTask, userId: e.target.value })}
                    margin="normal"
                    fullWidth
                />
                <TextField
                    label="Status"
                    value={newTask.taskStatus}
                    onChange={e => setNewTask({ ...newTask, taskStatus: e.target.value })}
                    margin="normal"
                    fullWidth
                />
                <TextField
                    label="Department"
                    value={newTask.department}
                    onChange={e => setNewTask({ ...newTask, department: e.target.value })}
                    margin="normal"
                    fullWidth
                />
                <Button variant="contained" color="primary" onClick={handleAddTask}>
                    Add Task
                </Button>
            </div>

            {editingTask && (
                <div>
                    <Typography variant="h5" component="h2">
                        Edit Task
                    </Typography>
                    <TextField
                        label="Task Name"
                        value={editingTask.taskName}
                        onChange={e => setEditingTask({ ...editingTask, taskName: e.target.value })}
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        label="Description"
                        value={editingTask.taskDescription}
                        onChange={e => setEditingTask({ ...editingTask, taskDescription: e.target.value })}
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        label="UserId"
                        value={editingTask.userId}
                        onChange={e => setEditingTask({ ...editingTask, userId: e.target.value })}
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        label="Status"
                        value={editingTask.taskStatus}
                        onChange={e => setEditingTask({ ...editingTask, taskStatus: e.target.value })}
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        label="Department"
                        value={editingTask.department}
                        onChange={e => setEditingTask({ ...editingTask, department: e.target.value })}
                        margin="normal"
                        fullWidth
                    />
                    <Button variant="contained" color="primary" onClick={handleUpdateTask}>
                        Update Task
                    </Button>
                    <Button variant="contained" onClick={() => setEditingTask(null)}>
                        Cancel
                    </Button>
                </div>
            )}

            <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold' }}>Task ID</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Task Name</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Task Description</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>User ID</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Task Status</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Assignee</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Department</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks.map(task => (
                            <TableRow key={task.taskId}>
                                <TableCell>{task.taskId}</TableCell>
                                <TableCell>{task.taskName}</TableCell>
                                <TableCell>{task.taskDescription}</TableCell>
                                <TableCell>{task.userId}</TableCell>
                                <TableCell>{task.taskStatus}</TableCell>
                                <TableCell>{task.assignee ? task.assignee : 'N/A'}</TableCell>
                                <TableCell>{task.department}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" onClick={() => setEditingTask(task)}>
                                        Edit
                                    </Button>
                                    <Button variant="contained" color="secondary" onClick={() => handleDeleteTask(task.taskId)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AddtaskComponent;
