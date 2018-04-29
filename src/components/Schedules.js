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
  tableCell: {
    textAlign: 'center',
    padding: 7,
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
              <TableCell className={classes.tableCell}>Línea</TableCell>
              <TableCell className={classes.tableCell}>Hora salida</TableCell>
              <TableCell className={classes.tableCell}>Hora llegada</TableCell>
              <TableCell className={classes.tableCell}>Duración</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.schedules.map((s, i) => {
              return (
                <TableRow key={i}>
                  <TableCell className={classes.tableCell}>{s.line}</TableCell>
                  <TableCell className={classes.tableCell}>{s.departure}</TableCell>
                  <TableCell className={classes.tableCell}>{s.arrival}</TableCell>
                  <TableCell className={classes.tableCell}>--</TableCell>
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
