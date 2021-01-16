import { Link, withRouter } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import NotesIcon from '@material-ui/icons/Notes';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

function CCNotes(props) {
  return (
    <div>
      <h5 className="headerPage">NOTES</h5>
      <form className="notesForm formAnimate" noValidate autoComplete="off">
        {props.getNotefromParent.length !== 0 ? <TableContainer className="table" component={Paper}>
          <Table aria-label="simple table">
            <TableHead className="tableHeader">
              <TableRow>
                <TableCell style={{ fontWeight: 'bold' }}> <NotesIcon /></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tableBody">
              {props.getNotefromParent.map((note, index) => (
                <TableRow className="tableRow" key={index}>
                  <TableCell style={{ fontWeight: 'bold', fontSize: '30px' }}>
                    {note.noteTitle}
                  </TableCell>
                  <TableCell>{note.noteDesc.length >= 50 ? note.noteDesc.substring(0, note.noteDesc.length - note.noteDesc.length / 2) : note.noteDesc}</TableCell>
                  <TableCell><DeleteForeverOutlinedIcon className="Trash" onClick={() => props.sendDeletedNoteFromToParent(index)} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> : "There are no notes."}
        <br /><br /><br />
        <Link className="Link" to="/main">Go to Notes page</Link>
      </form>
    </div>
  )
}

export default withRouter(CCNotes);