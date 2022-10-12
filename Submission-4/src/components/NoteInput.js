import React from "react";

class NoteInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title:'',
            body:'',
            createdAt:'',
            archived:'',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        if(this.state.title.length < 50){
            this.setState((prev) => {
                return{
                    ...prev,
                    title: event.target.value,
                }
            });
        }else{
            this.setState((prev) => {
                return{
                    ...prev,
                    title: event.target.value.slice(0, 50)
                }
            })
        }
    }

    onBodyChangeEventHandler(event){
        this.setState((prev) => {
            return{
                ...prev,
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
      }

    render(){
        return(   
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <input type="text" className="note-input__title" placeholder="input title" value={this.state.title} onChange={this.onTitleChangeEventHandler} required/>
                <p className="note-input__title__char-limit">character : {50 - this.state.title.length}</p>
                <textarea type="text" className="note-input__body" placeholder="input your note" value={this.state.body} onChange={this.onBodyChangeEventHandler} required></textarea>
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default NoteInput;