import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const UpdateAssignee = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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

    const handleUpdateTask = () => {
        axios.put(`${apiUrl}/${editingTask.taskId}`, editingTask)
            .then(() => {
                fetchTasks(); // Refresh the task list
                setEditingTask(null); // Clear the editing state
            })
            .catch(error => setError(error.message));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <Typography variant="h4" component="h4" gutterBottom >
                TechLead View
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold' }}>Task ID</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Task Name</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Task Description</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>User ID</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Task Status</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Assignee</TableCell>
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
                                <TableCell>{task.assignee}</TableCell>
                                <TableCell>
                                    <button onClick={() => setEditingTask(task)}>Edit</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {editingTask && (
                <div>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Add Assignee
                    </Typography>
                    <input
                        type="text"
                        value={editingTask.assignee}
                        onChange={e => setEditingTask({ ...editingTask, assignee: e.target.value })}
                    />
                    <button onClick={handleUpdateTask}>Add Assignee</button>
                    <button onClick={() => setEditingTask(null)}>Cancel</button>
                </div>
            )}
        </div>
    );
}

export default UpdateAssignee;
