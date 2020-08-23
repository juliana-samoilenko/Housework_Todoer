import React, { Component } from "react";
import './style.scss';

export default class NewTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    }

    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleRejectCreateTask = this.handleRejectCreateTask.bind(this);
  }

  handleAddTask() {
    this.setState({
      isActive: true,
    })
  }

  handleRejectCreateTask() {
    this.setState({
      isActive: false,
    })
  }

  handleAcceptCreateTask() {

  }

  render() {
    return this.state.isActive ? (
      <article className="create-task-card">
        <div className="create-task-card__header">
          <p className="create-task-card__title">New housework task</p>
        </div>

        <form className="create-task-form">
          <div className="create-task-card__body">
            <div className="create-task-form__title">
              <label className="description-title">Title</label>
              <textarea className="description-textarea" autofocus required></textarea>
            </div>
            <div className="create-task-form__reward">
              <label className="reward-title">Reward</label>
              <input className="reward-input" type="number" min="0" max="999" required></input>
            </div>
          </div>

            <div className="create-task-card__footer">
              <button className="cancel-button" type="button" onClick={this.handleRejectCreateTask}>
                Cancel
              </button>
              <button className="create-task-button" type="submit">
                Create
              </button>
            </div>
        </form>
      </article>
    ) : (
      <button type="button" className="add-task-button" onClick={this.handleAddTask}>
        <div className="new-task-card">
          <p className="add-task">+</p>
        </div>
      </button>
    )
  }
}