import React, {FormEvent} from 'react';
import { connect } from 'react-redux';
import {addTodoAC} from "../actions/actions";
import {Dispatch} from "redux";
const AddTodo = ({ dispatch }:{dispatch:Dispatch}) => {
    let input:HTMLInputElement|null;

    return (
        <div>
            <form
                onSubmit={(e:FormEvent<HTMLFormElement>) => {
                    if(input!=null) {
                        e.preventDefault();
                        if (!input.value.trim()) {
                            return;
                        }
                        dispatch(addTodoAC(input.value));
                        input.value = '';
                    }
                }}
            >
                <input ref={(node) => (input = node)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default connect()(AddTodo);