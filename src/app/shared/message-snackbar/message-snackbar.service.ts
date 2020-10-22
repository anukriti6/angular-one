import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageSnackbarData, SnackBarType } from './message-snackbar-data';
@Injectable({
  providedIn: 'root'
})
export class MessageSnackbarService {
durationInSeconds = 5;
  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(messageSnackbarData: MessageSnackbarData) {
    this._snackBar.open(messageSnackbarData.message,'x',{
      duration: messageSnackbarData.duration?messageSnackbarData.duration:this.durationInSeconds*1000,
      horizontalPosition:"center",
      verticalPosition:"top",
      panelClass: this.getClassFromType(messageSnackbarData.type),

    });
  }
  getClassFromType(snackBarType: SnackBarType){
    switch (snackBarType){
      case "INFO": {
        return "snackbar-info";
      }
      case "ERROR": {
        return "snackbar-error";
      }
      case "SUCCESS": {
        return "snackbar-success";
      }
    }
  }
}
