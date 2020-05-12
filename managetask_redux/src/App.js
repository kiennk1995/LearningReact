import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskEditing: null,
            filter: {
                name: '',
                status: -1,
            }
        }
    }

    onToggleForm = () => {
        // this.setState({
        //     isDisplayForm: true,
        //     taskEditing: null,
        // })
        this.props.onOpenForm();
        this.props.onClearTask();
    }

    // onShowForm = () => {
    //     this.setState({
    //         isDisplayForm: true
    //     })
    // }

    // onCloseForm = () => {
    //     this.setState({
    //         isDisplayForm: false,
    //         taskEditing: null,
    //     })
    // }

    // onUpdateStatus = (id) => {
    //     var { tasks } = this.state;
    //     var index = tasks.findIndex((obj => obj.id === id));
    //     if (index >= 0) {
    //         tasks[index].status = !tasks[index].status;
    //     }
    //     this.setState({
    //         tasks: tasks
    //     });
    //     localStorage.setItem('tasks', JSON.stringify(tasks));
    // }

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
        // var {  isDisplayForm, taskEditing, filter } = this.state;
        // if (filter) {
        //     if (filter.name) {
        //         tasks = tasks.filter((task) => {
        //             return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1;
        //         });
        //     }
        //     if (filter.status >= 0) {
        //         tasks = tasks.filter((task) => {
        //             return task.status === filter.status;
        //         });
        //     }
        // }
        var { isDisplayForm } = this.props;

        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                        <TaskForm />
                    </div>
                    <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                        <Control />
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList
                                    // tasks={tasks}
                                    onUpdateStatus={this.onUpdateStatus}
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

const mapStateToProps = (state, ownProps) => {
    return {
        isDisplayForm: state.isDisplayForm
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onOpenForm: () => {
            dispatch(actions.openForm());
        },
        onClearTask: () => {
            dispatch(actions.clearForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
