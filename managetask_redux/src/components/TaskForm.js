import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: true
        }
    }
    componentWillMount() {
        if (this.props.itemEditing) {
            this.setState({
                name: this.props.itemEditing.name,
                status: this.props.itemEditing.status,
                id: this.props.itemEditing.id,
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            this.setState({
                name: nextProps.itemEditing.name,
                status: nextProps.itemEditing.status,
                id: nextProps.itemEditing.id,
            })
        } else {
            this.setState({
                id: '',
                name: '',
                status: true
            })
        }
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onSubmit = (event) => {
        event.preventDefault();
        // this.props.onSubmit(this.state);
        this.props.onAddTask(this.state);

        this.props.onCloseForm();
        this.onClear();
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        });
    }

    onClear = () => {
        this.setState({
            id : '',
            name: '',
            status: true
        });
    }

    render() {
        var { id } = this.state;
        if (!this.props.isDisplayForm) {
            return '';
        }
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">{id ? 'Cập Nhật Công Việc' : 'Thêm Công Việc'}
                        <span className="fa fa-times-circle text-right" onClick={this.onCloseForm}></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange} />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control" required="required" name="status" value={this.state.status} onChange={this.onChange} >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">{id ? 'Cập Nhật' : 'Thêm'}</button>&nbsp;
                        <button type="button" className="btn btn-danger" onClick={this.onClear}>Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditing : state.itemEditing,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddTask: (task) => {
            dispatch(actions.addTask(task));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
