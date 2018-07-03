import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, TableRow, Box } from 'grommet';

class AdminUsers extends Component {
  render() {
    return (
      <Box 
      pad='medium'
      margin='large'>
        <Table scrollable={true}>
          <thead>
            <tr>
              <th>
                NAME
            </th>
              <th>
                EMAIL
            </th>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <td>
                1
            </td>
              <td>
                Alan
            </td>
            </TableRow>
          </tbody>
        </Table>
      </Box>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {})(AdminUsers);