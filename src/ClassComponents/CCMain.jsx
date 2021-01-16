import logo from '.././note_icon.png';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class CCMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listNote: [],
        };
    }

    chgTitle = (e) => {
        this.setState({
            noteTitle: e.target.value
        })
    }

    chgDesc = (e) => {
        this.setState({
            noteDesc: e.target.value
        })
    }

    btnAdd = () => {
        if (this.state.noteTitle === undefined || this.state.noteDesc === undefined) {
            alert("Please fill in a new note or go to the existing notes page!")
        }

        else {
            this.props.history.push({
                pathname: '/notes',
            });
            this.props.sendNoteToParent({ noteTitle: this.state.noteTitle, noteDesc: this.state.noteDesc })
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h5 className="headerPage">MAIN
                <Link className="btnLogOut" to="/">LOG OUT</Link>
                    </h5>
                </div>
                <div className="bodyMain">
                    <form className="formMain formAnimate" noValidate autoComplete="off">
                        <div className="imgcontainer">
                            <img src={logo} alt="Avatar" className="avatar" />
                        </div>
                        <div className="container">
                            <input type="text" placeholder="Insert Note Title..." name="ntitle" onChange={this.chgTitle} />
                            <br />
                            <textarea className="inputDescription" style={{ height: "200px" }} placeholder="Write Note Description.." name="ndesc" onChange={this.chgDesc}></textarea>
                            <Button className="btnAdd" variant="contained" color="primary" onClick={this.btnAdd}>Add Note</Button>
                            <br />
                            <Link className="Link" to="/notes">Go to Notes page</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(CCMain);