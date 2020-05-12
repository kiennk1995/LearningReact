import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends Component {

    onUpdateStatus = () => {
        this.props.updateStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.deleteTask(this.props.task.id);
        this.props.onCloseForm();
    }

    onUpdate = () => {
        // this.props.onUpdate(this.props.task.id);
        this.props.onOpenForm();
        this.props.onEditTask(this.props.task);
    }

    render() {
        var { task, index } = this.props;
        return (
            <tr>
                <td>{++index}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span
                        className={task.status ? 'label label-success' : 'label label-danger'}
                        onClick={this.onUpdateStatus} >
                        {task.status ? 'Active' : 'Disabled'}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.onUpdate}>
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    <button type="button" className="btn btn-danger" onClick={this.onDelete}>
                        <span className="fa fa-trash mr-5"></span>Xóa
                </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.tasks.id
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateStatus: (id) => {
            dispatch(actions.updateStatus(id))
        },
        deleteTask: (id) => {
            dispatch(actions.deleteTask(id))
        },
        onToggleForm: () => {
            dispatch(actions.toggleForm());
        },
        onOpenForm: () => {
            dispatch(actions.openForm());
        },
        onEditTask: (task) => {
            dispatch(actions.editTask(task));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
