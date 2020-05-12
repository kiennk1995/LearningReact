import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1,
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilterTable({
            name: name === 'filterName' ? value : this.state.filterName,
            status: name === 'filterStatus' ? value : this.state.filterStatus,
        });
        this.setState({
            [name]: value
        });
    }

    render() {
        var { filterName, filterStatus } = this.state;
        var { tasks, filterTable } = this.props;
        if (filterTable) {
            if (filterTable.name) {
                tasks = tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1;
                });
            }
            if (filterTable.status >= 0) {
                tasks = tasks.filter((task) => {
                    return task.status === (filterTable.status === 1 ? true : false);
                });
            }
        }
        var elementTasks = tasks ? tasks.map((task, index) => {
            return <TaskItem
                key={task.id}
                task={task}
                index={index}
                onUpdate={this.props.onUpdate}
            />
        }) : null;
        return (
            <table className="table table-bordered table-hover mt-25">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input type="text" className="form-control" name="filterName" value={filterName} onChange={this.onChange} />
                        </td>
                        <td>
                            <select className="form-control" name="filterStatus" value={filterStatus} onChange={this.onChange}>
                                <option value="-1">Tất Cả</option>
                                <option value="0">Ẩn</option>
                                <option value="1">Kích Hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {elementTasks}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        filterTable: state.filterTable,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onFilterTable: (filter) => {
            dispatch(actions.filterTask(filter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
