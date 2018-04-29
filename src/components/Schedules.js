import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});

class Schedules extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Línea</TableCell>
              <TableCell numeric>Hora salida</TableCell>
              <TableCell numeric>Hora llegada</TableCell>
              <TableCell numeric>Duración</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.schedules.map((s, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{s.line}</TableCell>
                  <TableCell numeric>{s.departure}</TableCell>
                  <TableCell numeric>{s.arrival}</TableCell>
                  <TableCell numeric>--</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(Schedules);
