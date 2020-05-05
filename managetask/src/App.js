import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks,
                isDisplayForm: false,
                taskEditing: null,
                filter: {
                    name: '',
                    status: -1,
                }
            });
        }
    }

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID() {
        return this.s4() + this.s4() + this.s4() + this.s4();
    }

    onToggleForm = () => {
        this.setState({
            isDisplayForm: true,
            taskEditing: null,
        })
    }

    onShowForm = () => {
        this.setState({
            isDisplayForm: true
        })
    }

    onCloseForm = () => {
        this.setState({
            isDisplayForm: false,
            taskEditing: null,
        })
    }

    onSubmit = (data) => {
        var { tasks } = this.state;
        if (data.id) {
            var index = tasks.findIndex((obj => obj.id === data.id));
            if (index >= 0) {
                tasks[index].name = data.name;
                tasks[index].status = data.status;
            }
        }
        else {
            data.id = this.generateID();
            tasks.push(data);
        }
        this.setState({
            tasks: tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        this.onCloseForm();
    }

    onUpdateStatus = (id) => {
        var { tasks } = this.state;
        var index = tasks.findIndex((obj => obj.id === id));
        if (index >= 0) {
            tasks[index].status = !tasks[index].status;
        }
        this.setState({
            tasks: tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    onDelete = (id) => {
        var { tasks } = this.state;
        var index = tasks.findIndex((obj => obj.id === id));
        if (index >= 0) {
            tasks.splice(index, 1);
        }
        this.setState({
            tasks: tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        this.onCloseForm();
    }
    onUpdate = (id) => {
        var { tasks } = this.state;
        var index = tasks.findIndex((obj => obj.id === id));
        var taskEditing = tasks[index];
        if (index >= 0) {
            this.setState({
                taskEditing: taskEditing
            });
            this.onShowForm();
        }
    }

    onFilter = (filterName, filterStatus) => {
        filterStatus = parseInt(filterStatus, 10);
        this.setState({
            filter: {
                name: filterName,
                status: filterStatus,
            }
        });
    }

    render() {
        var { tasks, isDisplayForm, taskEditing, filter } = this.state;
        if (filter) {
            if (filter.name) {
                tasks = tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) != -1;
                });
            }
            if (filter.status >= 0) {
                tasks = tasks.filter((task) => {
                    return task.status == filter.status;
                });
            }
        }

        var taskForm = isDisplayForm ?
            <TaskForm
                onSubmit={this.onSubmit}
                onCloseForm={this.onCloseForm}
                task={taskEditing}
            /> : '';
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                        {taskForm}
                    </div>
                    <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                        <Control />
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList
                                    tasks={tasks}
                                    onUpdateStatus={this.onUpdateStatus}
                                    onDelete={this.onDelete}
                                    onUpdate={this.onUpdate}
                                    onFilter={this.onFilter} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
